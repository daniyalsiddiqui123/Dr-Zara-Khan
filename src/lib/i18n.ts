import { locales, type Locale } from "./types";

export { locales };
export type { Locale } from "./types";
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ar";
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function href(locale: Locale, path: string): string {
  const clean = path.replace(/^\/(en|ar)(?=\/|$)/, "");
  return `/${locale}${clean === "/" ? "" : clean.startsWith("/") ? clean : `/${clean}`}`;
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية"
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  ar: "ع"
};

export interface Dictionary {
  nav: {
    about: string;
    expertise: string;
    treatments: string;
    journal: string;
    clinic: string;
    contact: string;
    book: string;
    menu: string;
    close: string;
  };
  common: {
    exploreTreatments: string;
    bookAppointment: string;
    readMore: string;
    readArticle: string;
    viewAll: string;
    allArticles: string;
    backTo: string;
    minuteRead: string;
    published: string;
    updated: string;
    references: string;
    related: string;
    relatedArticles: string;
    relatedTreatments: string;
    onThisPage: string;
    language: string;
    skipToContent: string;
    home: string;
    loading: string;
    eyebrowClinic: string;
    getDirections: string;
    whatsapp: string;
    call: string;
    email: string;
    byAppointment: string;
    at: string;
    scroll: string;
  };
  footer: {
    tagline: string;
    explore: string;
    practice: string;
    connect: string;
    rights: string;
    disclaimer: string;
    contentNote: string;
  };
  journal: {
    title: string;
    subtitle: string;
    featured: string;
    categories: string;
    noArticles: string;
    filterAll: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    treatment: string;
    message: string;
    submit: string;
    note: string;
    success: string;
    invalid: string;
    required: string;
    directTitle: string;
    directBody: string;
    hoursTitle: string;
    bookingTitle: string;
    bookingBody: string;
  };
  disclaimer: {
    medical: string;
    educational: string;
    placeholder: string;
    credentialPlaceholder: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
}

const en: Dictionary = {
  nav: {
    about: "About",
    expertise: "Expertise",
    treatments: "Treatments",
    journal: "Journal",
    clinic: "Clinic",
    contact: "Contact",
    book: "Book an appointment",
    menu: "Menu",
    close: "Close"
  },
  common: {
    exploreTreatments: "Explore treatments",
    bookAppointment: "Book an appointment",
    readMore: "Read more",
    readArticle: "Read article",
    viewAll: "View all",
    allArticles: "All articles",
    backTo: "Back to",
    minuteRead: "min read",
    published: "Published",
    updated: "Updated",
    references: "References",
    related: "Related",
    relatedArticles: "Related reading",
    relatedTreatments: "Related treatments",
    onThisPage: "In this section",
    language: "Language",
    skipToContent: "Skip to content",
    home: "Home",
    loading: "Preparing the experience",
    eyebrowClinic: "Current practice",
    getDirections: "Get directions",
    whatsapp: "WhatsApp",
    call: "Call",
    email: "Email",
    byAppointment: "By appointment",
    at: "at",
    scroll: "Scroll"
  },
  footer: {
    tagline: "Dermatology and aesthetic medicine, practised with precision and restraint.",
    explore: "Explore",
    practice: "Practice",
    connect: "Connect",
    rights: "All rights reserved.",
    disclaimer:
      "This website is for general information only and does not replace a personal medical consultation. Individual suitability, outcomes and risks are discussed at assessment.",
    contentNote: "Practice details are maintained through the content studio and updated as Dr. Zara's practice moves."
  },
  journal: {
    title: "The Journal",
    subtitle: "Evidence-led notes on skin health, dermatology and considered aesthetic medicine.",
    featured: "Featured",
    categories: "Categories",
    noArticles: "Articles in this category are coming soon.",
    filterAll: "All"
  },
  contact: {
    title: "Contact & appointments",
    subtitle:
      "For appointments and clinical enquiries, please use the options below. Every request is reviewed personally.",
    formTitle: "Appointment enquiry",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    treatment: "Area of interest",
    message: "How can we help?",
    submit: "Prepare enquiry",
    note: "Submitting opens your email app with a prepared message — nothing is sent automatically.",
    success: "Your email app should now be open with the enquiry prepared.",
    invalid: "Please check the highlighted fields and try again.",
    required: "This field is required.",
    directTitle: "Direct contact",
    directBody: "Prefer to write directly? Use the details below.",
    hoursTitle: "Consulting hours",
    bookingTitle: "Book online",
    bookingBody: "Use the clinic's booking system where available, or send an enquiry and we will confirm a time."
  },
  disclaimer: {
    medical:
      "The information on this page is educational and does not constitute medical advice. Suitability for any treatment is determined only through an in-person assessment.",
    educational:
      "Stylised visualisation for education only. It is not an anatomically accurate diagnostic model.",
    placeholder: "Placeholder — add verified details in the content studio.",
    credentialPlaceholder: "Verified details to be added"
  },
  notFound: {
    title: "This page could not be found.",
    body: "The page may have moved, or the link may be out of date.",
    cta: "Return home"
  }
};

const ar: Dictionary = {
  nav: {
    about: "عن الدكتورة",
    expertise: "مجالات الخبرة",
    treatments: "العلاجات",
    journal: "المدونة",
    clinic: "العيادة",
    contact: "التواصل",
    book: "احجز موعدًا",
    menu: "القائمة",
    close: "إغلاق"
  },
  common: {
    exploreTreatments: "استكشف العلاجات",
    bookAppointment: "احجز موعدًا",
    readMore: "اقرأ المزيد",
    readArticle: "اقرأ المقال",
    viewAll: "عرض الكل",
    allArticles: "كل المقالات",
    backTo: "العودة إلى",
    minuteRead: "دقائق قراءة",
    published: "نُشر في",
    updated: "آخر تحديث",
    references: "المراجع",
    related: "ذات صلة",
    relatedArticles: "قراءات ذات صلة",
    relatedTreatments: "علاجات ذات صلة",
    onThisPage: "في هذا القسم",
    language: "اللغة",
    skipToContent: "تجاوز إلى المحتوى",
    home: "الرئيسية",
    loading: "جارٍ تجهيز التجربة",
    eyebrowClinic: "مكان الممارسة الحالي",
    getDirections: "الحصول على الاتجاهات",
    whatsapp: "واتساب",
    call: "اتصال",
    email: "البريد الإلكتروني",
    byAppointment: "بموعد مسبق",
    at: "في",
    scroll: "مرّر"
  },
  footer: {
    tagline: "طب الجلدية والطب التجميلي، بممارسة تقوم على الدقة والاعتدال.",
    explore: "استكشف",
    practice: "الممارسة",
    connect: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    disclaimer:
      "هذا الموقع لأغراض المعلومات العامة فقط، ولا يُغني عن الاستشارة الطبية الشخصية. تُناقش الملاءمة والنتائج والمخاطر الفردية أثناء التقييم.",
    contentNote:
      "تُدار تفاصيل العيادة عبر استوديو المحتوى وتُحدَّث مع انتقال ممارسة الدكتورة زارا."
  },
  journal: {
    title: "المدونة",
    subtitle: "ملاحظات مبنية على الأدلة حول صحة البشرة وطب الجلدية والطب التجميلي المدروس.",
    featured: "مقال مميز",
    categories: "التصنيفات",
    noArticles: "تُضاف مقالات هذا التصنيف قريبًا.",
    filterAll: "الكل"
  },
  contact: {
    title: "التواصل والمواعيد",
    subtitle: "لحجز المواعيد والاستفسارات الطبية، يُرجى استخدام الخيارات أدناه. تُراجَع كل الطلبات شخصيًا.",
    formTitle: "طلب موعد",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الهاتف (اختياري)",
    treatment: "مجال الاهتمام",
    message: "كيف يمكننا المساعدة؟",
    submit: "تجهيز الطلب",
    note: "عند الإرسال سيُفتح تطبيق البريد لديك برسالة جاهزة — لا يُرسَل شيء تلقائيًا.",
    success: "تم فتح تطبيق البريد لديك بالطلب جاهزًا للإرسال.",
    invalid: "يرجى مراجعة الحقول المحددة والمحاولة مرة أخرى.",
    required: "هذا الحقل مطلوب.",
    directTitle: "التواصل المباشر",
    directBody: "تفضّل الكتابة مباشرة؟ استخدم البيانات أدناه.",
    hoursTitle: "ساعات الاستشارة",
    bookingTitle: "الحجز الإلكتروني",
    bookingBody: "استخدم نظام حجز العيادة حيث يتوفر، أو أرسل طلبًا وسنؤكد الموعد."
  },
  disclaimer: {
    medical:
      "المعلومات في هذه الصفحة تعليمية ولا تشكّل نصيحة طبية. تُحدَّد ملاءمة أي علاج فقط من خلال تقييم حضوري.",
    educational: "تصوّر أسلوبي لأغراض تعليمية فقط، وليس نموذجًا تشخيصيًا دقيقًا من الناحية التشريحية.",
    placeholder: "حقل بديل — أضف التفاصيل الموثّقة في استوديو المحتوى.",
    credentialPlaceholder: "تُضاف التفاصيل الموثّقة قريبًا"
  },
  notFound: {
    title: "تعذّر العثور على هذه الصفحة.",
    body: "ربما نُقلت الصفحة أو أصبح الرابط قديمًا.",
    cta: "العودة للرئيسية"
  }
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
