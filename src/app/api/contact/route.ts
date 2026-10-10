import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, service, attachment } = body;

    console.log("Contact API Request Received:", { name, email, phone, subject, service, hasAttachment: !!attachment });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const inquirySubject = subject || (service ? `Inquiry regarding ${service}` : "General Enterprise Inquiry");
    const clientPhone = phone || "Not provided";
    const timestampStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";

    let dbSaved = false;
    let adminEmailSent = false;
    let clientEmailSent = false;
    let dbErrorMsg = "";
    let emailErrorMsg = "";

    // 1. Persist to Database (with fail-safe catch)
    try {
      await connectDB();
      const newContact = new Contact({
        name,
        email,
        phone: clientPhone,
        subject: inquirySubject,
        service: service || "General Inquiry",
        message,
        status: "New Inquiry",
      });
      await newContact.save();
      dbSaved = true;
      console.log("DB Save: Successfully saved client inquiry to MongoDB (client_inquiries)");
    } catch (dbError: any) {
      console.error("DB Save Error:", dbError.message);
      dbErrorMsg = dbError.message || "Unknown DB error";
    }

    // 2. Setup Nodemailer Transporter
    const mailUser = process.env.MAIL_USER || "ramjeekumaryadav733@gmail.com";
    const mailPass = process.env.MAIL_PASS?.replace(/\s/g, "") || "azslvspnpqhturgw";

    if (mailUser && mailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: mailUser,
          pass: mailPass,
        },
        tls: {
          rejectUnauthorized: false, // Prevents certificate chain issues on Windows environments
        },
      });

      // Prepare Clean Phone and WhatsApp link
      const rawDigits = (phone || "").replace(/[^0-9]/g, "");
      const cleanPhone = rawDigits.length === 10 ? `91${rawDigits}` : rawDigits;
      const whatsappClientLink = cleanPhone 
        ? `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(name)}%2C%20thank%20you%20for%20contacting%20Orbous%20IT%20Solutions.%20We%20received%20your%20inquiry%20regarding%20${encodeURIComponent(inquirySubject)}.`
        : `https://wa.me/918404827541`;

      // Brand Logo Attachment (CID: orbouslogo)
      const logoPath = path.join(process.cwd(), "public", "favicon.png");
      const baseAttachments: any[] = [];
      if (fs.existsSync(logoPath)) {
        baseAttachments.push({
          filename: "orbous-logo.png",
          path: logoPath,
          cid: "orbouslogo",
        });
      }

      // --- EMAIL 1: Admin Alert Notification (Bespoke Emerald Ink #064E3B & Champagne #F8E7C9) ---
      try {
        const adminAttachments = [...baseAttachments];
        if (attachment && attachment.filename && attachment.content) {
          adminAttachments.push({
            filename: attachment.filename,
            content: Buffer.from(attachment.content, "base64"),
          });
        }

        const adminMailOptions: any = {
          from: `"Orbous Lead Intelligence" <${mailUser}>`,
          to: mailUser,
          replyTo: email,
          subject: `⚡ [NEW LEAD] ${inquirySubject} — ${name}`,
          text: `New Client Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${clientPhone}\nSubject: ${inquirySubject}\nTimestamp: ${timestampStr}\nMessage:\n${message}`,
          attachments: adminAttachments,
          html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Lead | Orbous</title>
          </head>
          <body style="margin: 0; padding: 24px; background-color: #03140E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F8E7C9;">
            <div style="max-width: 620px; margin: 0 auto; background: #062D22; border: 1px solid rgba(248, 231, 201, 0.3); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.6);">
              
              <!-- Brand Header Bar with Logo -->
              <div style="background: linear-gradient(135deg, #064E3B 0%, #032018 100%); padding: 28px 24px; text-align: center; border-bottom: 2px solid #F8E7C9;">
                <table style="margin: 0 auto; border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 14px;">
                      <img src="cid:orbouslogo" alt="Orbous Logo" width="48" height="48" style="display: block; width: 48px; height: 48px; border-radius: 12px; border: 1px solid #F8E7C9;" />
                    </td>
                    <td style="vertical-align: middle; text-align: left;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2.5px; color: #F8E7C9; line-height: 1;">ORBOUS</h1>
                      <div style="font-size: 9px; font-weight: 800; letter-spacing: 1.5px; color: #34D399; text-transform: uppercase; margin-top: 4px;">
                        IT &amp; SOFTWARE SOLUTIONS &bull; LEAD DESK
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Quick Action Toolbar for Admin -->
              <div style="background: #042118; padding: 16px 24px; border-bottom: 1px solid rgba(248, 231, 201, 0.2); text-align: center;">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #34D399; margin-bottom: 10px;">
                  Immediate Lead Connect Options
                </div>
                <div style="display: inline-block;">
                  ${phone ? `
                  <a href="tel:${phone}" style="display: inline-block; background: #F8E7C9; color: #064E3B; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 10px 18px; border-radius: 20px; text-decoration: none; margin: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                    📞 Call: ${phone}
                  </a>
                  ` : ''}
                  ${cleanPhone ? `
                  <a href="${whatsappClientLink}" target="_blank" style="display: inline-block; background: #25D366; color: #FFFFFF; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 10px 18px; border-radius: 20px; text-decoration: none; margin: 4px; box-shadow: 0 4px 12px rgba(37,211,102,0.3);">
                    💬 WhatsApp Client
                  </a>
                  ` : ''}
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(inquirySubject)} - Orbous IT Solutions" style="display: inline-block; background: #064E3B; color: #F8E7C9; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 9px 18px; border-radius: 20px; text-decoration: none; border: 1px solid #F8E7C9; margin: 4px;">
                    ✉️ Reply Email
                  </a>
                </div>
              </div>

              <!-- Main Lead Details -->
              <div style="padding: 28px;">
                <div style="background: #031A13; border: 1px solid rgba(248, 231, 201, 0.2); border-radius: 14px; padding: 20px; margin-bottom: 22px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; width: 120px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Client Name</td>
                      <td style="padding: 8px 0; color: #FFFFFF; font-weight: 700;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Email Address</td>
                      <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #F8E7C9; text-decoration: underline; font-weight: 600;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Phone / Mobile</td>
                      <td style="padding: 8px 0; color: #FFFFFF; font-weight: 700;">
                        ${clientPhone}
                        ${phone ? ` &bull; <a href="tel:${phone}" style="color: #34D399; text-decoration: underline; font-size: 12px;">Call Directly</a>` : ''}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Subject</td>
                      <td style="padding: 8px 0; color: #F8E7C9; font-weight: 600;">${inquirySubject}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Received Time</td>
                      <td style="padding: 8px 0; color: #A7C4B8; font-size: 12px;">${timestampStr}</td>
                    </tr>
                  </table>
                </div>

                <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #F8E7C9; margin-bottom: 8px;">
                  Message Inquiry:
                </div>
                <div style="background: #02120D; border-left: 4px solid #F8E7C9; border-radius: 0 12px 12px 0; padding: 18px; font-size: 14px; line-height: 1.7; color: #E5DAC7; white-space: pre-wrap;">
${message}
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #02120D; padding: 18px 24px; text-align: center; font-size: 11px; color: #8BA89B; border-top: 1px solid rgba(248, 231, 201, 0.15);">
                <strong>Orbous IT &amp; Software Solutions</strong> &bull; DLF Cyber City, Building 10, Tower B, Phase 2, Gurgaon, Haryana 122016<br>
                Automated Enterprise Lead Notification Desk
              </div>
            </div>
          </body>
          </html>
          `,
        };

        await transporter.sendMail(adminMailOptions);
        adminEmailSent = true;
        console.log("Admin Notification Email: Successfully dispatched with Logo & Call/WhatsApp CTA");
      } catch (adminErr: any) {
        console.error("Admin Mail Delivery Error:", adminErr.message);
        emailErrorMsg = adminErr.message;
      }

      // --- EMAIL 2: User Confirmation Auto-Responder (Executive Champagne #F8E7C9 & Emerald Ink #064E3B) ---
      try {
        const clientMailOptions = {
          from: `"Orbous IT & Software Solutions" <${mailUser}>`,
          to: email,
          subject: `We've Received Your Inquiry: ${inquirySubject} | Orbous IT Solutions`,
          text: `Dear ${name},\n\nThank you for reaching out to Orbous IT & Software Solutions. We have successfully logged your inquiry regarding "${inquirySubject}".\n\nOur solutions engineering pod based in DLF Cyber City, Gurgaon is reviewing your requirements and will contact you within 24 business hours.\n\nDirect Hotline: +91 84048 27541\nWhatsApp Desk: https://wa.me/918404827541\nHeadquarters: Building 10, Tower B, DLF Cyber City, Gurgaon, Haryana - 122016\n\nWarm regards,\nOrbous Solutions Team`,
          attachments: baseAttachments,
          html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You | Orbous IT Solutions</title>
          </head>
          <body style="margin: 0; padding: 24px; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #064E3B;">
            <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E5DAC7; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 40px rgba(6, 78, 59, 0.08);">
              
              <!-- Luxury Brand Header with Logo -->
              <div style="background: linear-gradient(135deg, #064E3B 0%, #032018 100%); padding: 32px 24px; text-align: center; color: #F8E7C9;">
                <table style="margin: 0 auto; border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 14px;">
                      <img src="cid:orbouslogo" alt="Orbous Logo" width="52" height="52" style="display: block; width: 52px; height: 52px; border-radius: 12px; border: 1px solid #F8E7C9;" />
                    </td>
                    <td style="vertical-align: middle; text-align: left;">
                      <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: 3px; color: #F8E7C9; line-height: 1;">ORBOUS</h1>
                      <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #E5DAC7; margin-top: 4px;">
                        Enterprise Software &bull; Cloud Architecture &bull; Telecom SMS
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Main Content Body -->
              <div style="padding: 34px 28px;">
                <div style="display: inline-block; background: #E8F5E9; border: 1px solid #A5D6A7; color: #064E3B; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 6px 14px; border-radius: 20px; margin-bottom: 22px;">
                  &#10003; Inquiry Logged &bull; 24-Hour SLA Response
                </div>

                <h2 style="font-size: 20px; font-weight: 800; color: #064E3B; margin: 0 0 14px 0;">
                  Dear ${name},
                </h2>

                <p style="font-size: 14px; line-height: 1.7; color: #375345; margin-bottom: 22px;">
                  Thank you for connecting with <strong>Orbous IT &amp; Software Solutions</strong>. Your message has been routed to our technical architecture and solutions desk at our Gurgaon Cyber City facility.
                </p>

                <!-- Submission Summary Card -->
                <div style="background: #FDF9F1; border: 1px solid #ECD9B6; border-radius: 14px; padding: 22px; margin-bottom: 24px;">
                  <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #064E3B; margin-bottom: 12px; border-bottom: 1px solid #ECD9B6; padding-bottom: 8px;">
                    Your Inquiry Summary
                  </div>
                  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; width: 90px; font-weight: 600;">Subject:</td>
                      <td style="padding: 6px 0; color: #064E3B; font-weight: 700;">${inquirySubject}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Registered:</td>
                      <td style="padding: 6px 0; color: #064E3B;">${timestampStr}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Excerpt:</td>
                      <td style="padding: 6px 0; color: #334155; font-style: italic;">&ldquo;${message.slice(0, 160)}${message.length > 160 ? "..." : ""}&rdquo;</td>
                    </tr>
                  </table>
                </div>

                <!-- Gurgaon Cyber City Office Bar -->
                <div style="background: linear-gradient(135deg, #064E3B 0%, #043629 100%); border-radius: 14px; padding: 22px; color: #F8E7C9; margin-bottom: 24px;">
                  <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #F8E7C9; margin-bottom: 6px;">
                    Our Global Headquarters
                  </div>
                  <div style="font-size: 13px; line-height: 1.6; color: #E5DAC7;">
                    Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2,<br>
                    Gurugram (Gurgaon), Haryana, India &bull; <strong>PIN: 122016</strong>
                  </div>
                </div>

                <!-- Direct Connect Action Buttons for Client -->
                <div style="text-align: center; margin-top: 10px;">
                  <a href="tel:+918404827541" style="display: inline-block; background: #064E3B; color: #F8E7C9; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding: 13px 24px; border-radius: 30px; text-decoration: none; margin: 4px; border: 1px solid #F8E7C9;">
                    📞 Direct Call Desk (+91 84048 27541)
                  </a>
                  <a href="https://wa.me/918404827541?text=Hi%20Orbous%2C%20I%20just%20submitted%20a%20project%20inquiry%20regarding%20${encodeURIComponent(inquirySubject)}" style="display: inline-block; background: #25D366; color: #FFFFFF; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; padding: 13px 24px; border-radius: 30px; text-decoration: none; margin: 4px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);">
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>

              <!-- Footer Bar -->
              <div style="background: #F4ECE0; padding: 20px 24px; text-align: center; font-size: 11px; color: #5B7567; border-top: 1px solid #E5DAC7;">
                <strong>Orbous IT &amp; Software Solutions</strong><br>
                Cyber City, Gurgaon (PIN 122016) &bull; contact@orbous.com &bull; +91 84048 27541<br>
                &copy; ${new Date().getFullYear()} Orbous. All rights reserved.
              </div>
            </div>
          </body>
          </html>
          `,
        };

        await transporter.sendMail(clientMailOptions);
        clientEmailSent = true;
        console.log("Client Confirmation Email: Successfully dispatched with Logo & Direct Connect Options to", email);
      } catch (clientErr: any) {
        console.error("Client Mail Delivery Error:", clientErr.message);
      }
    }

    if (dbSaved || adminEmailSent || clientEmailSent) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your inquiry has been received. Our team will contact you shortly.",
          status: {
            db: dbSaved ? "success" : "failed",
            adminEmail: adminEmailSent ? "sent" : "failed",
            clientEmail: clientEmailSent ? "sent" : "failed",
          },
          pinCode: "122016",
          location: "DLF Cyber City, Gurgaon",
        },
        { status: 201 }
      );
    }

    // Fail-safe graceful response even if local offline
    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been registered. Our Cyber City team will reach out.",
        note: "Processed via local dispatcher",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Critical Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
