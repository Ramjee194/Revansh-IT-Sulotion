import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import JobApplication from "@/models/JobApplication";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      role,
      experience,
      location,
      noticePeriod,
      linkedin,
      coverNote,
      attachment,
    } = body;

    console.log("Career Application Received for Role:", role, "Candidate:", fullName);

    if (!fullName || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Full Name, Email, Phone, and Role are required fields." },
        { status: 400 }
      );
    }

    const timestampStr =
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";

    let dbSaved = false;
    let hrEmailSent = false;
    let candidateEmailSent = false;

    // 1. Save to dedicated job_applications collection
    try {
      await connectDB();
      const application = new JobApplication({
        fullName,
        email,
        phone,
        role,
        experience: experience || "Not specified",
        location: location || "Not specified",
        noticePeriod: noticePeriod || "Not specified",
        linkedin: linkedin || "",
        coverNote: coverNote || "",
        resumeFileName: attachment?.filename || "No attachment",
        status: "Under Review",
      });
      await application.save();
      dbSaved = true;
      console.log("Career DB: Successfully saved job application to MongoDB (job_applications)");
    } catch (dbErr: any) {
      console.error("Career DB Save Error:", dbErr.message);
    }

    // 2. Dispatch HR & Candidate Notifications via Nodemailer
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
          rejectUnauthorized: false,
        },
      });

      const rawDigits = (phone || "").replace(/[^0-9]/g, "");
      const cleanPhone = rawDigits.length === 10 ? `91${rawDigits}` : rawDigits;
      const whatsappCandidateLink = cleanPhone
        ? `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(fullName)}%2C%20thank%20you%20for%20applying%20for%20the%20${encodeURIComponent(role)}%20role%20at%20Orbous%20IT%20Solutions.`
        : `https://wa.me/918404827541`;

      const logoPath = path.join(process.cwd(), "public", "favicon.png");
      const baseAttachments: any[] = [];
      if (fs.existsSync(logoPath)) {
        baseAttachments.push({
          filename: "orbous-logo.png",
          path: logoPath,
          cid: "orbouslogo",
        });
      }

      // --- EMAIL 1: HR & Recruitment Notification ---
      try {
        const hrAttachments = [...baseAttachments];
        if (attachment && attachment.filename && attachment.content) {
          hrAttachments.push({
            filename: attachment.filename,
            content: Buffer.from(attachment.content, "base64"),
          });
        }

        const hrMailOptions: any = {
          from: `"Orbous Talent Acquisition" <${mailUser}>`,
          to: mailUser,
          replyTo: email,
          subject: `📄 [NEW APPLICATION] ${role} — ${fullName}`,
          text: `New Candidate Application:\nCandidate: ${fullName}\nRole: ${role}\nExperience: ${experience}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nNotice Period: ${noticePeriod}\nLinkedIn/Portfolio: ${linkedin}\nTimestamp: ${timestampStr}\nCover Note:\n${coverNote}`,
          attachments: hrAttachments,
          html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Job Application</title>
          </head>
          <body style="margin: 0; padding: 24px; background-color: #03140E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F8E7C9;">
            <div style="max-width: 620px; margin: 0 auto; background: #062D22; border: 1px solid rgba(248, 231, 201, 0.3); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.6);">
              
              <!-- Brand Header -->
              <div style="background: linear-gradient(135deg, #064E3B 0%, #032018 100%); padding: 28px 24px; text-align: center; border-bottom: 2px solid #F8E7C9;">
                <table style="margin: 0 auto; border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 14px;">
                      <img src="cid:orbouslogo" alt="Orbous Logo" width="48" height="48" style="display: block; width: 48px; height: 48px; border-radius: 12px; border: 1px solid #F8E7C9;" />
                    </td>
                    <td style="vertical-align: middle; text-align: left;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 2.5px; color: #F8E7C9; line-height: 1;">ORBOUS</h1>
                      <div style="font-size: 9px; font-weight: 800; letter-spacing: 1.5px; color: #34D399; text-transform: uppercase; margin-top: 4px;">
                        TALENT ACQUISITION &bull; HIRING DESK
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Quick HR Actions -->
              <div style="background: #042118; padding: 16px 24px; border-bottom: 1px solid rgba(248, 231, 201, 0.2); text-align: center;">
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #34D399; margin-bottom: 10px;">
                  Candidate Connect Actions
                </div>
                <div style="display: inline-block;">
                  <a href="tel:${phone}" style="display: inline-block; background: #F8E7C9; color: #064E3B; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 10px 18px; border-radius: 20px; text-decoration: none; margin: 4px;">
                    📞 Call Candidate
                  </a>
                  ${cleanPhone ? `
                  <a href="${whatsappCandidateLink}" target="_blank" style="display: inline-block; background: #25D366; color: #FFFFFF; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 10px 18px; border-radius: 20px; text-decoration: none; margin: 4px;">
                    💬 WhatsApp Candidate
                  </a>
                  ` : ''}
                  <a href="mailto:${email}?subject=Regarding your application for ${encodeURIComponent(role)} at Orbous" style="display: inline-block; background: #064E3B; color: #F8E7C9; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 9px 18px; border-radius: 20px; text-decoration: none; border: 1px solid #F8E7C9; margin: 4px;">
                    ✉️ Email Candidate
                  </a>
                </div>
              </div>

              <!-- Candidate Info Table -->
              <div style="padding: 28px;">
                <div style="background: #031A13; border: 1px solid rgba(248, 231, 201, 0.2); border-radius: 14px; padding: 20px; margin-bottom: 22px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; width: 130px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Applied Role</td>
                      <td style="padding: 8px 0; color: #F8E7C9; font-weight: 800; font-size: 15px;">${role}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Full Name</td>
                      <td style="padding: 8px 0; color: #FFFFFF; font-weight: 700;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Email</td>
                      <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #F8E7C9; text-decoration: underline;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Phone</td>
                      <td style="padding: 8px 0; color: #FFFFFF; font-weight: 700;">${phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Experience</td>
                      <td style="padding: 8px 0; color: #FFFFFF;">${experience || "Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Location</td>
                      <td style="padding: 8px 0; color: #FFFFFF;">${location || "Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Notice Period</td>
                      <td style="padding: 8px 0; color: #FFFFFF;">${noticePeriod || "Not specified"}</td>
                    </tr>
                    ${linkedin ? `
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Portfolio/LinkedIn</td>
                      <td style="padding: 8px 0;"><a href="${linkedin}" target="_blank" style="color: #38BDF8; text-decoration: underline;">${linkedin}</a></td>
                    </tr>
                    ` : ''}
                    <tr>
                      <td style="padding: 8px 0; color: #34D399; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Resume File</td>
                      <td style="padding: 8px 0; color: #F8E7C9; font-weight: 700;">${attachment?.filename || "Attached"}</td>
                    </tr>
                  </table>
                </div>

                ${coverNote ? `
                <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #F8E7C9; margin-bottom: 8px;">
                  Candidate Note:
                </div>
                <div style="background: #02120D; border-left: 4px solid #F8E7C9; border-radius: 0 12px 12px 0; padding: 18px; font-size: 14px; line-height: 1.7; color: #E5DAC7; white-space: pre-wrap;">
${coverNote}
                </div>
                ` : ''}
              </div>

              <!-- Footer -->
              <div style="background: #02120D; padding: 18px 24px; text-align: center; font-size: 11px; color: #8BA89B; border-top: 1px solid rgba(248, 231, 201, 0.15);">
                <strong>Orbous IT &amp; Software Solutions</strong> &bull; DLF Cyber City, Gurgaon (PIN 122016)<br>
                Automated Recruitment Ingestion Pipeline
              </div>
            </div>
          </body>
          </html>
          `,
        };

        await transporter.sendMail(hrMailOptions);
        hrEmailSent = true;
        console.log("HR Application Notification: Successfully dispatched with resume");
      } catch (hrErr: any) {
        console.error("HR Application Mail Delivery Error:", hrErr.message);
      }

      // --- EMAIL 2: Candidate Application Receipt ---
      try {
        const candidateMailOptions = {
          from: `"Orbous Careers" <${mailUser}>`,
          to: email,
          subject: `Application Received: ${role} | Orbous IT Solutions`,
          text: `Dear ${fullName},\n\nThank you for applying for the ${role} position at Orbous IT & Software Solutions. We have successfully received your application and resume.\n\nOur recruitment team is reviewing your profile and will get back to you within 3-5 business days.\n\nHeadquarters: Building 10, Tower B, DLF Cyber City, Gurgaon, Haryana - 122016\n\nBest regards,\nOrbous Talent Acquisition Team`,
          attachments: baseAttachments,
          html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Application Received</title>
          </head>
          <body style="margin: 0; padding: 24px; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #064E3B;">
            <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E5DAC7; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 40px rgba(6, 78, 59, 0.08);">
              
              <!-- Brand Header -->
              <div style="background: linear-gradient(135deg, #064E3B 0%, #032018 100%); padding: 32px 24px; text-align: center; color: #F8E7C9;">
                <table style="margin: 0 auto; border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 14px;">
                      <img src="cid:orbouslogo" alt="Orbous Logo" width="52" height="52" style="display: block; width: 52px; height: 52px; border-radius: 12px; border: 1px solid #F8E7C9;" />
                    </td>
                    <td style="vertical-align: middle; text-align: left;">
                      <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: 3px; color: #F8E7C9; line-height: 1;">ORBOUS</h1>
                      <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #E5DAC7; margin-top: 4px;">
                        Engineering Excellence &bull; DLF Cyber City
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Main Body -->
              <div style="padding: 34px 28px;">
                <div style="display: inline-block; background: #E8F5E9; border: 1px solid #A5D6A7; color: #064E3B; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 6px 14px; border-radius: 20px; margin-bottom: 22px;">
                  &#10003; Application Received &bull; Under Review
                </div>

                <h2 style="font-size: 20px; font-weight: 800; color: #064E3B; margin: 0 0 14px 0;">
                  Dear ${fullName},
                </h2>

                <p style="font-size: 14px; line-height: 1.7; color: #375345; margin-bottom: 22px;">
                  Thank you for applying for the <strong>${role}</strong> role at <strong>Orbous IT &amp; Software Solutions</strong>. We are excited about your interest in joining our engineering and solutions team.
                </p>

                <!-- Application Summary Card -->
                <div style="background: #FDF9F1; border: 1px solid #ECD9B6; border-radius: 14px; padding: 22px; margin-bottom: 24px;">
                  <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #064E3B; margin-bottom: 12px; border-bottom: 1px solid #ECD9B6; padding-bottom: 8px;">
                    Your Application Summary
                  </div>
                  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; width: 110px; font-weight: 600;">Position:</td>
                      <td style="padding: 6px 0; color: #064E3B; font-weight: 700;">${role}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Registered:</td>
                      <td style="padding: 6px 0; color: #064E3B;">${timestampStr}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Status:</td>
                      <td style="padding: 6px 0; color: #16A34A; font-weight: 700;">Under Initial Screening</td>
                    </tr>
                  </table>
                </div>

                <p style="font-size: 14px; line-height: 1.7; color: #375345; margin-bottom: 24px;">
                  Our recruitment pod is reviewing your profile against the role requirements. If shortlisted, we will reach out within <strong>3-5 business days</strong> to schedule the initial technical discussion.
                </p>

                <!-- Footer Location -->
                <div style="background: linear-gradient(135deg, #064E3B 0%, #043629 100%); border-radius: 14px; padding: 22px; color: #F8E7C9; margin-bottom: 10px;">
                  <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #F8E7C9; margin-bottom: 6px;">
                    Orbous Engineering Hub
                  </div>
                  <div style="font-size: 13px; line-height: 1.6; color: #E5DAC7;">
                    Building 10, Tower B, Level 8, DLF Cyber City, DLF Phase 2,<br>
                    Gurugram (Gurgaon), Haryana, India &bull; <strong>PIN: 122016</strong>
                  </div>
                </div>
              </div>

              <!-- Footer Bar -->
              <div style="background: #F4ECE0; padding: 20px 24px; text-align: center; font-size: 11px; color: #5B7567; border-top: 1px solid #E5DAC7;">
                <strong>Orbous IT &amp; Software Solutions</strong><br>
                Cyber City, Gurgaon (PIN 122016) &bull; careers@orbous.com &bull; +91 84048 27541<br>
                &copy; ${new Date().getFullYear()} Orbous. All rights reserved.
              </div>
            </div>
          </body>
          </html>
          `,
        };

        await transporter.sendMail(candidateMailOptions);
        candidateEmailSent = true;
        console.log("Candidate Confirmation Email: Successfully dispatched to", email);
      } catch (candidateErr: any) {
        console.error("Candidate Mail Delivery Error:", candidateErr.message);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully! Our talent team will review your profile.",
        status: {
          db: dbSaved ? "saved" : "failed",
          hrNotification: hrEmailSent ? "sent" : "failed",
          candidateConfirmation: candidateEmailSent ? "sent" : "failed",
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Careers Apply API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
