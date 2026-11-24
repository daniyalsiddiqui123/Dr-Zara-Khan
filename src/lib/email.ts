import nodemailer from "nodemailer";

export interface AppointmentPayload {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  locale: "en" | "ar";
}

export function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendAppointmentEmail(payload: AppointmentPayload): Promise<void> {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) throw new Error("SMTP credentials are not configured");

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465;
  const to = process.env.APPOINTMENT_TO ?? user;
  const from = process.env.SMTP_FROM ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });

  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "—"],
    ["Area of interest", payload.interest || "—"],
    ["Language", payload.locale === "ar" ? "Arabic" : "English"]
  ];

  const text = [
    "New appointment enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#241c16">
      <h2 style="font-family:Georgia,serif;font-weight:400;margin:0 0 20px">New appointment enquiry</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 0;color:#776e63;width:150px">${escapeHtml(
                label
              )}</td><td style="padding:8px 0">${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e9dfce">
        <p style="color:#776e63;font-size:12px;margin:0 0 8px">Message</p>
        <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;margin:0">${escapeHtml(
          payload.message
        )}</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Dr. Zara Website" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `Appointment enquiry — ${payload.name}`,
    text,
    html
  });
}
