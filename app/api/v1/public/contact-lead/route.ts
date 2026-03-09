import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
const targetEmail = process.env.CONTACT_TARGET_EMAIL;

if (!apiKey || !targetEmail) {
  console.error("SENDGRID_API_KEY or CONTACT_TARGET_EMAIL is missing");
}

sgMail.setApiKey(apiKey || "");

export async function POST(request: Request) {
  try {
    if (!apiKey || !targetEmail) {
      return NextResponse.json(
        { success: false, error: "config_error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { full_name, email, phone } = body;

    if (!full_name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg = {
      to: targetEmail,
      from: "noreply@metapel.online",
      subject: "New Metapel website lead",
      text: `New lead from website:\n\nName: ${full_name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}`,
      html: `
        <h2>New Metapel website lead</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "send_error" },
      { status: 500 }
    );
  }
}
