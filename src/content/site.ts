import type { Clinic, NavItem, SiteSettings } from "@/lib/types";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "appointments@drzara-iqbalkhan.com";

export const siteSettings: SiteSettings = {
  name: {
    en: "Dr. Zara Iqbal Khan",
    ar: "د. زارا إقبال خان"
  },
  shortName: "Dr. Zara",
  title: {
    en: "Dermatologist & Aesthetic Physician",
    ar: "أخصائية الجلدية والطب التجميلي"
  },
  tagline: {
    en: "Where Science Meets the Art of Skin.",
    ar: "حيث يلتقي العلم بفنّ البشرة."
  },
  description: {
    en: "Thoughtful dermatological care and advanced aesthetic treatments, guided by science, precision, and an understanding of individual beauty.",
    ar: "رعاية جلدية مدروسة وعلاجات تجميلية متقدمة، تقودها العلم والدقة وفهم الجمال الفردي."
  },
  city: { en: "Riyadh", ar: "الرياض" },
  country: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  email: contactEmail,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || undefined,
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || undefined,
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || undefined,
  social: []
};

export const navItems: NavItem[] = [
  { label: { en: "About", ar: "عن الدكتورة" }, href: "/about" },
  { label: { en: "Expertise", ar: "مجالات الخبرة" }, href: "/expertise" },
  { label: { en: "Treatments", ar: "العلاجات" }, href: "/treatments" },
  { label: { en: "Clinic", ar: "العيادة" }, href: "/clinic" },
  { label: { en: "Contact", ar: "التواصل" }, href: "/contact" }
];

export const clinics: Clinic[] = [
  {
    id: "riyadh-current",
    name: {
      en: "Current practice, Riyadh",
      ar: "الممارسة الحالية، الرياض"
    },
    addressLines: {
      en: ["Riyadh", "Saudi Arabia"],
      ar: ["الرياض", "المملكة العربية السعودية"]
    },
    city: { en: "Riyadh", ar: "الرياض" },
    hours: [
      {
        day: { en: "Consulting days", ar: "أيام الاستشارة" },
        hours: { en: "By appointment", ar: "بموعد مسبق" }
      }
    ],
    note: {
      en: "Clinic name, address and consulting hours are confirmed at the time of booking, and this page is updated as Dr. Zara's practice moves.",
      ar: "يُؤكَّد اسم العيادة والعنوان وساعات الاستشارة عند الحجز، وتُحدَّث هذه الصفحة مع انتقال ممارسة الدكتورة زارا."
    },
    isPlaceholder: true
  }
];

export const currentClinic = clinics[0] as Clinic;
