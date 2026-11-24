"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface AppointmentFormProps {
  locale: Locale;
  dict: Dictionary;
  email: string;
  treatments: { slug: string; title: string }[];
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: ""
};

export function AppointmentForm({ locale, dict, email, treatments }: AppointmentFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "invalid">("idle");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, dict.contact.required),
        email: z.string().trim().email(dict.contact.invalid),
        phone: z.string().trim().max(30),
        interest: z.string(),
        message: z.string().trim().min(10, dict.contact.invalid).max(2000)
      }),
    [dict]
  );

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("invalid");
      return;
    }

    const subject =
      locale === "ar"
        ? `طلب موعد — ${values.name}`
        : `Appointment enquiry — ${values.name}`;
    const lines = [
      `${dict.contact.name}: ${values.name}`,
      `${dict.contact.email}: ${values.email}`,
      values.phone ? `${dict.contact.phone}: ${values.phone}` : "",
      values.interest ? `${dict.contact.treatment}: ${values.interest}` : "",
      "",
      values.message
    ].filter(Boolean);

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
    setStatus("success");
  }

  const fieldClass = (key: keyof FormValues) =>
    cn(
      "w-full border-0 border-b bg-transparent px-0 py-3 text-[0.95rem] text-espresso-900 outline-none transition-colors placeholder:text-taupe-400 focus:border-espresso-900 focus:ring-0",
      errors[key] ? "border-red-700/60" : "border-espresso-900/20"
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow text-taupe-500">
            {dict.contact.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[0.7rem] text-red-700">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow text-taupe-500">
            {dict.contact.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
            dir="ltr"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[0.7rem] text-red-700">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow text-taupe-500">
            {dict.contact.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass("phone")}
            dir="ltr"
          />
        </div>
        <div>
          <label htmlFor="interest" className="eyebrow text-taupe-500">
            {dict.contact.treatment}
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(event) => update("interest", event.target.value)}
            className={cn(fieldClass("interest"), "appearance-none")}
          >
            <option value="">{locale === "ar" ? "اختر مجالًا" : "Select an area"}</option>
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.title}>
                {treatment.title}
              </option>
            ))}
            <option value={locale === "ar" ? "استفسار عام" : "General enquiry"}>
              {locale === "ar" ? "استفسار عام" : "General enquiry"}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow text-taupe-500">
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cn(fieldClass("message"), "resize-none")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[0.7rem] text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 bg-espresso-900 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-label text-ivory-100 transition-colors duration-500 hover:bg-espresso-950 sm:w-auto"
        >
          {dict.contact.submit}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden="true" />
        </button>
        <p className="max-w-md text-[0.7rem] leading-relaxed text-taupe-500">{dict.contact.note}</p>
      </div>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === "success" && <p className="text-[0.75rem] text-espresso-700">{dict.contact.success}</p>}
        {status === "invalid" && <p className="text-[0.75rem] text-red-700">{dict.contact.invalid}</p>}
      </div>
    </form>
  );
}
