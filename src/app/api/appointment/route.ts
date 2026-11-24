import { NextResponse } from "next/server";
import { z } from "zod";
import { sendAppointmentEmail, smtpConfigured } from "@/lib/email";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  interest: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10).max(3000),
  company: z.string().optional().default(""),
  locale: z.enum(["en", "ar"]).optional().default("en")
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  if (!smtpConfigured()) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  try {
    await sendAppointmentEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Appointment email failed", error);
    return NextResponse.json({ ok: false, code: "send_failed" }, { status: 502 });
  }
}
