import { NextResponse } from "next/server";
import { Resend } from "resend";

interface QuoteRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  monthlyUnits?: string;
  message?: string;
  companyWebsite?: string;
}

interface NormalizedQuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  monthlyUnits: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMessage =
  "Thanks - your request was received. We will reply within one business day.";
const maxSubmissions = 5;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function cleanValue(value: unknown, maxLength: number) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeQuoteRequest(body: QuoteRequest): NormalizedQuoteRequest {
  return {
    firstName: cleanValue(body.firstName, 80),
    lastName: cleanValue(body.lastName, 80),
    email: cleanValue(body.email, 160).toLowerCase(),
    phone: cleanValue(body.phone, 40),
    service: cleanValue(body.service, 120),
    monthlyUnits: cleanValue(body.monthlyUnits, 80),
    message: cleanValue(body.message, 2000),
  };
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= maxSubmissions) {
    return true;
  }

  current.count += 1;
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildQuoteEmail(quote: NormalizedQuoteRequest) {
  const fullName = `${quote.firstName} ${quote.lastName}`;
  const rows = [
    ["Name", fullName],
    ["Email", quote.email],
    ...(quote.phone ? [["Phone", quote.phone]] : []),
    ["Service", quote.service],
    ["Estimated monthly units", quote.monthlyUnits],
    ["Product details", quote.message],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th style="text-align:left;vertical-align:top;padding:8px 12px;background:#f2f1eb;border:1px solid #ddd;color:#1a2426;">${escapeHtml(label)}</th>
          <td style="padding:8px 12px;border:1px solid #ddd;color:#1a2426;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return {
    subject: `New quote request from ${fullName}`,
    text,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1a2426;">
        <h1 style="font-size:20px;margin:0 0 16px;">New quote request</h1>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          ${htmlRows}
        </table>
      </div>`,
  };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest;
    const quote = normalizeQuoteRequest(body);
    const requiredFields: Array<keyof NormalizedQuoteRequest> = [
      "firstName",
      "lastName",
      "email",
      "service",
      "monthlyUnits",
      "message",
    ];

    if (cleanValue(body.companyWebsite, 200)) {
      return NextResponse.json({ message: successMessage });
    }

    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        {
          error:
            "Too many requests were sent from this connection. Please try again in a few minutes.",
        },
        { status: 429 },
      );
    }

    const missingFields = requiredFields.filter((field) => !quote[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: "Please complete all required fields before sending." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(quote.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Quote email is not configured: RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error:
            "We could not send your request right now. Please email expertscalgary@gmail.com.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const email = buildQuoteEmail(quote);
    const { error } = await resend.emails.send({
      from:
        process.env.QUOTE_EMAIL_FROM ||
        "Calgary Prep Quotes <expertscalgary@gmail.com>",
      to: [process.env.QUOTE_EMAIL_TO || "expertscalgary@gmail.com"],
      replyTo: quote.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      console.error("Quote email failed:", error);

      return NextResponse.json(
        {
          error:
            "We could not send your request right now. Please email expertscalgary@gmail.com.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: successMessage,
    });
  } catch (error) {
    console.error("Quote API Error:", error);

    return NextResponse.json(
      { error: "We could not send your request right now. Please email expertscalgary@gmail.com." },
      { status: 500 },
    );
  }
}
