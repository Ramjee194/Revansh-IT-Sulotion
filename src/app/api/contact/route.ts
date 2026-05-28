import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("Contact API Request Received:", { name, email, subject });

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let dbSaved = false;
    let emailSent = false;
    let dbErrorMsg = "";
    let emailErrorMsg = "";

    // 1. Try to Save to Database
    try {
      await connectDB();
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
      dbSaved = true;
      console.log("DB Save: Success");
    } catch (dbError: any) {
      console.error("DB Save Error:", dbError.message);
      dbErrorMsg = dbError.message || "Unknown DB error";
    }

    // 2. Try to Send Email Notification
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS?.replace(/\s/g, ""), // Ensure no spaces
        },
        tls: {
          // This fixes the "self-signed certificate in certificate chain" error
          rejectUnauthorized: false
        }
      });

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: `[LEAD] ${subject} - ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; color: #0f172a;">
            <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Submission</h2>
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="padding: 15px; border-left: 4px solid #2563eb; background: #fff;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #334155;">${message}</p>
            </div>
            <footer style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
              Sent from Orbous IT & Software Solutions Website
            </footer>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log("Email Notification: Success");
    } catch (mailError: any) {
      console.error("Mail Sending Error:", mailError.message);
      emailErrorMsg = mailError.message || "Unknown Email error";
    }

    // If at least one succeeded, we consider it a success
    if (dbSaved || emailSent) {
      return NextResponse.json(
        { 
          message: "Contact processed successfully", 
          status: {
            db: dbSaved ? "success" : "failed",
            email: emailSent ? "success" : "failed"
          },
          errors: {
            db: dbSaved ? null : dbErrorMsg,
            email: emailSent ? null : emailErrorMsg
          }
        },
        { status: 201 }
      );
    }

    // If both failed, return 500 with details
    return NextResponse.json(
      { 
        error: "Message delivery failed", 
        details: { db: dbErrorMsg, email: emailErrorMsg } 
      },
      { status: 500 }
    );

  } catch (error: any) {
    console.error("Contact API Critical Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
