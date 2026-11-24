import { defineArrayMember, defineField, defineType } from "sanity";

const artOptions = [
  { title: "Warm portrait glow", value: "portrait" },
  { title: "Skin texture (close-up)", value: "macro" },
  { title: "Cellular pattern", value: "cellular" },
  { title: "Silk folds", value: "silk" },
  { title: "Calm clinic", value: "clinic" },
  { title: "Botanical", value: "botanical" },
  { title: "Light rays", value: "light" },
  { title: "Layered skin strata", value: "strata" }
];

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site name, contact & social",
  type: "document",
  description:
    "The doctor's name, job title and contact details. These appear across the whole website.",
  groups: [
    { name: "identity", title: "Name & title" },
    { name: "contact", title: "Contact details" },
    { name: "social", title: "Social media" }
  ],
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "localizedString",
      group: "identity",
      description: "Example: Dr. Zara Iqbal Khan"
    }),
    defineField({
      name: "shortName",
      title: "Short name (shown in the logo)",
      type: "string",
      group: "identity",
      description: 'Example: "Dr. Zara"',
      initialValue: "Dr. Zara"
    }),
    defineField({
      name: "title",
      title: "Job title",
      type: "localizedString",
      group: "identity",
      description: "Example: Dermatologist & Aesthetic Physician"
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "localizedString",
      group: "identity",
      description: "A short sentence shown in the footer and search results."
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "localizedText",
      group: "identity",
      description: "1–2 sentences used in search engines and social sharing."
    }),
    defineField({ name: "city", title: "City", type: "localizedString", group: "identity" }),
    defineField({ name: "country", title: "Country", type: "localizedString", group: "identity" }),
    defineField({
      name: "email",
      title: "Appointment email address",
      type: "string",
      group: "contact",
      description: "Appointment enquiries are sent to this address."
    }),
    defineField({ name: "phone", title: "Phone number", type: "string", group: "contact" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp number",
      type: "string",
      group: "contact",
      description: "Include the country code, example: +9665xxxxxxxx"
    }),
    defineField({
      name: "bookingUrl",
      title: "Online booking link",
      type: "url",
      group: "contact",
      description: "Optional. Leave empty to send people to the Contact page."
    }),
    defineField({
      name: "social",
      title: "Social media links",
      type: "array",
      group: "social",
      description: "Add Instagram, LinkedIn or X links if they are used professionally.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Name shown on the website", type: "string" }),
            defineField({ name: "href", title: "Profile link (URL)", type: "url" }),
            defineField({
              name: "icon",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "X", value: "x" },
                  { title: "TikTok", value: "tiktok" }
                ]
              }
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: { title: "name.en", subtitle: "email" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Site name, contact & social",
      subtitle: subtitle || "Name, contact and social links"
    })
  }
});

export const clinic = defineType({
  name: "clinic",
  title: "Clinic & appointment details",
  type: "document",
  description:
    "Update this page whenever Dr. Zara moves clinic. The website belongs to her, not to any single clinic.",
  fieldsets: [
    { name: "details", title: "1. Clinic details" },
    { name: "hours", title: "2. Opening hours" },
    { name: "contact", title: "3. Contact & booking" },
    { name: "map", title: "4. Map (optional)" }
  ],
  fields: [
    defineField({
      name: "name",
      title: "Clinic name",
      type: "localizedString",
      fieldset: "details",
      description: "Example: Current practice, Riyadh"
    }),
    defineField({
      name: "addressLines",
      title: "Address",
      type: "localizedStringArray",
      fieldset: "details",
      description: "Add each line of the address as a separate paragraph."
    }),
    defineField({ name: "city", title: "City", type: "localizedString", fieldset: "details" }),
    defineField({
      name: "note",
      title: "Note shown to patients",
      type: "localizedText",
      fieldset: "details",
      description: "For example: clinic details are confirmed when the appointment is booked."
    }),
    defineField({
      name: "isPlaceholder",
      title: "Details still being confirmed",
      type: "boolean",
      fieldset: "details",
      initialValue: true
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      fieldset: "details",
      description: "Lower numbers appear first if there is more than one clinic."
    }),
    defineField({
      name: "hours",
      title: "Opening hours",
      type: "array",
      fieldset: "hours",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "day", title: "Day or note", type: "localizedString" }),
            defineField({ name: "hours", title: "Hours", type: "localizedString" })
          ],
          preview: {
            select: { title: "day.en", subtitle: "hours.en" },
            prepare: ({ title, subtitle }) => ({ title: title || "Hours", subtitle })
          }
        })
      ]
    }),
    defineField({
      name: "phone",
      title: "Clinic phone number",
      type: "string",
      fieldset: "contact"
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp number",
      type: "string",
      fieldset: "contact",
      description: "Include the country code, example: +9665xxxxxxxx"
    }),
    defineField({
      name: "bookingUrl",
      title: "Online booking link",
      type: "url",
      fieldset: "contact",
      description: "Optional. Leave empty to use the website contact page instead."
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Maps link",
      type: "url",
      fieldset: "map",
      description: "The normal link people open to see the clinic on Google Maps."
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps embed link",
      type: "url",
      fieldset: "map",
      description:
        "Optional, advanced. In Google Maps choose Share → Embed a map, then paste only the link inside src=\"...\"."
    })
  ],
  preview: {
    select: { title: "name.en", subtitle: "city.en" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Clinic & appointment details",
      subtitle: subtitle || "Riyadh"
    })
  }
});

