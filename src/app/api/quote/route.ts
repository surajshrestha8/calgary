import { NextResponse } from "next/server";

interface QuoteRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  monthlyUnits?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest;
    const requiredFields: Array<keyof QuoteRequest> = [
      "firstName",
      "lastName",
      "email",
      "service",
      "monthlyUnits",
      "message",
    ];

    const missingFields = requiredFields.filter(
      (field) => !body[field] || !body[field]?.trim(),
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: "Please complete all required fields before sending." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(body.email || "")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    console.info("New quote request", {
      firstName: body.firstName?.trim(),
      lastName: body.lastName?.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim() || null,
      service: body.service?.trim(),
      monthlyUnits: body.monthlyUnits?.trim(),
      message: body.message?.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message:
        "Thanks - your request was received. We will reply within one business day.",
    });
  } catch (error) {
    console.error("Quote API Error:", error);

    return NextResponse.json(
      { error: "We could not send your request right now. Please email hello@calgaryprep.ca." },
      { status: 500 },
    );
  }
}
