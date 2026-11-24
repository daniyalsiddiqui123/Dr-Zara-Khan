import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { isLocale, getDictionary } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getClinics, getSiteSettings, getTreatments } from "@/lib/content";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { JsonLd } from "@/components/seo/json-ld";
import { whatsappHref } from "@/lib/utils";
import { href } from "@/lib/i18n";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/contact",
    title: dict.contact.title,
    description: dict.contact.subtitle
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [settings, clinics, treatments] = await Promise.all([
    getSiteSettings(),
    getClinics(),
    getTreatments()
  ]);
  const clinic = clinics[0];
  const email = settings.email ?? "appointments@drzara-iqbalkhan.com";
  const phone = clinic.phone ?? settings.phone;
  const whatsapp = clinic.whatsapp ?? settings.whatsapp;
  const bookingUrl = clinic.bookingUrl ?? settings.bookingUrl;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, path: "/" },
          { name: dict.nav.contact, path: "/contact" }
        ])}
      />
      <PageHero
        eyebrow={dict.nav.contact}
        heading={dict.contact.title}
        intro={dict.contact.subtitle}
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.contact }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-24 md:pb-32">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl text-espresso-900">{dict.contact.formTitle}</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 border-t border-espresso-900/12 pt-8">
                <AppointmentForm
                  locale={locale}
                  dict={dict}
                  email={email}
                  treatments={treatments.map((treatment) => ({
                    slug: treatment.slug,
                    title: treatment.title[locale]
                  }))}
                />
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.08}>
              <div className="border border-espresso-900/12 bg-ivory-50 p-7">
                <p className="eyebrow text-taupe-400">{dict.contact.directTitle}</p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-start gap-3 text-warmgrey-600 transition-colors hover:text-espresso-900"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                      <span className="break-all">{email}</span>
                    </a>
                  </li>
                  {phone && (
                    <li>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-start gap-3 text-warmgrey-600 transition-colors hover:text-espresso-900"
                      >
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                        <span dir="ltr">{phone}</span>
                      </a>
                    </li>
                  )}
                  {whatsapp && (
                    <li>
                      <a
                        href={whatsappHref(whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-warmgrey-600 transition-colors hover:text-espresso-900"
                      >
                        <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                        <span>{dict.common.whatsapp}</span>
                      </a>
                    </li>
                  )}
                  <li>
                    <Link
                      href={href(locale, "/clinic")}
                      className="flex items-start gap-3 text-warmgrey-600 transition-colors hover:text-espresso-900"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                      <span>{clinic.addressLines[locale].join(", ")}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 border border-espresso-900/12 p-7">
                <p className="eyebrow text-taupe-400">{dict.contact.hoursTitle}</p>
                <ul className="mt-4 space-y-2">
                  {clinic.hours.map((hour, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between gap-4 text-sm text-warmgrey-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-taupe-400" aria-hidden="true" />
                        {hour.day[locale]}
                      </span>
                      <span className="text-taupe-500">{hour.hours[locale]}</span>
                    </li>
                  ))}
                </ul>
                {clinic.note && (
                  <p className="mt-4 text-[0.72rem] leading-relaxed text-taupe-500">
                    {clinic.note[locale]}
                  </p>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 bg-espresso-900 p-7 text-ivory-100">
                <CalendarCheck className="h-5 w-5 text-champagne-300" aria-hidden="true" />
                <p className="mt-4 font-display text-2xl text-ivory-50">{dict.contact.bookingTitle}</p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ivory-200/60">
                  {dict.contact.bookingBody}
                </p>
                <Link
                  href={bookingUrl ?? `mailto:${email}`}
                  className="mt-5 inline-flex items-center gap-2 bg-ivory-100 px-6 py-3 text-[0.62rem] font-medium uppercase tracking-label text-espresso-950 transition-colors hover:bg-champagne-200"
                  target={bookingUrl ? "_blank" : undefined}
                  rel={bookingUrl ? "noopener noreferrer" : undefined}
                >
                  {dict.common.bookAppointment}
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        <div className="container-editorial mt-16">
          <Reveal>
            <p className="max-w-2xl border-t border-espresso-900/12 pt-6 text-[0.75rem] leading-relaxed text-taupe-500">
              {dict.footer.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
