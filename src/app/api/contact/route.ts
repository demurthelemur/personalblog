// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Named export for POST method
export async function POST(request: Request) {
  const { name, contact, message } = await request.json();

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail account
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "workdemirdereli@gmail.com", // Your personal email
    subject: `New message from ${name}`,
    text: `You have a new message from your website contact form.\n\nName: ${name}\nContact: ${contact}\n\nMessage:\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
