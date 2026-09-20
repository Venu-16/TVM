import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, college, branch, projectDomain, projectRequirement, whatsappNumber, email } = body;

    // Validate essential fields
    if (!name || !college || !branch || !whatsappNumber || !email) {
      return NextResponse.json(
        { error: "Missing required fields in project guidance submission." },
        { status: 400 }
      );
    }

    // In production, connect this to database, email provider (e.g. Resend), or webhook (e.g. Discord/Slack/Telegram)
    console.log("[Project Guidance Request Received]:", {
      timestamp: new Date().toISOString(),
      name,
      college,
      branch,
      projectDomain,
      projectRequirement,
      whatsappNumber,
      email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project guidance request logged successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return NextResponse.json(
      { error: "Internal server error processing guidance request." },
      { status: 500 }
    );
  }
}
