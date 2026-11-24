import { defineField, defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Text in both languages",
  type: "object",
  description: "Write the English version, then the Arabic version. If Arabic is empty, English is shown.",
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "ar", title: "Arabic (العربية)", type: "string" })
  ]
});

export const localizedText = defineType({
  name: "localizedText",
  title: "Long text in both languages",
  type: "object",
  description: "Write the English version, then the Arabic version. If Arabic is empty, English is shown.",
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 4 }),
    defineField({ name: "ar", title: "Arabic (العربية)", type: "text", rows: 4 })
  ]
});

export const localizedStringArray = defineType({
  name: "localizedStringArray",
  title: "Paragraphs in both languages",
  type: "object",
  description:
    "Each box is one paragraph. Write the English paragraphs, then the Arabic paragraphs.",
  fields: [
    defineField({
      name: "en",
      title: "English paragraphs",
      type: "array",
      of: [{ type: "text" }]
    }),
    defineField({
      name: "ar",
      title: "Arabic paragraphs (العربية)",
      type: "array",
      of: [{ type: "text" }]
    })
  ]
});

export const seoFields = [
  defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    fields: [
      defineField({ name: "title", title: "Title", type: "localizedString" }),
      defineField({ name: "description", title: "Description", type: "localizedText" })
    ]
  })
];

export const localizedPortable = (
  name: string,
  title: string,
  options?: { fieldset?: string; description?: string }
) =>
  defineField({
    name,
    title,
    type: "array",
    ...(options?.fieldset ? { fieldset: options.fieldset } : {}),
    ...(options?.description ? { description: options.description } : {}),
    of: [
      {
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Heading", value: "h2" },
          { title: "Subheading", value: "h3" },
          { title: "Quote", value: "blockquote" }
        ],
        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" }
        ],
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" }
          ],
          annotations: [
            {
              name: "link",
              type: "object",
              title: "Link",
              fields: [
                defineField({ name: "href", type: "url", title: "URL" }),
                defineField({ name: "blank", type: "boolean", title: "Open in new tab", initialValue: true })
              ]
            }
          ]
        }
      }
    ]
  });
