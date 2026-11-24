import type { SchemaTypeDefinition } from "sanity";
import { localizedString, localizedStringArray, localizedText } from "./objects";
import {
  clinic,
  expertise,
  homepage,
  navigation,
  profile,
  siteSettings,
  testimonial,
  treatment
} from "./documents";

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedString,
  localizedText,
  localizedStringArray,
  siteSettings,
  profile,
  navigation,
  homepage,
  clinic,
  expertise,
  treatment,
  testimonial
];