export const navigation = defineType({
  name: "navigation",
  title: "Menu links",
  type: "document",
  description: "The links shown in the top menu of every page. Drag to reorder them.",
  fields: [
    defineField({
      name: "items",
      title: "Menu links",
      type: "array",
      description: "Drag the items to change their order.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Text shown in the menu",
              type: "localizedString"
            }),
            defineField({
              name: "href",
              title: "Where the link goes",
              type: "string",
              options: {
                list: [
                  { title: "Home", value: "/" },
                  { title: "About Dr. Zara", value: "/about" },
                  { title: "Medical expertise", value: "/expertise" },
                  { title: "Treatments", value: "/treatments" },
                  { title: "Clinic", value: "/clinic" },
                  { title: "Contact", value: "/contact" }
                ]
              }
            })
          ],
          preview: {
            select: { title: "label.en", subtitle: "href" },
            prepare: ({ title, subtitle }) => ({ title: title || "Menu item", subtitle })
          }
        })
      ]
    })
  ],
  preview: { prepare: () => ({ title: "Menu links", subtitle: "Top navigation" }) }
});

export const homepage = defineType({
  name: "homepage",
  title: "Home page",
  type: "document",
  description: "The text and photos on the front page of the website.",
  fieldsets: [
    { name: "hero", title: "1. Top of the home page (hero)" },
    { name: "intro", title: "2. Introduction with Dr. Zara's photo" },
    { name: "three", title: "3. 3D skin section" },
    { name: "sections", title: "4. Show or hide sections", options: { collapsible: true } }
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fieldset: "hero",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small line above the headline",
          type: "localizedString"
        }),
        defineField({ name: "headline", title: "Main headline", type: "localizedString" }),
        defineField({
          name: "supporting",
          title: "Supporting paragraph",
          type: "localizedText"
        })
      ]
    }),
    defineField({
      name: "intro",
      title: "Introduction",
      type: "object",
      fieldset: "intro",
      description: "This is where Dr. Zara's portrait appears on the home page.",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small line above the heading",
          type: "localizedString"
        }),
        defineField({ name: "heading", title: "Section heading", type: "localizedString" }),
        defineField({
          name: "image",
          title: "Photo of Dr. Zara",
          type: "image",
          options: { hotspot: true },
          description: "Upload a portrait with a transparent or clean background if possible.",
          fields: [
            defineField({
              name: "alt",
              title: "Photo description (for accessibility)",
              type: "localizedString",
              description: "Example: Portrait of Dr. Zara Iqbal Khan in a white coat."
            })
          ]
        })
      ]
    }),
    defineField({
      name: "three",
      title: "3D skin section",
      type: "object",
      fieldset: "three",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small line above the heading",
          type: "localizedString"
        }),
        defineField({ name: "heading", title: "Section heading", type: "localizedString" }),
        defineField({ name: "body", title: "Paragraph", type: "localizedText" })
      ]
    }),
    defineField({
      name: "showIntro",
      title: "Show the Introduction",
      type: "boolean",
      fieldset: "sections",
      initialValue: true,
      description: "This section contains Dr. Zara's photo and biography."
    }),
    defineField({
      name: "showPhilosophy",
      title: "Show the Philosophy section",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showThree",
      title: "Show the 3D skin section",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showExpertise",
      title: "Show Medical expertise",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showTreatments",
      title: "Show Featured treatments",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showEditorial",
      title: "Show the large quote image",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showJourney",
      title: "Show Professional journey",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    }),
    defineField({
      name: "showClinic",
      title: "Show the Clinic section",
      type: "boolean",
      fieldset: "sections",
      initialValue: true
    })
  ],
  preview: { prepare: () => ({ title: "Home page", subtitle: "Front page of the website" }) }
});

