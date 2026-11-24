import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type {
  Clinic,
  Credential,
  Expertise,
  HomeContent,
  LocalizedString,
  SiteSettings,
  Treatment
} from "@/lib/types";
import { whatsappHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { EditorialArt } from "@/components/ui/editorial-art";
import { ArtMedia } from "@/components/ui/art-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Parallax } from "@/components/ui/parallax";

export function Intro({
  locale,
  content,
  dict
}: {
  locale: Locale;
  content: HomeContent["intro"];
  dict: Dictionary;
}) {
  return (
    <section className="bg-ivory-100 py-24 md:py-36" aria-labelledby="intro-heading">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="intro-heading"
            eyebrow={content.eyebrow[locale]}
            heading={content.heading[locale]}
            headingClassName="text-display-md"
          />
          <Reveal delay={0.15} className="mt-12 hidden lg:block">
            <Parallax distance={26} className="aspect-[4/5] w-full max-w-sm">
              <div className="relative h-full w-full overflow-hidden border border-espresso-900/10 bg-gradient-to-b from-ivory-200 via-[#E7D8C0] to-[#C9A98B]">
                <Image
                  src={content.image?.url ?? "/zara-khan-2.jpeg"}
                  alt={
                    content.image?.alt[locale] ??
                    (locale === "ar"
                      ? "صورة الدكتورة زارا إقبال خان بالمعطف الأبيض"
                      : "Portrait of Dr. Zara Iqbal Khan in a white coat")
                  }
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </Parallax>
            <p className="mt-4 max-w-sm text-[0.7rem] uppercase tracking-label text-taupe-500">
              {locale === "ar" ? "د. زارا إقبال خان" : "Dr. Zara Iqbal Khan"}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-6">
            {content.body[locale].map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <p className="text-[1.02rem] leading-[1.85] text-warmgrey-600">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-espresso-900/10 pt-6">
              <p className="font-display text-2xl italic text-espresso-800 rtl:not-italic">
                {content.signature[locale]}
              </p>
              <ButtonLink href={href(locale, "/about")} variant="text" showIcon>
                {dict.nav.about}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Philosophy({
  locale,
  content
}: {
  locale: Locale;
  content: HomeContent["philosophy"];
}) {
  return (
    <section className="bg-ivory-200 py-24 md:py-36" aria-labelledby="philosophy-heading">
      <div className="container-editorial">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-taupe-500">{content.eyebrow[locale]}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="philosophy-heading" className="mt-6 font-display text-display-md text-espresso-900">
              {content.heading[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <blockquote className="mt-10 font-display text-2xl italic leading-snug text-espresso-800 md:text-[1.9rem] rtl:not-italic">
              “{content.quote[locale]}”
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-t border-espresso-900/12 md:grid-cols-2">
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.index} delay={index * 0.05}>
              <div className="flex h-full flex-col border-b border-espresso-900/12 px-0 py-8 md:px-8 md:odd:border-e md:first:ps-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[0.65rem] tracking-label text-champagne-500">
                    {pillar.index}
                  </span>
                  <h3 className="font-display text-2xl text-espresso-900">{pillar.title[locale]}</h3>
                </div>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-warmgrey-500">
                  {pillar.body[locale]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialBreak({
  locale,
  quote
}: {
  locale: Locale;
  quote: LocalizedString;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso-950">
      <Parallax distance={40} scale className="relative h-[62vh] min-h-[420px] w-full">
        <EditorialArt
          variant="silk"
          label={locale === "ar" ? "تجريد حريري دافئ" : "Warm silk abstraction"}
          className="h-full w-full"
        />
      </Parallax>
      <div className="absolute inset-0 bg-espresso-950/45" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-3xl leading-snug text-ivory-50 md:text-5xl">
            “{quote[locale]}”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ExpertiseSection({
  locale,
  items,
  dict
}: {
  locale: Locale;
  items: Expertise[];
  dict: Dictionary;
}) {
  return (
    <section className="bg-ivory-100 py-24 md:py-36" aria-labelledby="expertise-heading">
      <div className="container-editorial grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="expertise-heading"
              eyebrow={dict.nav.expertise}
              heading={locale === "ar" ? "مجالات الممارسة." : "Areas of practice."}
              intro={
                locale === "ar"
                  ? "تقييم وتشخيص وإدارة طويلة المدى، مع رعاية تجميلية تقوم على الأساس السريري نفسه."
                  : "Assessment, diagnosis and long-term management — with aesthetic care built on the same clinical foundation."
              }
            />
            <Reveal delay={0.15} className="mt-10 hidden lg:block">
              <Parallax distance={24} className="aspect-[5/4] w-full">
                <EditorialArt
                  variant="cellular"
                  label={locale === "ar" ? "تجريد خلوي" : "Cellular abstraction"}
                  className="h-full w-full"
                />
              </Parallax>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border-t border-espresso-900/12">
            {items.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <Link
                  href={href(locale, `/expertise/${item.slug}`)}
                  className="group grid grid-cols-[2rem_1fr_auto] items-start gap-4 border-b border-espresso-900/12 py-7 transition-colors hover:bg-ivory-200/60 md:gap-8 md:py-9"
                >
                  <span className="pt-2 font-sans text-[0.62rem] tracking-label text-taupe-400">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-espresso-900 md:text-3xl">
                      {item.title[locale]}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.93rem] leading-relaxed text-warmgrey-500">
                      {item.short[locale]}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-2 h-5 w-5 text-taupe-400 transition-all duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-espresso-900 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <ButtonLink href={href(locale, "/expertise")} variant="text" showIcon>
                {dict.common.viewAll}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TreatmentsSection({
  locale,
  items,
  dict
}: {
  locale: Locale;
  items: Treatment[];
  dict: Dictionary;
}) {
  return (
    <section className="bg-ivory-50 py-24 md:py-36" aria-labelledby="treatments-heading">
      <div className="container-editorial">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="treatments-heading"
            eyebrow={dict.nav.treatments}
            heading={locale === "ar" ? "علاجات مختارة." : "Selected treatments."}
            intro={
              locale === "ar"
                ? "كل علاج يبدأ بتقييم حضوري، ويُؤكَّد توفّره عند الاستشارة."
                : "Every treatment begins with an in-person assessment. Availability is confirmed at consultation."
            }
          />
          <Reveal delay={0.15}>
            <ButtonLink href={href(locale, "/treatments")} variant="text" showIcon>
              {dict.common.viewAll}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((treatment, index) => (
            <Reveal key={treatment.slug} delay={index * 0.06}>
              <Link href={href(locale, `/treatments/${treatment.slug}`)} className="group block">
                <div className="relative overflow-hidden">
                  <ArtMedia
                    variant={treatment.art}
                    image={treatment.image}
                    locale={locale}
                    label={treatment.title[locale]}
                    className="aspect-[4/5] w-full transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 border border-ivory-100/25 bg-espresso-950/30 px-3 py-1 text-[0.58rem] uppercase tracking-label text-ivory-100 backdrop-blur-sm">
                    {treatment.category[locale]}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-espresso-900">{treatment.title[locale]}</h3>
                    <p className="mt-2 max-w-xs text-[0.9rem] leading-relaxed text-warmgrey-500">
                      {treatment.short[locale]}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-taupe-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection({
  locale,
  credentials,
  dict
}: {
  locale: Locale;
  credentials: Credential[];
  dict: Dictionary;
}) {
  return (
    <section className="bg-ivory-100 py-24 md:py-36" aria-labelledby="journey-heading">
      <div className="container-editorial grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="journey-heading"
            eyebrow={locale === "ar" ? "المسار المهني" : "Professional journey"}
            heading={locale === "ar" ? "التكوين، التدريب، والممارسة." : "Training, credentials and practice."}
            intro={
              locale === "ar"
                ? "تُدار المؤهلات الموثّقة عبر استوديو المحتوى، ولا تُنشر إلا بعد التحقق منها."
                : "Verified qualifications are managed in the content studio and published only once confirmed."
            }
          />
          <Reveal delay={0.15}>
            <div className="mt-8">
              <ButtonLink href={href(locale, "/about")} variant="text" showIcon>
                {dict.nav.about}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-espresso-900/12">
            {credentials.map((credential, index) => (
              <Reveal key={credential.id} delay={index * 0.04}>
                <li className="grid grid-cols-[2rem_1fr] gap-4 border-b border-espresso-900/12 py-6">
                  <span className="pt-1 font-sans text-[0.62rem] tracking-label text-taupe-400">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl text-espresso-900">{credential.title[locale]}</h3>
                      {credential.isPlaceholder && (
                        <span className="border border-champagne-400/50 px-2 py-0.5 text-[0.55rem] uppercase tracking-label text-champagne-500">
                          {dict.disclaimer.credentialPlaceholder}
                        </span>
                      )}
                    </div>
                    {credential.detail && (
                      <p className="mt-1.5 text-sm leading-relaxed text-warmgrey-500">
                        {credential.detail[locale]}
                      </p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ClinicSection({
  locale,
  clinic,
  settings,
  dict
}: {
  locale: Locale;
  clinic: Clinic;
  settings: SiteSettings;
  dict: Dictionary;
}) {
  const bookHref = clinic.bookingUrl || settings.bookingUrl || href(locale, "/contact");

  return (
    <section className="relative overflow-hidden bg-espresso-900 py-24 text-ivory-100 md:py-32" aria-labelledby="clinic-heading">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <EditorialArt
          variant="clinic"
          label={locale === "ar" ? "تجريد معماري هادئ" : "Calm architectural abstraction"}
          className="h-full w-full opacity-30"
        />
        <div className="absolute inset-0 bg-espresso-950/70" />
      </div>
      <div className="container-editorial relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-champagne-300/70">{dict.common.eyebrowClinic}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="clinic-heading" className="mt-6 max-w-xl font-display text-display-md text-ivory-50">
              {clinic.name[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-ivory-200/65">
              {clinic.note?.[locale] ?? dict.footer.contentNote}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={bookHref}
                className="inline-flex items-center gap-2 bg-ivory-100 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-label text-espresso-950 transition-colors hover:bg-champagne-200"
                target={clinic.bookingUrl || settings.bookingUrl ? "_blank" : undefined}
                rel={clinic.bookingUrl || settings.bookingUrl ? "noopener noreferrer" : undefined}
              >
                {dict.common.bookAppointment}
              </Link>
              <Link href={href(locale, "/clinic")} className="btn-light">
                {dict.nav.clinic}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <div className="border border-ivory-100/15 bg-espresso-950/40 p-7 backdrop-blur-sm md:p-9">
              <div className="space-y-6">
                <div>
                  <p className="eyebrow text-ivory-200/35">{locale === "ar" ? "الموقع" : "Location"}</p>
                  <p className="mt-3 flex items-start gap-2.5 text-sm text-ivory-200/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300/70" aria-hidden="true" />
                    <span>{clinic.addressLines[locale].join(", ")}</span>
                  </p>
                </div>
                <div className="hairline-light" />
                <div>
                  <p className="eyebrow text-ivory-200/35">{locale === "ar" ? "ساعات الاستشارة" : "Consulting hours"}</p>
                  <ul className="mt-3 space-y-2">
                    {clinic.hours.map((hour, index) => (
                      <li key={index} className="flex items-center justify-between gap-4 text-sm text-ivory-200/70">
                        <span>{hour.day[locale]}</span>
                        <span className="text-ivory-200/50">{hour.hours[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(clinic.phone || clinic.whatsapp || settings.whatsapp) && (
                  <>
                    <div className="hairline-light" />
                    <div className="flex flex-wrap gap-3">
                      {clinic.phone && (
                        <a
                          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-label text-ivory-200/70 transition-colors hover:text-ivory-50"
                        >
                          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                          {dict.common.call}
                        </a>
                      )}
                      {clinic.whatsapp && (
                        <a
                          href={whatsappHref(clinic.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-label text-ivory-200/70 transition-colors hover:text-ivory-50"
                        >
                          {dict.common.whatsapp}
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  locale,
  settings,
  dict
}: {
  locale: Locale;
  settings: SiteSettings;
  dict: Dictionary;
}) {
  const bookHref = settings.bookingUrl || href(locale, "/contact");
  return (
    <section className="relative overflow-hidden bg-espresso-950 py-28 text-ivory-100 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <EditorialArt
          variant="light"
          label={locale === "ar" ? "أشعة ضوء دافئة" : "Warm light rays"}
          className="h-full w-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/70 to-espresso-950" />
      </div>
      <div className="container-editorial relative">
        <Reveal>
          <p className="eyebrow text-champagne-300/70">{locale === "ar" ? "ابدأ من هنا" : "Begin here"}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-7 max-w-3xl font-display text-display-lg text-ivory-50">
            {locale === "ar" ? "ابدأ بمحادثة." : "Begin with a conversation."}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ivory-200/65">
            {locale === "ar"
              ? "تُبدأ الرعاية بتقييم هادئ وشامل، وشرح صادق للخيارات المتاحة. احجز موعدك أو أرسل استفسارًا."
              : "Care begins with an unhurried assessment and an honest explanation of the options. Book an appointment or send an enquiry."}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={bookHref}
              className="inline-flex items-center gap-2 bg-ivory-100 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-label text-espresso-950 transition-colors hover:bg-champagne-200"
              target={settings.bookingUrl ? "_blank" : undefined}
              rel={settings.bookingUrl ? "noopener noreferrer" : undefined}
            >
              {dict.common.bookAppointment}
            </Link>
            <Link href={href(locale, "/contact")} className="btn-light">
              {dict.nav.contact}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
