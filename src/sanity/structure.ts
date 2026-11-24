import type { ComponentType } from "react";
import type { StructureResolver } from "sanity/structure";
import {
  CogIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PinIcon,
  SparklesIcon,
  StarIcon,
  UserIcon
} from "@sanity/icons";

export const structure: StructureResolver = (S) => {
  const singleton = (
    schemaType: string,
    documentId: string,
    title: string,
    icon: ComponentType
  ) =>
    S.listItem()
      .title(title)
      .icon(icon)
      .child(S.document().schemaType(schemaType).documentId(documentId).title(title));

  return S.list()
    .title("Manage the website")
    .items([
      singleton("homepage", "homepage", "Home page", HomeIcon),
      singleton("profile", "profile", "Dr. Zara's profile (About page)", UserIcon),
      singleton("clinic", "clinic-riyadh", "Clinic & appointment details", PinIcon),
      S.divider(),
      S.listItem()
        .title("Treatments")
        .icon(SparklesIcon)
        .child(
          S.documentTypeList("treatment")
            .title("Treatments")
            .defaultOrdering([
              { field: "featured", direction: "desc" },
              { field: "title.en", direction: "asc" }
            ])
        ),
      S.listItem()
        .title("Medical topics (Expertise)")
        .icon(HeartIcon)
        .child(
          S.documentTypeList("expertise")
            .title("Medical topics")
            .defaultOrdering([{ field: "title.en", direction: "asc" }])
        ),
      S.listItem()
        .title("Testimonials")
        .icon(StarIcon)
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      S.divider(),
      singleton("navigation", "navigation", "Menu links", MenuIcon),
      singleton("siteSettings", "siteSettings", "Site name, contact & social", CogIcon)
    ]);
};
