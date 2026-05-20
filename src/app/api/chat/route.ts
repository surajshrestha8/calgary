import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const systemInstruction = `You are the Calgary Prep Center AI Assistant.
Your goal is to help e-commerce sellers with their prep and 3PL needs in Calgary, AB.
You are professional, efficient, and helpful.

Key Info:
- Location: Calgary, AB.
- Services: Amazon FBA Prep, FBM Fulfillment, FNSKU Labeling, Storage, Bundling.
- Pricing: $0.65/unit (Starter), $1.25/unit (FBA Pro), $22/pallet (Storage).
- Turnaround: 24-hour guarantee.
- Contact: info@calgaryprepexperts.com or (403) 555-0199.
- Opening Hours: Mon-Sat, 9AM-6PM MT.

Be concise. If you don't know an answer, direct them to contact sales.`;

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Sorry, the chat assistant is currently in demo mode. Please contact info@calgaryprepexperts.com for real support!",
      },
      { status: 503 },
    );
  }

  try {
    const { messages } = (await request.json()) as { messages?: ChatMessage[] };
    const safeMessages = Array.isArray(messages) ? messages : [];

    const contents = safeMessages
      .filter(
        (message) =>
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim(),
      )
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content.trim() }],
      }));

    if (contents.length === 0) {
      return NextResponse.json(
        { error: "Please send a message before asking the assistant." },
        { status: 400 },
      );
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction,
      },
    });

    return NextResponse.json({
      message:
        response.text ||
        "I'm sorry, I couldn't process that. Please try again.",
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        error:
          "I'm having trouble connecting right now. Feel free to email us at info@calgaryprepexperts.com!",
      },
      { status: 500 },
    );
  }
}
