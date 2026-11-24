import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { isLocale, getDictionary, href } from "@/lib/i18n";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getClinics, getSiteSettings } from "@/lib/content";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { FinalCta } from "@/components/home/editorial-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { whatsappHref } from "@/lib/utils";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/clinic",
    title: locale === "ar" ? "العيادة والموقع" : "Clinic & location",
    description:
      locale === "ar"
        ? "مكان الممارسة الحالي في الرياض، وساعات الاستشارة، ومعلومات الحجز. تُحدَّث تفاصيل العيادة عبر استوديو المحتوى."
        : "Dr. Zara's current practice in Riyadh, consulting hours and booking information. Clinic details are updated through the content studio."
  });
}

export default async function ClinicPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const [clinics, settings] = await Promise.all([getClinics(), getSiteSettings()]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, path: "/" },
          { name: dict.nav.clinic, path: "/clinic" }
        ])}
      />
      <PageHero
        eyebrow={dict.common.eyebrowClinic}
        heading={locale === "ar" ? "استشارات في الرياض." : "Consultations in Riyadh."}
        intro={
          locale === "ar"
            ? "تعمل الدكتورة زارا من عيادتها الحالية في الرياض. تُدار تفاصيل المكان والمواعيد عبر استوديو المحتوى، وتُحدَّث عند انتقال الممارسة."
            : "Dr. Zara practises from her current clinic in Riyadh. Location and appointment details are managed in the content studio and updated as her practice moves."
        }
        breadcrumbs={
          <Breadcrumbs
            locale={locale}
            items={[
              { name: dict.common.home, path: "/" },
              { name: dict.nav.clinic }
            ]}
          />
        }
      />

      <section className="bg-ivory-100 pb-24 md:pb-32">
        <div className="container-editorial space-y-16">
          {clinics.map((clinic) => {
            const bookHref = clinic.bookingUrl || settings.bookingUrl || href(locale, "/contact");
            return (
              <Reveal key={clinic.id}>
                <div className="grid gap-10 border-t border-espresso-900/12 pt-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-3xl text-espresso-900">{clinic.name[locale]}</h2>
                    <div className="mt-7 space-y-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                        <div>
                          <p className="text-[0.6rem] uppercase tracking-label text-taupe-400">
                            {locale === "ar" ? "العنوان" : "Address"}
                          </p>
                          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-warmgrey-600">
                            {clinic.addressLines[locale].join(", ")}
                          </p>
                          {clinic.googleMapsUrl && (
                            <a
                              href={clinic.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-block text-[0.62rem] uppercase tracking-label text-taupe-500 underline-offset-4 hover:underline"
                            >
                              {dict.common.getDirections}
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                        <div className="w-full max-w-sm">
                          <p className="text-[0.6rem] uppercase tracking-label text-taupe-400">
                            {dict.contact.hoursTitle}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {clinic.hours.map((hour, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between gap-4 text-[0.92rem] text-warmgrey-600"
                              >
                                <span>{hour.day[locale]}</span>
                                <span className="text-taupe-500">{hour.hours[locale]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" aria-hidden="true" />
                        <div>
                          <p className="text-[0.6rem] uppercase tracking-label text-taupe-400">
                            {dict.contact.directTitle}
                          </p>
                          <div className="mt-1.5 flex flex-col gap-1.5 text-[0.92rem] text-warmgrey-600">
                            {clinic.phone && (
                              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="hover:text-espresso-900">
                                {clinic.phone}
                              </a>
                            )}
                            {clinic.whatsapp && (
                              <a
                                href={whatsappHref(clinic.whatsapp)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-espresso-900"
                              >
                                {dict.common.whatsapp}
                              </a>
                            )}
                            {settings.email && (
                              <a
                                href={`mailto:${settings.email}`}
                                className="inline-flex items-center gap-2 hover:text-espresso-900"
                              >
                                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                                {settings.email}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={bookHref}
                        className="btn-primary"
                        target={clinic.bookingUrl || settings.bookingUrl ? "_blank" : undefined}
                        rel={clinic.bookingUrl || settings.bookingUrl ? "noopener noreferrer" : undefined}
                      >
                        {dict.common.bookAppointment}
                      </Link>
                      <ButtonLink href={href(locale, "/contact")} variant="ghost">
                        {dict.nav.contact}
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="lg:col-span-6 lg:col-start-7">
                    {clinic.mapEmbedUrl ? (
                      <div className="aspect-[4/3] w-full overflow-hidden border border-espresso-900/12">
                        <iframe
                          src={clinic.mapEmbedUrl}
                          title={`Map — ${clinic.name[locale]}`}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="h-full w-full grayscale-[0.35]"
                        />
                      </div>
                    ) : (
                      <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden border border-espresso-900/12 bg-ivory-200/60 px-8 text-center">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.18]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(0deg, #241C16 0px, #241C16 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, #241C16 0px, #241C16 1px, transparent 1px, transparent 44px)"
                          }}
                          aria-hidden="true"
                        />
                        <MapPin className="h-6 w-6 text-champagne-500" aria-hidden="true" />
                        <p className="mt-4 font-display text-2xl text-espresso-900">
                          {locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                        </p>
                        <p className="mt-2 max-w-xs text-[0.8rem] leading-relaxed text-warmgrey-500">
                          {locale === "ar"
                            ? "سيُشارك الموقع الدقيق مع تأكيد الموعد. أضف رابط خريطة Google عبر استوديو المحتوى."
                            : "The exact location is shared with appointment confirmation. A Google Maps embed can be added in the content studio."}
                        </p>
                      </div>
                    )}
                    {clinic.note && (
                      <p className="mt-5 max-w-lg text-[0.75rem] leading-relaxed text-taupe-500">
                        {clinic.note[locale]}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="flex flex-col gap-6 border-t border-espresso-900/12 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-[0.75rem] leading-relaxed text-taupe-500">
                {dict.footer.disclaimer}
              </p>
              <ButtonLink href={href(locale, "/contact")} showIcon>
                {dict.contact.title}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta locale={locale} settings={settings} dict={dict} />
    </>
  );
}