export const treatment = defineType({
  name: "treatment",
  title: "Treatment",
  type: "document",
  description: "A treatment page: what it is, who it suits, aftercare and important risks.",
  fieldsets: [
    { name: "basics", title: "1. Name & summary" },
    { name: "content", title: "2. Page content" },
    { name: "faqs", title: "3. Frequently asked questions" },
    { name: "photo", title: "4. Photo or illustration" },
    { name: "search", title: "5. Search engine listing (optional)", options: { collapsible: true, collapsed: true } }
  ],
  fields: [
    defineField({ name: "title", title: "Treatment name", type: "localizedString", fieldset: "basics" }),
    defineField({
      name: "slug",
      title: "Page address (URL)",
      type: "slug",
      options: { source: "title.en" },
      fieldset: "basics",
      description: "Used in the page link. Change it only if necessary."
    }),
    defineField({
      name: "category",
      title: "Treatment type",
      type: "localizedString",
      fieldset: "basics",
      description: "Example: Injectables, Skin resurfacing"
    }),
    defineField({
      name: "short",
      title: "One-sentence summary",
      type: "localizedText",
      fieldset: "basics",
      description: "Shown on the treatment cards."
    }),
    defineField({
      name: "intro",
      title: "Short introduction",
      type: "localizedText",
      fieldset: "basics",
      description: "The first paragraph at the top of the treatment page."
    }),
    defineField({
      name: "overview",
      title: "Overview paragraphs",
      type: "localizedStringArray",
      fieldset: "content"
    }),
    defineField({
      name: "suitability",
      title: "Who this treatment suits (bullet points)",
      type: "localizedStringArray",
      fieldset: "content"
    }),
    defineField({
      name: "procedure",
      title: "What happens during the treatment",
      type: "localizedStringArray",
      fieldset: "content"
    }),
    defineField({
      name: "aftercare",
      title: "Aftercare and recovery",
      type: "localizedStringArray",
      fieldset: "content"
    }),
    defineField({
      name: "considerations",
      title: "Risks and important considerations",
      type: "localizedStringArray",
      fieldset: "content",
      description: "Never promise complete or guaranteed results."
    }),
    defineField({
      name: "faqs",
      title: "Frequently asked questions",
      type: "array",
      fieldset: "faqs",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "localizedString" }),
            defineField({ name: "answer", title: "Answer", type: "localizedText" })
          ],
          preview: {
            select: { title: "question.en" },
            prepare: ({ title }) => ({ title: title || "Question" })
          }
        })
      ]
    }),
    defineField({
      name: "relatedTreatments",
      title: "Related treatment page addresses",
      type: "array",
      fieldset: "faqs",
      of: [{ type: "string" }],
      description: "Example: chemical-peels (without a slash). Separate entries for each related treatment."
    }),
    defineField({
      name: "featured",
      title: "Show on the home page",
      type: "boolean",
      fieldset: "photo",
      initialValue: false
    }),
    defineField({
      name: "art",
      title: "Illustration style",
      type: "string",
      options: { list: artOptions },
      fieldset: "photo",
      description: "Used when no photo is uploaded below."
    }),
    defineField({
      name: "image",
      title: "Photo (optional)",
      type: "image",
      options: { hotspot: true },
      fieldset: "photo",
      description: "If a photo is uploaded, it replaces the illustration style.",
      fields: [
        defineField({
          name: "alt",
          title: "Photo description (for accessibility)",
          type: "localizedString"
        })
      ]
    }),
    defineField({
      name: "seo",
      title: "Search engine listing",
      type: "object",
      fieldset: "search",
      description: "Optional. Leave empty to use the treatment name and summary.",
      fields: [
        defineField({ name: "title", title: "Search title", type: "localizedString" }),
        defineField({ name: "description", title: "Search description", type: "localizedText" })
      ]
    })
  ],
  preview: {
    select: { title: "title.en", subtitle: "category.en", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title: title || "Treatment",
      subtitle: subtitle || "Treatment page",
      media
    })
  }
});

