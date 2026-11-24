import type { Treatment } from "@/lib/types";

export const treatmentsIntro = {
  eyebrow: { en: "Featured treatments", ar: "العلاجات المختارة" },
  heading: {
    en: "Aesthetic medicine, with a dermatologist's eye.",
    ar: "الطب التجميلي بعين أخصائية الجلدية."
  },
  body: {
    en: "Each treatment below is offered within a dermatological practice and begins with an in-person assessment. Availability is confirmed at consultation.",
    ar: "كل علاج أدناه يُقدَّم داخل ممارسة جلدية ويبدأ بتقييم حضوري. ويُؤكَّد توفّره عند الاستشارة."
  }
};

export const treatments: Treatment[] = [
  {
    slug: "botulinum-toxin",
    title: { en: "Botulinum toxin", ar: "البوتولينوم (البوتوكس)" },
    category: { en: "Injectables", ar: "الحقن" },
    short: {
      en: "Softening expression lines with a conservative, muscle-aware technique.",
      ar: "تلطيف خطوط التعبير بتقنية محافظة تراعي عضلات الوجه."
    },
    intro: {
      en: "A precise, conservative approach to dynamic lines — with expression left intact.",
      ar: "مقاربة دقيقة ومحافظة للخطوط الحركية — مع الحفاظ على تعبيرات الوجه."
    },
    art: "light",
    featured: true,
    overview: {
      en: [
        "Botulinum toxin is used to temporarily reduce the activity of specific facial muscles, softening lines that form through repeated expression — typically across the forehead, between the brows and around the eyes.",
        "The goal is not immobility. A well-judged treatment relaxes only what needs relaxing, so the face continues to move naturally while the lines soften."
      ],
      ar: [
        "يُستخدم البوتولينوم لتقليل نشاط عضلات وجهية محددة مؤقتًا، مما يلطّف الخطوط التي تتكوّن من تكرار التعبير — عادةً في الجبهة وبين الحاجبين وحول العينين.",
        "الهدف ليس تجميد الوجه. فالعلاج المدروس يرخي ما يحتاج إلى إرخاء فقط، ليبقى الوجه متحركًا بشكل طبيعي مع تلطّف الخطوط."
      ]
    },
    suitability: {
      en: [
        "Adults with dynamic expression lines who are in good general health.",
        "Not suitable during pregnancy or breastfeeding, or with certain neuromuscular conditions.",
        "An in-person assessment is required to confirm appropriateness and dosing."
      ],
      ar: [
        "البالغون الذين لديهم خطوط تعبير حركية ويتمتعون بصحة عامة جيدة.",
        "غير مناسب أثناء الحمل أو الرضاعة، أو مع بعض الحالات العصبية العضلية.",
        "يلزم تقييم حضوري لتأكيد الملاءمة والجرعة."
      ]
    },
    procedure: {
      en: [
        "The treatment takes around 15–30 minutes. A fine needle is used to place small, targeted doses into specific muscles.",
        "Topical anaesthetic is usually unnecessary. Discomfort is brief and generally well tolerated."
      ],
      ar: [
        "يستغرق العلاج نحو 15–30 دقيقة. ويُستخدم إبرة رفيعة لإيصال جرعات صغيرة محدّدة إلى عضلات معيّنة.",
        "عادةً لا يلزم تخدير موضعي. والإزعاج قصير ويُتحمَّل عمومًا بشكل جيد."
      ]
    },
    aftercare: {
      en: [
        "Keep the area clean and avoid vigorous exercise, rubbing or lying flat for the first few hours.",
        "Avoid facials, massage and heat treatments for 24–48 hours.",
        "Full effect develops over 10–14 days; review at two weeks where needed."
      ],
      ar: [
        "حافظ على نظافة المنطقة وتجنّب التمارين العنيفة أو الفرك أو الاستلقاء في الساعات الأولى.",
        "تجنّب جلسات الوجه والتدليك والعلاجات الحرارية لمدة 24–48 ساعة.",
        "يظهر التأثير الكامل خلال 10–14 يومًا؛ وتُراجَع النتيجة بعد أسبوعين عند الحاجة."
      ]
    },
    considerations: {
      en: [
        "Common, temporary effects include mild bruising, tenderness or a headache.",
        "Less commonly, asymmetry, eyelid heaviness or an uneven result can occur; these are usually temporary and reviewed at follow-up.",
        "Effect typically lasts three to four months, though this varies between individuals."
      ],
      ar: [
        "تشمل التأثيرات الشائعة والمؤقتة كدمات خفيفة أو ألمًا عند اللمس أو صداعًا.",
        "في حالات أقل شيوعًا قد يحدث عدم تناظر أو ثقل في الجفن أو نتيجة غير متساوية؛ وغالبًا ما تكون مؤقتة وتُراجَع في المتابعة.",
        "يستمر التأثير عادةً من ثلاثة إلى أربعة أشهر، ويختلف من شخص لآخر."
      ]
    },
    faqs: [
      {
        question: { en: "Will I look frozen?", ar: "هل سيبدو وجهي متجمّدًا؟" },
        answer: {
          en: "The aim is the opposite. Conservative dosing is used so expression remains natural while lines soften. Adjustments are made at review if needed.",
          ar: "الهدف هو العكس. تُستخدم جرعات محافظة ليبقى التعبير طبيعيًا مع تلطّف الخطوط، وتُجرى التعديلات عند المراجعة إذا لزم."
        }
      },
      {
        question: { en: "How soon will I see a result?", ar: "متى أرى النتيجة؟" },
        answer: {
          en: "Changes begin within a few days and settle over about two weeks. A review appointment is used to assess and refine.",
          ar: "تبدأ التغيّرات خلال أيام قليلة وتستقر خلال نحو أسبوعين. ويُستخدم موعد المراجعة للتقييم والتحسين."
        }
      },
      {
        question: { en: "Is it painful?", ar: "هل هو مؤلم؟" },
        answer: {
          en: "Most people describe a brief sting. The treatment is short and typically well tolerated without anaesthetic.",
          ar: "يصف معظم الناس وخزة قصيرة. والعلاج سريع ويُتحمَّل عادةً دون تخدير."
        }
      }
    ],
    relatedTreatments: ["dermal-fillers", "skin-rejuvenation"],
    seo: {
      title: {
        en: "Botulinum toxin treatment in Riyadh",
        ar: "علاج البوتولينوم في الرياض"
      },
      description: {
        en: "Conservative botulinum toxin treatment for expression lines in Riyadh, with dermatologist Dr. Zara Iqbal Khan. Assessment required.",
        ar: "علاج محافظ بالبوتولينوم لخطوط التعبير في الرياض مع أخصائية الجلدية د. زارا إقبال خان. يلزم التقييم."
      }
    }
  },
  {
    slug: "dermal-fillers",
    title: { en: "Dermal fillers", ar: "الفيلر الجلدي" },
    category: { en: "Injectables", ar: "الحقن" },
    short: {
      en: "Restoring structure and subtle volume with a restrained, anatomy-led approach.",
      ar: "استعادة البنية والحجم بلطف عبر مقاربة تراعي التشريح."
    },
    intro: {
      en: "Volume, considered carefully — to restore rather than to change.",
      ar: "الحجم، بدراية — للاستعادة لا للتغيير."
    },
    art: "portrait",
    featured: true,
    overview: {
      en: [
        "Dermal fillers are gel-based products, usually hyaluronic acid, used to restore volume and support facial structure that changes with age. They are also used to refine specific contours.",
        "Filler is a structural decision, not a cosmetic add-on. Placement, product choice and quantity are chosen to respect the face's existing proportions."
      ],
      ar: [
        "الفيلر منتجات هلامية، غالبًا من حمض الهيالورونيك، تُستخدم لاستعادة الحجم ودعم بنية الوجه التي تتغيّر مع العمر، وكذلك لتحسين ملامح محددة.",
        "الفيلر قرار بنيوي لا إضافة تجميلية. ويُختار موضع الحقن ونوع المنتج والكمية بما يحترم نسب الوجه القائمة."
      ]
    },
    suitability: {
      en: [
        "Adults seeking subtle restoration of volume or contour.",
        "Requires assessment of anatomy, skin quality and previous treatments.",
        "Not suitable during pregnancy, breastfeeding, or with active skin infection in the area."
      ],
      ar: [
        "البالغون الذين يسعون إلى استعادة لطيفة للحجم أو الملامح.",
        "يتطلّب تقييمًا للتشريح وجودة البشرة والعلاجات السابقة.",
        "غير مناسب أثناء الحمل أو الرضاعة أو مع التهاب جلدي نشط في المنطقة."
      ]
    },
    procedure: {
      en: [
        "Most treatments take 30–60 minutes depending on the areas treated. Topical anaesthetic and products containing local anaesthetic are commonly used.",
        "A cannula or fine needle may be selected according to the area and the desired result."
      ],
      ar: [
        "تستغرق معظم العلاجات 30–60 دقيقة حسب المناطق المعالَجة. ويُستخدم عادةً تخدير موضعي ومنتجات تحتوي على مخدّر موضعي.",
        "قد تُختار كانيولا أو إبرة رفيعة وفق المنطقة والنتيجة المرجوة."
      ]
    },
    aftercare: {
      en: [
        "Mild swelling, redness or tenderness is common for a few days.",
        "Avoid strenuous exercise, heat, alcohol and dental procedures for 24–48 hours.",
        "Attend a review so the result can be assessed once swelling has settled."
      ],
      ar: [
        "التورّم الخفيف أو الاحمرار أو الألم عند اللمس شائع لبضعة أيام.",
        "تجنّب التمارين العنيفة والحرارة والكحول وإجراءات الأسنان لمدة 24–48 ساعة.",
        "احضر المراجعة لتقييم النتيجة بعد زوال التورّم."
      ]
    },
    considerations: {
      en: [
        "Risks include bruising, swelling, asymmetry and, rarely, vascular complications. A thorough assessment and safe technique reduce these risks but cannot eliminate them.",
        "Hyaluronic acid fillers are dissolvable, which is an important safety consideration.",
        "Results are temporary and vary; maintenance is individual."
      ],
      ar: [
        "تشمل المخاطر الكدمات والتورّم وعدم التناظر، ونادرًا مضاعفات وعائية. التقييم الشامل والتقنية الآمنة يقلّلان هذه المخاطر لكن لا يلغيانها.",
        "فيلر حمض الهيالورونيك قابل للتحلّل، وهو اعتبار مهم للسلامة.",
        "النتائج مؤقتة وتختلف، والصيانة فردية."
      ]
    },
    faqs: [
      {
        question: { en: "Will it look obvious?", ar: "هل ستبدو النتيجة واضحة؟" },
        answer: {
          en: "The approach is deliberately conservative. The aim is a rested, balanced version of your own face rather than a changed one.",
          ar: "المقاربة محافظة عن قصد. الهدف نسخة مرتاحة ومتوازنة من وجهك، لا وجهًا مختلفًا."
        }
      },
      {
        question: { en: "How long do results last?", ar: "كم تدوم النتائج؟" },
        answer: {
          en: "This depends on the product, the area and individual metabolism — commonly six to eighteen months. This is discussed at assessment.",
          ar: "يعتمد ذلك على المنتج والمنطقة وأيض الشخص — غالبًا من ستة إلى ثمانية عشر شهرًا. وتُناقش هذه التفاصيل عند التقييم."
        }
      },
      {
        question: { en: "Can it be reversed?", ar: "هل يمكن عكس النتيجة؟" },
        answer: {
          en: "Hyaluronic acid fillers can be dissolved with an enzyme if needed, which is one reason they are often preferred.",
          ar: "يمكن حلّ فيلر حمض الهيالورونيك بإنزيم عند الحاجة، وهذا أحد أسباب تفضيله غالبًا."
        }
      }
    ],
    relatedTreatments: ["botulinum-toxin", "skin-rejuvenation"],
    seo: {
      title: {
        en: "Dermal fillers in Riyadh — a restrained approach",
        ar: "الفيلر الجلدي في الرياض — مقاربة متوازنة"
      },
      description: {
        en: "Anatomy-led dermal filler treatment for subtle volume restoration in Riyadh with Dr. Zara Iqbal Khan. Assessment required.",
        ar: "علاج بالفيلر الجلدي يراعي التشريح لاستعادة لطيفة للحجم في الرياض مع د. زارا إقبال خان. يلزم التقييم."
      }
    }
  },
  {
    slug: "chemical-peels",
    title: { en: "Chemical peels", ar: "التقشير الكيميائي" },
    category: { en: "Skin resurfacing", ar: "إعادة تسطيح البشرة" },
    short: {
      en: "Controlled exfoliation to improve texture, tone and congestion.",
      ar: "تقشير محكوم لتحسين الملمس واللون والانسدادات."
    },
    intro: {
      en: "A precise, medically supervised way to renew the skin's surface.",
      ar: "طريقة دقيقة تحت إشراف طبي لتجديد سطح البشرة."
    },
    art: "silk",
    featured: true,
    overview: {
      en: [
        "A chemical peel applies a controlled acid solution to remove a measured layer of dead skin cells and stimulate renewal. Peels range from very superficial to deeper, and are selected according to skin type and concern.",
        "In appropriate hands, peels can improve dullness, mild acne, post-inflammatory marks and early sun damage. They are not a substitute for a full skin plan."
      ],
      ar: [
        "يُطبَّق التقشير الكيميائي محلول حمضي محكوم لإزالة طبقة محدّدة من الخلايا الميتة وتحفيز التجديد. وتتفاوت التقشيرات من السطحي جدًا إلى الأعمق، وتُختار وفق نوع البشرة والمشكلة.",
        "في الأيدي المناسبة، يمكن للتقشير تحسين البهتان وحبّ الشباب الخفيف والآثار الالتهابية وأضرار الشمس المبكرة. وهو ليس بديلًا عن خطة بشرة شاملة."
      ]
    },
    suitability: {
      en: [
        "Suitable for many skin types when correctly selected and timed.",
        "Not performed over active infection, open skin or immediately after significant sun exposure.",
        "Darker skin tones require particular caution and lower-strength protocols."
      ],
      ar: [
        "مناسب لكثير من أنواع البشرة عند اختياره وتوقيته بشكل صحيح.",
        "لا يُجرى على التهاب نشط أو جلد متضرّر أو مباشرةً بعد تعرّض كبير للشمس.",
        "تتطلّب ألوان البشرة الأعمق حذرًا خاصًا وبروتوكولات أقل شدة."
      ]
    },
    procedure: {
      en: [
        "The skin is cleansed and degreased, the solution is applied for a controlled time, then neutralised or removed.",
        "Most superficial peels take 20–30 minutes. A sensation of warmth or tingling is expected."
      ],
      ar: [
        "تُنظَّف البشرة وتُزال الدهون، ثم يُطبَّق المحلول لمدة محكومة، ثم يُعادل أو يُزال.",
        "تستغرق معظم التقشيرات السطحية 20–30 دقيقة. ويُتوقَّع إحساس بالدفء أو الوخز."
      ]
    },
    aftercare: {
      en: [
        "Use a gentle cleanser, a barrier-supporting moisturiser and daily sun protection.",
        "Avoid retinoids, exfoliants and heat for several days as advised.",
        "Light flaking is normal; do not pick or scrub the skin."
      ],
      ar: [
        "استخدم منظّفًا لطيفًا ومرطّبًا داعمًا للحاجز وحماية يومية من الشمس.",
        "تجنّب الرتينويدات والمقشّرات والحرارة لعدة أيام وفق التوجيه.",
        "التقشّر الخفيف طبيعي؛ لا تفرك البشرة أو تنتزع القشور."
      ]
    },
    considerations: {
      en: [
        "Temporary redness, dryness and sensitivity are common.",
        "Risks include irritation, post-inflammatory pigmentation and, rarely, scarring if protocols are not followed.",
        "A course is often more effective than a single peel; spacing is individual."
      ],
      ar: [
        "الاحمرار والجفاف والحساسية المؤقتة شائعة.",
        "تشمل المخاطر التهيّج والتصبغ الالتهابي، ونادرًا التندّب عند عدم اتباع البروتوكول.",
        "غالبًا ما تكون الدورة أكثر فعالية من تقشير واحد؛ والتباعد فردي."
      ]
    },
    faqs: [
      {
        question: { en: "How much downtime is there?", ar: "كم مدة التعافي؟" },
        answer: {
          en: "Superficial peels typically cause mild redness and light flaking for a few days. Deeper peels require longer recovery, which is discussed beforehand.",
          ar: "تسبّب التقشيرات السطحية عادةً احمرارًا خفيفًا وتقشّرًا بسيطًا لبضعة أيام. أما الأعمق فتتطلّب تعافيًا أطول يُناقش مسبقًا."
        }
      },
      {
        question: { en: "Can peels treat acne?", ar: "هل يعالج التقشير حبّ الشباب؟" },
        answer: {
          en: "Selected peels can help with mild acne and congestion, but moderate or severe acne usually needs a broader treatment plan.",
          ar: "يمكن لبعض التقشيرات المساعدة في حبّ الشباب الخفيف والانسدادات، لكن الحالات المتوسطة أو الشديدة تحتاج عادةً خطة أوسع."
        }
      },
      {
        question: { en: "How often should I have one?", ar: "كم مرة أكرّره؟" },
        answer: {
          en: "Often every three to six weeks for a course, then less frequently for maintenance. This is tailored to your skin.",
          ar: "غالبًا كل ثلاثة إلى ستة أسابيع خلال الدورة، ثم بوتيرة أقل للصيانة. ويُخصَّص ذلك وفق بشرتك."
        }
      }
    ],
    relatedTreatments: ["laser-light", "skin-rejuvenation", "acne-scar-treatment"],
    seo: {
      title: {
        en: "Chemical peels in Riyadh",
        ar: "التقشير الكيميائي في الرياض"
      },
      description: {
        en: "Medically supervised chemical peels for texture, tone and mild acne in Riyadh with Dr. Zara Iqbal Khan.",
        ar: "تقشير كيميائي تحت إشراف طبي لتحسين الملمس واللون وحبّ الشباب الخفيف في الرياض مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "skin-rejuvenation",
    title: { en: "Skin rejuvenation", ar: "تجديد البشرة" },
    category: { en: "Skin resurfacing", ar: "إعادة تسطيح البشرة" },
    short: {
      en: "Microneedling and collagen-focused treatments for texture and firmness.",
      ar: "الوخز الدقيق وعلاجات الكولاجين لتحسين الملمس والمتانة."
    },
    intro: {
      en: "Encouraging the skin's own repair response — gradually and safely.",
      ar: "تحفيز استجابة البشرة الطبيعية للإصلاح — تدريجيًا وبأمان."
    },
    art: "cellular",
    featured: true,
    overview: {
      en: [
        "Skin rejuvenation refers to treatments that stimulate collagen and improve texture, fine lines and mild scarring. Microneedling creates controlled micro-channels that trigger the skin's repair response.",
        "Results are cumulative and gradual. A course is planned with realistic intervals, and maintenance is discussed from the start."
      ],
      ar: [
        "يشير تجديد البشرة إلى العلاجات التي تحفّز الكولاجين وتحسّن الملمس والخطوط الدقيقة والندبات الخفيفة. ويُنشئ الوخز الدقيق قنوات مجهرية محكومة تحفّز استجابة الإصلاح.",
        "النتائج تراكمية وتدريجية. وتُخطَّط الدورة بفواصل واقعية، وتُناقش الصيانة من البداية."
      ]
    },
    suitability: {
      en: [
        "Suitable for many adults concerned with texture, pores, fine lines or mild scarring.",
        "Avoided over active infection, active acne breakouts or during pregnancy.",
        "Assessment determines depth, device settings and whether it is appropriate for your skin tone."
      ],
      ar: [
        "مناسب لكثير من البالغين الذين يشعرون بالقلق تجاه الملمس أو المسام أو الخطوط الدقيقة أو الندبات الخفيفة.",
        "يُتجنّب في حالات الالتهاب النشط أو تفاقم حبّ الشباب أو أثناء الحمل.",
        "يحدّد التقييم العمق وإعدادات الجهاز ومدى ملاءمته للون بشرتك."
      ]
    },
    procedure: {
      en: [
        "Topical anaesthetic is applied before treatment. A device with fine needles is passed over the skin to create controlled micro-injuries.",
        "Sessions typically take 45–60 minutes including numbing. Redness immediately afterwards is expected."
      ],
      ar: [
        "يُطبَّق تخدير موضعي قبل العلاج. ويُمرَّر جهاز بإبر رفيعة على البشرة لإحداث إصابات مجهرية محكومة.",
        "تستغرق الجلسات عادةً 45–60 دقيقة بما فيها التخدير. والاحمرار بعدها مباشرةً متوقّع."
      ]
    },
    aftercare: {
      en: [
        "Keep the skin clean and moisturised; avoid make-up for 24 hours as advised.",
        "Use sun protection diligently and avoid active exfoliants for several days.",
        "Redness usually settles within a few days."
      ],
      ar: [
        "حافظ على نظافة البشرة وترطيبها؛ وتجنّب المكياج لمدة 24 ساعة وفق التوجيه.",
        "استخدم الحماية من الشمس بانتظام وتجنّب المقشّرات الفعّالة لعدة أيام.",
        "يهدأ الاحمرار عادةً خلال أيام قليلة."
      ]
    },
    considerations: {
      en: [
        "Common effects include temporary redness, tightness and mild swelling.",
        "Risks include irritation, bruising, infection and changes in pigmentation.",
        "Improvement builds over weeks as collagen remodels; a single session is rarely enough."
      ],
      ar: [
        "تشمل التأثيرات الشائعة احمرارًا مؤقتًا وشدًّا وتورّمًا خفيفًا.",
        "تشمل المخاطر التهيّج والكدمات والعدوى وتغيّرات التصبغ.",
        "يتحسّن الملمس على مدى أسابيع مع إعادة تشكّل الكولاجين؛ ونادرًا ما تكفي جلسة واحدة."
      ]
    },
    faqs: [
      {
        question: { en: "How many sessions will I need?", ar: "كم جلسة أحتاج؟" },
        answer: {
          en: "Typically three to six sessions spaced four to six weeks apart, depending on the concern and response. This is reviewed as you progress.",
          ar: "عادةً من ثلاث إلى ست جلسات بفاصل أربعة إلى ستة أسابيع، حسب المشكلة والاستجابة. ويُراجَع ذلك مع تقدّمك."
        }
      },
      {
        question: { en: "Is it safe for deeper skin tones?", ar: "هل هو آمن لألوان البشرة الأعمق؟" },
        answer: {
          en: "Microneedling is generally considered low-risk for pigmentation when performed correctly, though assessment is essential. Some energy-based options require more caution.",
          ar: "يُعدّ الوخز الدقيق عمومًا منخفض المخاطر للتصبغ عند إجرائه بشكل صحيح، مع أهمية التقييم. وبعض الخيارات القائمة على الطاقة تتطلّب حذرًا أكبر."
        }
      },
      {
        question: { en: "Does it hurt?", ar: "هل هو مؤلم؟" },
        answer: {
          en: "With topical anaesthetic, most people describe a mild scratching sensation. Comfort is managed throughout.",
          ar: "مع التخدير الموضعي، يصف معظم الناس إحساسًا بخدش خفيف. وتُدار الراحة طوال الجلسة."
        }
      }
    ],
    relatedTreatments: ["acne-scar-treatment", "chemical-peels", "laser-light"],
    seo: {
      title: {
        en: "Skin rejuvenation and microneedling in Riyadh",
        ar: "تجديد البشرة والوخز الدقيق في الرياض"
      },
      description: {
        en: "Collagen-focused skin rejuvenation and microneedling for texture, fine lines and mild scarring in Riyadh with Dr. Zara Iqbal Khan.",
        ar: "تجديد البشرة والوخز الدقيق لتحفيز الكولاجين وتحسين الملمس والخطوط الدقيقة والندبات الخفيفة في الرياض مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "laser-light",
    title: { en: "Laser & light", ar: "الليزر والضوء" },
    category: { en: "Skin resurfacing", ar: "إعادة تسطيح البشرة" },
    short: {
      en: "Selected devices for tone, redness, texture and hair reduction.",
      ar: "أجهزة مختارة لتحسين اللون والاحمرار والملمس وتقليل الشعر."
    },
    intro: {
      en: "Device-based care, chosen for the concern and the skin — not the other way around.",
      ar: "رعاية قائمة على الأجهزة، تُختار وفق المشكلة والبشرة — لا العكس."
    },
    art: "light",
    overview: {
      en: [
        "Laser and light treatments use controlled energy to target specific structures in the skin — pigment, blood vessels, hair follicles or surface texture. Different devices are suited to different concerns and skin tones.",
        "The right device matters less than the right diagnosis. Assessment determines whether laser is appropriate at all, and which settings are safe for your skin."
      ],
      ar: [
        "تستخدم علاجات الليزر والضوء طاقة محكومة لاستهداف بنى محددة في البشرة — الصبغة أو الأوعية الدموية أو بصيلات الشعر أو ملمس السطح. وتناسب أجهزة مختلفة مشكلات وألوان بشرة مختلفة.",
        "الجهاز المناسب أقل أهمية من التشخيص الصحيح. ويحدّد التقييم ما إذا كان الليزر مناسبًا أصلًا، وأي الإعدادات آمنة لبشرتك."
      ]
    },
    suitability: {
      en: [
        "Depends entirely on the concern and the device. Pigment, redness, hair reduction and texture each require different technology.",
        "Not performed over active infection, recent sun exposure or during pregnancy where contraindicated.",
        "Some devices are not appropriate for deeper skin tones; this is assessed carefully."
      ],
      ar: [
        "يعتمد كليًا على المشكلة والجهاز. فالتصبغ والاحمرار وتقليل الشعر والملمس تتطلّب كلٌّ منها تقنية مختلفة.",
        "لا يُجرى على التهاب نشط أو تعرّض حديث للشمس أو أثناء الحمل عند وجود موانع.",
        "بعض الأجهزة غير مناسبة لألوان البشرة الأعمق؛ ويُقيَّم ذلك بعناية."
      ]
    },
    procedure: {
      en: [
        "Eye protection is worn by both patient and clinician. The area is prepared and the device is applied in controlled passes.",
        "Duration depends on the area and device; most sessions range from 15 to 45 minutes. Cooling is used for comfort."
      ],
      ar: [
        "يرتدي المريض والطبيب واقيًا للعينين. وتُهيَّأ المنطقة ويُطبَّق الجهاز بتمريرات محكومة.",
        "تعتمد المدة على المنطقة والجهاز؛ وتتراوح معظم الجلسات بين 15 و45 دقيقة. ويُستخدم التبريد للراحة."
      ]
    },
    aftercare: {
      en: [
        "Redness and mild swelling are common and usually settle within a day or two.",
        "Sun protection is essential, and heat, exercise and active skincare are avoided for a short period.",
        "Follow the specific aftercare given for your device and skin."
      ],
      ar: [
        "الاحمرار والتورّم الخفيف شائعان ويهدآن عادةً خلال يوم أو يومين.",
        "الحماية من الشمس ضرورية، وتُتجنّب الحرارة والتمارين والعناية الفعّالة لفترة قصيرة.",
        "اتبع تعليمات العناية اللاحقة الخاصة بجهازك وبشرتك."
      ]
    },
    considerations: {
      en: [
        "Risks vary by device and include burns, blistering, scarring and pigment changes — particularly in darker skin tones or with inadequate settings.",
        "Multiple sessions are often needed, and results are not guaranteed.",
        "Honest discussion of limitations is part of the assessment."
      ],
      ar: [
        "تختلف المخاطر حسب الجهاز وتشمل الحروق والفقاعات والتندّب وتغيّرات التصبغ — خاصةً في ألوان البشرة الأعمق أو مع إعدادات غير مناسبة.",
        "غالبًا ما تُحتاج جلسات متعددة، والنتائج غير مضمونة.",
        "المناقشة الصادقة للحدود جزء من التقييم."
      ]
    },
    faqs: [
      {
        question: { en: "Which laser is right for me?", ar: "أي ليزر يناسبني؟" },
        answer: {
          en: "That depends on your concern, skin tone and history. There is no single best device — only the appropriate one for your skin.",
          ar: "يعتمد ذلك على مشكلتك ولون بشرتك وتاريخك. لا يوجد جهاز أفضل مطلقًا — بل الجهاز المناسب لبشرتك."
        }
      },
      {
        question: { en: "Is laser safe for my skin tone?", ar: "هل الليزر آمن للون بشرتي؟" },
        answer: {
          en: "Many devices are safe when selected and used correctly, but deeper tones require specific technologies and conservative settings. This is assessed individually.",
          ar: "كثير من الأجهزة آمنة عند اختيارها واستخدامها بشكل صحيح، لكن الألوان الأعمق تتطلّب تقنيات محددة وإعدادات محافظة. ويُقيَّم ذلك فرديًا."
        }
      },
      {
        question: { en: "How many sessions?", ar: "كم جلسة؟" },
        answer: {
          en: "Typically a series is recommended, with spacing determined by the device and the concern. Progress is reviewed between sessions.",
          ar: "تُوصى عادةً بسلسلة جلسات، ويُحدَّد التباعد حسب الجهاز والمشكلة. ويُراجَع التقدّم بين الجلسات."
        }
      }
    ],
    relatedTreatments: ["chemical-peels", "acne-scar-treatment", "skin-rejuvenation"],
    seo: {
      title: {
        en: "Laser and light treatments in Riyadh",
        ar: "علاجات الليزر والضوء في الرياض"
      },
      description: {
        en: "Selected laser and light treatments for tone, redness, texture and hair reduction in Riyadh with Dr. Zara Iqbal Khan.",
        ar: "علاجات مختارة بالليزر والضوء لتحسين اللون والاحمرار والملمس وتقليل الشعر في الرياض مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "acne-scar-treatment",
    title: { en: "Acne scar treatment", ar: "علاج آثار حبّ الشباب" },
    category: { en: "Skin resurfacing", ar: "إعادة تسطيح البشرة" },
    short: {
      en: "A combination approach to textural scarring, planned in stages.",
      ar: "مقاربة مركّبة للندبات النسيجية، مخطّطة على مراحل."
    },
    intro: {
      en: "Scarring is structural — and it responds to structure-specific treatment.",
      ar: "الندبة تغيّر بنيوي — وتستجيب لعلاج موجّه للبنية."
    },
    art: "strata",
    featured: true,
    overview: {
      en: [
        "Acne scarring includes several distinct types — icepick, boxcar and rolling scars — alongside post-inflammatory colour change. Because they differ structurally, no single treatment addresses all of them.",
        "A plan often combines resurfacing, microneedling, subcision or targeted fillers. The sequence matters, and is planned around your skin and your calendar."
      ],
      ar: [
        "تشمل آثار حبّ الشباب أنواعًا متعددة — الإبرية والصندوقية والمتموّجة — إلى جانب تغيّر اللون الالتهابي. ولأنها تختلف بنيويًا، فلا علاج واحد يعالجها جميعًا.",
        "غالبًا ما تجمع الخطة بين إعادة التسطيح والوخز الدقيق والفصل تحت الجلد أو الفيلر الموجّه. والتسلسل مهم، ويُخطَّط وفق بشرتك وجدولك."
      ]
    },
    suitability: {
      en: [
        "Adults with stable, healed acne scarring rather than active inflammation.",
        "Assessment identifies scar type, depth and skin tone to guide the approach.",
        "Active acne should be controlled before scar-focused treatment begins."
      ],
      ar: [
        "البالغون الذين لديهم ندبات مستقرة ومتعافية بدل التهاب نشط.",
        "يحدّد التقييم نوع الندبة وعمقها ولون البشرة لتوجيه المقاربة.",
        "ينبغي السيطرة على حبّ الشباب النشط قبل بدء العلاج الموجّه للندبات."
      ]
    },
    procedure: {
      en: [
        "Depending on the plan, treatment may involve topical anaesthetic, microneedling, laser resurfacing or precise subcision.",
        "Sessions are scheduled at intervals that allow the skin to recover and collagen to remodel."
      ],
      ar: [
        "حسب الخطة، قد يشمل العلاج تخديرًا موضعيًا أو وخزًا دقيقًا أو إعادة تسطيح بالليزر أو فصلًا دقيقًا تحت الجلد.",
        "تُجدول الجلسات بفواصل تسمح للبشرة بالتعافي وللكولاجين بإعادة التشكّل."
      ]
    },
    aftercare: {
      en: [
        "Expect redness, swelling and sensitivity for several days, depending on the technique.",
        "Gentle cleansing, barrier support and strict sun protection are essential.",
        "Avoid picking, active exfoliation and heat until advised."
      ],
      ar: [
        "توقّع احمرارًا وتورّمًا وحساسية لعدة أيام، حسب التقنية.",
        "التنظيف اللطيف ودعم الحاجز والحماية الصارمة من الشمس أمور ضرورية.",
        "تجنّب العبث والمقشّرات الفعّالة والحرارة حتى التوجيه."
      ]
    },
    considerations: {
      en: [
        "Improvement is gradual and measured over months; complete removal of scarring is not a realistic promise.",
        "Risks depend on the technique and include pigment change, infection and, rarely, worsening of texture.",
        "A combination plan is usually more effective than a single modality."
      ],
      ar: [
        "التحسّن تدريجي ويُقاس على مدى أشهر؛ والإزالة الكاملة للندبات ليست وعدًا واقعيًا.",
        "تختلف المخاطر حسب التقنية وتشمل تغيّر التصبغ والعدوى، ونادرًا تفاقم الملمس.",
        "غالبًا ما تكون الخطة المركّبة أكثر فعالية من وسيلة واحدة."
      ]
    },
    faqs: [
      {
        question: { en: "Can scars be removed completely?", ar: "هل يمكن إزالة الندبات تمامًا؟" },
        answer: {
          en: "No. Realistic treatment aims for meaningful improvement in texture and appearance, not complete removal. This is discussed honestly at assessment.",
          ar: "لا. يهدف العلاج الواقعي إلى تحسّن ملموس في الملمس والمظهر لا إزالة كاملة. وتُناقش هذه النقطة بصدق عند التقييم."
        }
      },
      {
        question: { en: "When should I start treatment?", ar: "متى أبدأ العلاج؟" },
        answer: {
          en: "Once active acne is controlled and scarring has stabilised. Early control of active acne is the best way to prevent new scars.",
          ar: "بعد السيطرة على حبّ الشباب النشط واستقرار الندبات. والسيطرة المبكرة على الحبّ النشط أفضل وسيلة لمنع ندبات جديدة."
        }
      },
      {
        question: { en: "How long does it take?", ar: "كم يستغرق؟" },
        answer: {
          en: "A course typically spans several months, with improvement continuing as collagen remodels. Timelines are specific to your scar type and plan.",
          ar: "تمتد الدورة عادةً عدة أشهر، ويستمر التحسّن مع إعادة تشكّل الكولاجين. والجداول الزمنية خاصة بنوع ندبتك وخطتك."
        }
      }
    ],
    relatedTreatments: ["skin-rejuvenation", "chemical-peels", "laser-light"],
    seo: {
      title: {
        en: "Acne scar treatment in Riyadh",
        ar: "علاج آثار حبّ الشباب في الرياض"
      },
      description: {
        en: "Staged, combination treatment for acne scarring in Riyadh, planned around scar type and skin tone with Dr. Zara Iqbal Khan.",
        ar: "علاج مرحلي مركّب لآثار حبّ الشباب في الرياض، مخطّط وفق نوع الندبة ولون البشرة مع د. زارا إقبال خان."
      }
    }
  }
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}

export const featuredTreatments = treatments.filter((treatment) => treatment.featured);
