import type { Expertise } from "@/lib/types";

export const expertiseIntro = {
  eyebrow: { en: "Medical expertise", ar: "الخبرة الطبية" },
  heading: {
    en: "Dermatology, practised with depth.",
    ar: "طب الجلدية، بممارسة عميقة."
  },
  body: {
    en: "Assessment, diagnosis and long-term management of skin, hair and scalp — with aesthetic care built on the same clinical foundation.",
    ar: "تقييم وتشخيص وإدارة طويلة المدى للبشرة والشعر وفروة الرأس — مع رعاية تجميلية تقوم على الأساس السريري نفسه."
  }
};

export const expertiseAreas: Expertise[] = [
  {
    slug: "general-dermatology",
    title: { en: "General dermatology", ar: "طب الجلدية العام" },
    short: {
      en: "Assessment and management of common skin conditions, from eczema to rosacea.",
      ar: "تقييم وإدارة الحالات الجلدية الشائعة، من الأكزيما إلى الوردية."
    },
    intro: {
      en: "A considered starting point for skin that is uncomfortable, changing or simply not behaving as it used to.",
      ar: "نقطة بداية مدروسة للبشرة التي تشعر بعدم الراحة أو تتغيّر أو لم تعد تتصرّف كما اعتادت."
    },
    overview: {
      en: [
        "General dermatology begins with listening and looking closely. Many skin concerns that appear similar — redness, flaking, bumps, itching — have very different causes and require different approaches.",
        "A consultation includes a structured history, examination and, where appropriate, a discussion of further investigation. The aim is a clear diagnosis and a realistic plan, not a list of products."
      ],
      ar: [
        "يبدأ طب الجلدية العام بالإنصات والنظر بعمق. كثير من مشكلات البشرة التي تبدو متشابهة — احمرار، تقشّر، نتوءات، حكة — لها أسباب مختلفة جدًا وتتطلب مقاربات مختلفة.",
        "تشمل الاستشارة تاريخًا طبيًا منظمًا وفحصًا، وعند الحاجة مناقشة المزيد من الفحوص. الهدف تشخيص واضح وخطة واقعية، لا قائمة منتجات."
      ]
    },
    sections: [
      {
        heading: { en: "What it can address", ar: "ما يمكن أن يعالجه" },
        body: {
          en: [
            "Eczema and dermatitis, rosacea, acne, psoriasis, fungal and bacterial skin infections, hives, and unexplained rashes.",
            "Skin changes related to hormones, medication, stress or seasonal conditions are also assessed here."
          ],
          ar: [
            "الأكزيما والتهاب الجلد، والوردية، وحبّ الشباب، والصدفية، والالتهابات الفطرية والبكتيرية، والأرتيكاريا، والطفح غير المفسّر.",
            "كما تُقيَّم هنا تغيّرات البشرة المرتبطة بالهرمونات أو الأدوية أو التوتر أو الظروف الموسمية."
          ]
        }
      },
      {
        heading: { en: "What to expect", ar: "ما يمكن توقّعه" },
        body: {
          en: [
            "A focused history and skin examination, an explanation of likely causes, and a written plan covering treatment, daily care and when to review.",
            "Where a condition needs ongoing management, follow-up is scheduled around your response rather than a fixed package."
          ],
          ar: [
            "تاريخ مركّز وفحص للبشرة، وشرح للأسباب المحتملة، وخطة مكتوبة تشمل العلاج والعناية اليومية وموعد المراجعة.",
            "وعندما تحتاج الحالة إلى إدارة مستمرة، تُجدول المتابعة وفق استجابتك لا وفق حزمة ثابتة."
          ]
        }
      }
    ],
    art: "macro",
    relatedTreatments: ["chemical-peels", "laser-light", "skin-rejuvenation"],
    seo: {
      title: {
        en: "General dermatology in Riyadh — assessment & care",
        ar: "طب الجلدية العام في الرياض — التقييم والرعاية"
      },
      description: {
        en: "Assessment and management of common skin conditions in Riyadh, including eczema, rosacea, acne and unexplained rashes, with Dr. Zara Iqbal Khan.",
        ar: "تقييم وإدارة الحالات الجلدية الشائعة في الرياض، بما فيها الأكزيما والوردية وحبّ الشباب والطفح غير المفسّر، مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "acne-scarring",
    title: { en: "Acne & acne scarring", ar: "حبّ الشباب وآثاره" },
    short: {
      en: "A staged approach to active acne, post-inflammatory marks and textural scarring.",
      ar: "مقاربة مرحلية لحبّ الشباب النشط والآثار الالتهابية والندبات النسيجية."
    },
    intro: {
      en: "Acne is common, treatable and worth taking seriously — both while active and in the marks it leaves behind.",
      ar: "حبّ الشباب شائع وقابل للعلاج ويستحق الاهتمام الجاد — سواء أثناء نشاطه أو في الآثار التي يتركها."
    },
    overview: {
      en: [
        "Acne is driven by a combination of oil production, follicular changes, inflammation and, often, hormonal factors. Effective care depends on identifying which of these dominates for you.",
        "Treating active acne early is the most reliable way to reduce the risk of lasting scarring. Once scarring has formed, the approach changes: different scar types respond to different techniques, and often a combination is required."
      ],
      ar: [
        "ينشأ حبّ الشباب من مزيج من إفراز الدهون وتغيّرات الجريب والالتهاب، وغالبًا عوامل هرمونية. وتتوقّف العناية الفعّالة على تحديد أيّ هذه العوامل يغلب لديك.",
        "علاج حبّ الشباب النشط مبكرًا هو الطريقة الأكثر موثوقية لتقليل خطر الندبات الدائمة. وبعد تكوّن الندبة تتغيّر المقاربة: أنواع الندبات المختلفة تستجيب لتقنيات مختلفة، وغالبًا يلزم الجمع بينها."
      ]
    },
    sections: [
      {
        heading: { en: "Active acne", ar: "حبّ الشباب النشط" },
        body: {
          en: [
            "Topical therapy, and where indicated oral treatment, is selected according to severity, skin sensitivity and history. The plan is reviewed at intervals to adjust rather than persist with what is not working.",
            "Daily care is kept deliberately simple: a gentle cleanser, a suitable active, a moisturiser and broad-spectrum sun protection."
          ],
          ar: [
            "يُختار العلاج الموضعي، والعلاج الفموي عند الحاجة، وفق الشدة وحساسية البشرة والتاريخ الطبي. وتُراجَع الخطة على فترات لتعديلها بدل الاستمرار في ما لا ينفع.",
            "تُبقى العناية اليومية بسيطة عن قصد: منظّف لطيف، ومادة فعّالة مناسبة، ومرطّب، وحماية واسعة الطيف من الشمس."
          ]
        }
      },
      {
        heading: { en: "Scarring and marks", ar: "الندبات والآثار" },
        body: {
          en: [
            "Post-inflammatory marks are pigment changes and usually fade with time and sun protection. Textural scars — icepick, boxcar and rolling — are structural and respond to resurfacing, microneedling or laser approaches.",
            "A realistic plan sets a sequence of sessions, with expected improvement explained honestly rather than promised as complete removal."
          ],
          ar: [
            "الآثار الالتهابية هي تغيّرات صبغية غالبًا ما تخف مع الوقت والحماية من الشمس. أما الندبات النسيجية — الإبرية والصندوقية والمتموّجة — فهي بنيوية وتستجيب لإعادة تسطيح البشرة أو الوخز الدقيق أو الليزر.",
            "تحدّد الخطة الواقعية تسلسلًا للجلسات، مع شرح التحسّن المتوقّع بصدق دون وعود بإزالة كاملة."
          ]
        }
      }
    ],
    art: "cellular",
    relatedTreatments: ["chemical-peels", "laser-light", "skin-rejuvenation"],
    seo: {
      title: {
        en: "Acne and acne scar treatment in Riyadh",
        ar: "علاج حبّ الشباب وآثاره في الرياض"
      },
      description: {
        en: "A staged, evidence-led approach to active acne, post-inflammatory marks and acne scarring in Riyadh with Dr. Zara Iqbal Khan.",
        ar: "مقاربة مرحلية قائمة على الأدلة لحبّ الشباب النشط والآثار الالتهابية والندبات في الرياض مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "pigmentation",
    title: { en: "Pigmentation concerns", ar: "مشكلات التصبغ" },
    short: {
      en: "Melasma, post-inflammatory marks and sun-related uneven tone.",
      ar: "الكلف والآثار الالتهابية وتفاوت اللون المرتبط بالشمس."
    },
    intro: {
      en: "Pigmentation is one of the most common concerns in Riyadh — and one of the most misunderstood.",
      ar: "التصبغات من أكثر المشكلات شيوعًا في الرياض — ومن أكثرها سوء فهمًا."
    },
    overview: {
      en: [
        "Not all pigmentation is the same. Melasma is hormonal and heat-sensitive; post-inflammatory hyperpigmentation follows injury or inflammation; sun damage accumulates quietly over years. Each behaves differently and needs a different plan.",
        "The first step is an accurate diagnosis. Treatment without it — particularly aggressive treatment — can worsen pigmentation, especially in deeper skin tones."
      ],
      ar: [
        "ليست كل التصبغات متشابهة. الكلف هرموني وحسّاس للحرارة، والتصبغات الالتهابية تتبع الإصابة أو الالتهاب، وأضرار الشمس تتراكم بهدوء على مدى سنوات. ولذا يتصرّف كل نوع بشكل مختلف ويحتاج خطة مختلفة.",
        "الخطوة الأولى تشخيص دقيق. فالعلاج دون تشخيص — خاصةً العلاج العنيف — قد يزيد التصبغ سوءًا، لا سيما في ألوان البشرة الأعمق."
      ]
    },
    sections: [
      {
        heading: { en: "A measured approach", ar: "مقاربة متوازنة" },
        body: {
          en: [
            "Management usually combines daily photoprotection, gentle pigment-modulating actives and, where suitable, carefully selected procedures. Heat, visible light and hormonal fluctuation all influence melasma, so the plan accounts for them.",
            "Pigmentation often requires maintenance rather than a single course. Progress is gradual and reviewed objectively over months."
          ],
          ar: [
            "تجمع الإدارة عادةً بين الحماية اليومية من الشمس، ومواد لطيفة معدّلة للصبغة، وإجراءات مختارة بعناية عند الملاءمة. تؤثر الحرارة والضوء المرئي والتقلبات الهرمونية في الكلف، لذا تراعي الخطة ذلك.",
            "غالبًا ما تتطلّب التصبغات صيانة مستمرة لا دورة واحدة. والتقدّم تدريجي ويُراجَع بموضوعية على مدى أشهر."
          ]
        }
      },
      {
        heading: { en: "What patients can expect", ar: "ما يمكن للمرضى توقّعه" },
        body: {
          en: [
            "A clear explanation of the pigment pattern, a realistic timeline, and guidance on triggers. Where a procedure is recommended, its risks — including the possibility of rebound pigmentation — are discussed beforehand."
          ],
          ar: [
            "شرحًا واضحًا لنمط التصبغ، وجدولًا زمنيًا واقعيًا، وإرشادات حول المحفّزات. وعند التوصية بإجراء، تُناقش مخاطره — بما فيها احتمال عودة التصبغ — مسبقًا."
          ]
        }
      }
    ],
    art: "macro",
    relatedTreatments: ["chemical-peels", "laser-light", "skin-rejuvenation"],
    seo: {
      title: {
        en: "Pigmentation and melasma care in Riyadh",
        ar: "علاج التصبغات والكلف في الرياض"
      },
      description: {
        en: "Diagnosis and considered management of melasma, post-inflammatory pigmentation and sun-related uneven tone in Riyadh.",
        ar: "تشخيص وإدارة مدروسة للكلف والتصبغات الالتهابية وتفاوت اللون المرتبط بالشمس في الرياض."
      }
    }
  },
  {
    slug: "skin-health",
    title: { en: "Skin health & maintenance", ar: "صحة البشرة والعناية بها" },
    short: {
      en: "Barrier repair, sensible routines and long-term prevention.",
      ar: "إصلاح الحاجز الواقي وروتينات معقولة والوقاية على المدى الطويل."
    },
    intro: {
      en: "The best long-term results come from a small number of things done consistently well.",
      ar: "أفضل النتائج على المدى الطويل تأتي من عدد قليل من الأمور التي تُؤدّى بانتظام وبإتقان."
    },
    overview: {
      en: [
        "Skin health is a foundation, not an add-on. When the barrier is compromised, almost any active ingredient can cause irritation, and almost any procedure carries more risk.",
        "A maintenance plan is built around three essentials — cleansing that does not strip, moisturising that supports the barrier, and daily broad-spectrum sun protection — with only the actives that genuinely serve your skin."
      ],
      ar: [
        "صحة البشرة أساس لا إضافة. وعندما يتضرّر الحاجز الواقي، يمكن لأي مكوّن فعّال تقريبًا أن يسبّب تهيّجًا، ولأي إجراء أن يحمل مخاطر أكبر.",
        "تُبنى خطة العناية على ثلاثة أساسيات — تنظيف لا يجرّد البشرة، وترطيب يدعم الحاجز، وحماية يومية واسعة الطيف من الشمس — مع المواد الفعّالة التي تخدم بشرتك فعليًا فقط."
      ]
    },
    sections: [
      {
        heading: { en: "Simplifying, not adding", ar: "التبسيط لا الإضافة" },
        body: {
          en: [
            "Many patients arrive with a full shelf and an irritated skin barrier. A review often removes more than it adds, then reintroduces actives one at a time so their effect can be judged.",
            "Skincare is adjusted to season, climate and lifestyle — Riyadh's heat and air-conditioning ask different things of skin than a temperate climate."
          ],
          ar: [
            "يصل كثير من المرضى بمجموعة منتجات كاملة وحاجز بشرة متهيّج. وكثيرًا ما تُزيل المراجعة أكثر مما تضيف، ثم تعيد إدخال المواد الفعّالة واحدة تلو الأخرى ليُحكَم على أثرها.",
            "تُعدَّل العناية وفق الموسم والمناخ ونمط الحياة — فحرارة الرياض والتكييف تطلب من البشرة ما يختلف عمّا يطلبه المناخ المعتدل."
          ]
        }
      },
      {
        heading: { en: "Prevention", ar: "الوقاية" },
        body: {
          en: [
            "Sun protection is the single most effective long-term investment in skin. It slows photoageing, reduces pigmentation and supports the results of almost every treatment discussed on this site."
          ],
          ar: [
            "الحماية من الشمس هي أفضل استثمار طويل الأمد في البشرة. فهي تُبطئ تقدّم الشيخوخة الضوئية، وتقلّل التصبغات، وتدعم نتائج كل علاج تقريبًا على هذا الموقع."
          ]
        }
      }
    ],
    art: "silk",
    relatedTreatments: ["skin-rejuvenation", "chemical-peels"],
    seo: {
      title: {
        en: "Skin health and maintenance in Riyadh",
        ar: "صحة البشرة والعناية بها في الرياض"
      },
      description: {
        en: "Barrier-focused skin health, simplified routines and long-term prevention, tailored for Riyadh's climate with Dr. Zara Iqbal Khan.",
        ar: "صحة بشرة تركز على الحاجز الواقي، وروتينات مبسّطة، ووقاية طويلة الأمد، مصمّمة لمناخ الرياض مع د. زارا إقبال خان."
      }
    }
  },
  {
    slug: "hair-scalp",
    title: { en: "Hair & scalp concerns", ar: "مشكلات الشعر وفروة الرأس" },
    short: {
      en: "Hair thinning, shedding and scalp health, assessed systematically.",
      ar: "ترقّق الشعر وتساقطه وصحة فروة الرأس، بتقييم منهجي."
    },
    intro: {
      en: "Hair loss has many causes, and the right answer depends on the right diagnosis.",
      ar: "لتساقط الشعر أسباب كثيرة، والجواب الصحيح يعتمد على التشخيص الصحيح."
    },
    overview: {
      en: [
        "Hair and scalp concerns are assessed systematically: pattern and density, scalp condition, shedding history, medical and nutritional factors, and family history.",
        "Not every thinning is the same. Androgenetic hair loss, telogen effluvium, alopecia areata and scalp inflammation each require different management, and some benefit from early intervention."
      ],
      ar: [
        "تُقيَّم مشكلات الشعر وفروة الرأس بشكل منهجي: النمط والكثافة، وحالة فروة الرأس، وتاريخ التساقط، والعوامل الطبية والغذائية، والتاريخ العائلي.",
        "ليس كل ترقّق متشابهًا. فالثعلبة الأندروجينية والتساقط التيلوجيني والثعلبة البقعية والتهاب فروة الرأس تتطلّب كلٌّ منها إدارة مختلفة، وبعضها يستفيد من التدخل المبكر."
      ]
    },
    sections: [
      {
        heading: { en: "Assessment first", ar: "التقييم أولًا" },
        body: {
          en: [
            "Where necessary, investigation such as blood tests or scalp examination is arranged to identify contributing factors. Treatment is then directed at the cause, not only the symptom.",
            "Patients are given realistic expectations about timelines — hair cycles are slow, and meaningful change is measured in months."
          ],
          ar: [
            "عند الحاجة تُرتَّب فحوص مثل تحاليل الدم أو فحص فروة الرأس لتحديد العوامل المساهمة. ثم يُوجَّه العلاج إلى السبب لا إلى العرَض فقط.",
            "ويُمنَح المرضى توقعات واقعية عن الجداول الزمنية — فدورة الشعر بطيئة، والتغيّر الملموس يُقاس بالأشهر."
          ]
        }
      },
      {
        heading: { en: "Scalp health", ar: "صحة فروة الرأس" },
        body: {
          en: [
            "Dandruff, seborrhoeic dermatitis and folliculitis are common and treatable. A healthy scalp is a prerequisite for healthy hair, and is addressed alongside any hair-directed treatment."
          ],
          ar: [
            "القشرة والتهاب الجلد الدهني والتهاب الجريبات شائعة وقابلة للعلاج. وفروة الرأس الصحية شرط للشعر الصحي، وتُعالَج جنبًا إلى جنب مع أي علاج موجّه للشعر."
          ]
        }
      }
    ],
    art: "botanical",
    relatedTreatments: ["skin-rejuvenation"],
    seo: {
      title: {
        en: "Hair and scalp assessment in Riyadh",
        ar: "تقييم الشعر وفروة الرأس في الرياض"
      },
      description: {
        en: "Systematic assessment of hair thinning, shedding and scalp health in Riyadh with dermatologist Dr. Zara Iqbal Khan.",
        ar: "تقييم منهجي لترقّق الشعر وتساقطه وصحة فروة الرأس في الرياض مع أخصائية الجلدية د. زارا إقبال خان."
      }
    }
  }
];

export function getExpertise(slug: string): Expertise | undefined {
  return expertiseAreas.find((area) => area.slug === slug);
}
