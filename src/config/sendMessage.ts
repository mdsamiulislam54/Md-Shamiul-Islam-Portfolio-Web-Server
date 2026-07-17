import dotEnv from "dotenv"
import nodemailer from "nodemailer"
import { Contact } from "../generated/prisma/client";
dotEnv.config()
const port = process.env.SENDER_EMAIL_APP_PORT;
const hostEmail = process.env.SENDER_EMAIL_APP_SMTP
const userEmail = process.env.SENDER_EMAIL_APP_FORM
const password = process.env.SENDER_EMAIL_APP_PASS
let configOptions = {
    host: hostEmail,
    port: Number(port),
    secure: true,
    auth: {
        user: userEmail,
        pass: password
    }
}

const transporter = nodemailer.createTransport(configOptions);

export const sendMail = async (payload: Contact) => {
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SENDER_EMAIL_APP_FORM}>`,
      to: process.env.SENDER_EMAIL_APP_FORM, 
      replyTo: payload.email, 
      subject: payload.subject!,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:24px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;">
          
          <h2 style="margin-bottom:20px;color:#111827;">
            📩 New Contact Form Submission
          </h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:bold;width:120px;">Name</td>
              <td>${payload.name}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Email</td>
              <td>${payload.email}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Subject</td>
              <td>${payload.subject}</td>
            </tr>
          </table>

          <div style="margin-top:24px;">
            <h3>Message</h3>

            <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;line-height:1.7;">
              ${payload.message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;" />

          <p style="font-size:13px;color:#6b7280;">
            Sent from your Portfolio Contact Form
          </p>

        </div>
      `,
    });

  
  } catch (error) {

    throw error;
  }
};