import type { Credential, LocalizedString, Pillar } from "@/lib/types";

export const aboutContent = {
  eyebrow: { en: "About Dr. Zara", ar: "عن الدكتورة زارا" },
  heading: {
    en: "A considered approach to skin, and to the person behind it.",
    ar: "نهج مدروس للبشرة، وللشخص الذي يقف خلفها."
  },
  lead: {
    en: "Dermatologist and aesthetic physician, practising in Riyadh, Saudi Arabia.",
    ar: "أخصائية جلدية وطبيبة تجميل، تمارس في الرياض، المملكة العربية السعودية."
  },
  body: {
    en: [
      "Dr. Zara Iqbal Khan is a dermatologist and aesthetic physician based in Riyadh. Her practice centres on the diagnosis and long-term management of skin, hair and scalp concerns, alongside considered aesthetic treatments grounded in dermatological science.",
      "She works with patients who want clarity before intervention: a proper assessment, an honest explanation of options, and a plan that respects their skin, their time and their sense of self. Consultations are unhurried by design — because the quality of a recommendation depends on the quality of the listening behind it.",
      "Her clinical interests include acne and acne scarring, pigmentation, barrier health and skin maintenance across different ages and skin tones. Every recommendation begins with the same question: what does this person's skin actually need?",
      "She writes and educates on evidence-led skin care, and believes that the most useful aesthetic medicine is the kind that makes a person feel more like themselves — not less."
    ],
    ar: [
      "الدكتورة زارا إقبال خان أخصائية جلدية وطبيبة تجميل مقيمة في الرياض. تتمحور ممارستها حول تشخيص مشكلات البشرة والشعر وفروة الرأس وإدارتها على المدى الطويل، إلى جانب علاجات تجميلية مدروسة قائمة على علم الجلدية.",
      "تعمل مع المرضى الذين يرغبون في الوضوح قبل أي تدخل: تقييم دقيق، وشرح صادق للخيارات، وخطة تحترم بشرتهم ووقتهم وإحساسهم بأنفسهم. الاستشارات غير متعجّلة بحكم التصميم — لأن جودة التوصية تعتمد على جودة الإنصات وراءها.",
      "تشمل اهتماماتها السريرية حبّ الشباب وآثاره، والتصبغات، وصحة الحاجز الواقي للبشرة، والعناية بها في مختلف الأعمار وألوان البشرة. وتبدأ كل توصية بالسؤال نفسه: ما الذي تحتاجه بشرة هذا الشخص فعليًا؟",
      "تكتب وتُعلّم في مجال العناية بالبشرة القائمة على الأدلة، وتؤمن بأن أنفع طب تجميلي هو ذلك الذي يجعل الإنسان يشعر أنه أقرب إلى نفسه — لا أبعد عنها."
    ]
  },
  portrait: {
    alt: {
      en: "Portrait of Dr. Zara Iqbal Khan in a white coat.",
      ar: "صورة الدكتورة زارا إقبال خان بالمعطف الأبيض."
    },
    caption: {
      en: "Dr. Zara Iqbal Khan",
      ar: "د. زارا إقبال خان"
    }
  },
  quote: {
    en: "My role is not to change a face. It is to understand a skin well enough to know what will genuinely help it.",
    ar: "دوري ليس تغيير الوجه، بل فهم البشرة بما يكفي لمعرفة ما سيساعدها حقًا."
  },
  values: [
    {
      index: "01",
      title: { en: "Clarity", ar: "الوضوح" },
      body: {
        en: "Honest explanations, realistic expectations and no pressure to proceed.",
        ar: "شرح صادق وتوقعات واقعية دون أي ضغط للمضي قدمًا."
      }
    },
    {
      index: "02",
      title: { en: "Consistency", ar: "الانتظام" },
      body: {
        en: "Plans designed to be followed in real life, not only in theory.",
        ar: "خطط مصمّمة لتُطبَّق في الحياة الواقعية، لا على الورق فقط."
      }
    },
    {
      index: "03",
      title: { en: "Safety", ar: "السلامة" },
      body: {
        en: "Evidence-based practice, careful technique and appropriate aftercare.",
        ar: "ممارسة قائمة على الأدلة، وتقنية دقيقة، وعناية لاحقة مناسبة."
      }
    }
  ] satisfies Pillar[]
};

export const credentials: Credential[] = [
  {
    id: "education",
    kind: "education",
    title: { en: "Medical degree", ar: "الشهادة الطبية" },
    detail: {
      en: "Awarding institution and graduation year to be added in the content studio.",
      ar: "تُضاف المؤسسة المانحة وسنة التخرج في استوديو المحتوى."
    },
    isPlaceholder: true
  },
  {
    id: "specialisation",
    kind: "training",
    title: { en: "Dermatology specialisation", ar: "التخصص في طب الجلدية" },
    detail: {
      en: "Training programme, board pathway and completion year to be verified and added.",
      ar: "يُضاف برنامج التدريب ومسار البورد وسنة الإتمام بعد التحقق."
    },
    isPlaceholder: true
  },
  {
    id: "aesthetic",
    kind: "training",
    title: { en: "Aesthetic medicine training", ar: "التدريب في الطب التجميلي" },
    detail: {
      en: "Certified aesthetic training and year to be added.",
      ar: "يُضاف التدريب التجميلي المعتمد وسنته."
    },
    isPlaceholder: true
  },
  {
    id: "memberships",
    kind: "membership",
    title: { en: "Professional memberships", ar: "العضويات المهنية" },
    detail: {
      en: "Dermatology societies and professional affiliations to be added.",
      ar: "تُضاف جمعيات الجلدية والانتماءات المهنية."
    },
    isPlaceholder: true
  },
  {
    id: "experience",
    kind: "experience",
    title: { en: "Clinical experience", ar: "الخبرة السريرية" },
    detail: {
      en: "Years in practice and clinical locations to be added.",
      ar: "تُضاف سنوات الممارسة والمواقع السريرية."
    },
    isPlaceholder: true
  }
];

export const expertiseFocus: LocalizedString[] = [
  { en: "Acne and acne scarring", ar: "حبّ الشباب وآثاره" },
  { en: "Pigmentation and uneven tone", ar: "التصبغات وتفاوت لون البشرة" },
  { en: "Skin barrier and sensitivity", ar: "حاجز البشرة والحساسية" },
  { en: "Hair and scalp health", ar: "صحة الشعر وفروة الرأس" },
  { en: "Preventive skin maintenance", ar: "العناية الوقائية بالبشرة" },
  { en: "Considered aesthetic medicine", ar: "الطب التجميلي المدروس" }
];