export const expertise = defineType({
  name: "expertise",
  title: "Medical topic",
  type: "document",
  description: "A medical area or skin concern, for example: Acne & acne scarring.",
  fieldsets: [
    { name: "basics", title: "1. Name & summary" },
    { name: "content", title: "2. Page content" },
    { name: "photo", title: "3. Photo or illustration" },
    { name: "search", title: "4. Search engine listing (optional)", options: { collapsible: true, collapsed: true } }
  ],
  fields: [
    defineField({ name: "title", title: "Topic name", type: "localizedString", fieldset: "basics" }),
    defineField({
      name: "slug",
      title: "Page address (URL)",
      type: "slug",
      options: { source: "title.en" },
      fieldset: "basics",
      description: "Used in the page link. Change it only if necessary."
    }),
    defineField({
      name: "short",
      title: "One-sentence summary",
      type: "localizedText",
      fieldset: "basics",
      description: "Shown on the topics list."
    }),
    defineField({
      name: "intro",
      title: "Short introduction",
      type: "localizedText",
      fieldset: "basics"
    }),
    defineField({
      name: "overview",
      title: "Overview paragraphs",
      type: "localizedStringArray",
      fieldset: "content"
    }),
    defineField({
      name: "relatedTreatments",
      title: "Related treatment page addresses",
      type: "array",
      fieldset: "content",
      of: [{ type: "string" }],
      description: "Example: chemical-peels (without a slash)."
    }),
    defineField({
      name: "art",
      title: "Illustration style",
      type: "string",
      options: { list: artOptions },
      fieldset: "photo",
      description: "Used when no photo is uploaded below."
    }),
    defineField({
      name: "image",
      title: "Photo (optional)",
      type: "image",
      options: { hotspot: true },
      fieldset: "photo",
      description: "If a photo is uploaded, it replaces the illustration style.",
      fields: [
        defineField({
          name: "alt",
          title: "Photo description (for accessibility)",
          type: "localizedString"
        })
      ]
    }),
    defineField({
      name: "seo",
      title: "Search engine listing",
      type: "object",
      fieldset: "search",
      description: "Optional. Leave empty to use the topic name and summary.",
      fields: [
        defineField({ name: "title", title: "Search title", type: "localizedString" }),
        defineField({ name: "description", title: "Search description", type: "localizedText" })
      ]
    })
  ],
  preview: {
    select: { title: "title.en", subtitle: "short.en", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title: title || "Medical topic",
      subtitle,
      media
    })
  }
});

export const profile = defineType({
  name: "profile",
  title: "Dr. Zara's profile",
  type: "document",
  description: "The biography, photo and qualifications shown on the About page.",
  fieldsets: [
    { name: "identity", title: "1. Name & job title" },
    { name: "bio", title: "2. Biography" },
    { name: "photo", title: "3. Photo" },
    { name: "credentials", title: "4. Qualifications & experience", options: { collapsible: true } }
  ],
  fields: [
    defineField({
      name: "displayName",
      title: "Full name",
      type: "localizedString",
      fieldset: "identity"
    }),
    defineField({
      name: "role",
      title: "Job title",
      type: "localizedString",
      fieldset: "identity",
      description: "Example: Dermatologist & Aesthetic Physician"
    }),
    defineField({
      name: "lead",
      title: "Short introduction",
      type: "localizedText",
      fieldset: "bio"
    }),
    defineField({
      name: "bio",
      title: "Biography paragraphs",
      type: "localizedStringArray",
      fieldset: "bio"
    }),
    defineField({
      name: "portrait",
      title: "Photo of Dr. Zara",
      type: "image",
      options: { hotspot: true },
      fieldset: "photo",
      description: "Upload a professional portrait with a transparent or clean background if possible.",
      fields: [
        defineField({
          name: "alt",
          title: "Photo description (for accessibility)",
          type: "localizedString"
        })
      ]
    }),
    defineField({
      name: "credentials",
      title: "Qualifications, training & memberships",
      type: "array",
      fieldset: "credentials",
      description: "Only add details that have been verified. Do not add qualifications that have not been confirmed.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Qualification or role", type: "localizedString" }),
            defineField({ name: "detail", title: "Details", type: "localizedText" }),
            defineField({
              name: "kind",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Education", value: "education" },
                  { title: "Training", value: "training" },
                  { title: "Membership", value: "membership" },
                  { title: "Experience", value: "experience" },
                  { title: "Award", value: "award" }
                ]
              }
            }),
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({
              name: "isPlaceholder",
              title: "Still waiting for verification?",
              type: "boolean",
              description: "Leave on if the details are not yet confirmed."
            })
          ],
          preview: {
            select: { title: "title.en", subtitle: "kind" },
            prepare: ({ title, subtitle }) => ({ title: title || "Qualification", subtitle })
          }
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Dr. Zara's profile", subtitle: "About page" })
  }
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  description:
    "Only publish testimonials that are genuine, given with consent, and allowed by local advertising rules.",
  fields: [
    defineField({
      name: "quote",
      title: "What the patient said",
      type: "localizedText"
    }),
    defineField({
      name: "attribution",
      title: "Name shown with the quote",
      type: "string",
      description: "Use initials if the patient prefers not to be named."
    }),
    defineField({
      name: "consentConfirmed",
      title: "The patient has given consent",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "published",
      title: "Approved to show on the website",
      type: "boolean",
      initialValue: false
    })
  ],
  preview: {
    select: { title: "attribution", subtitle: "quote.en" },
    prepare: ({ title, subtitle }) => ({ title: title || "Testimonial", subtitle })
  }
});
