import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "2bcffkk8";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

export default defineConfig({
  name: "dr-zara",
  title: "Dr. Zara Iqbal Khan",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes }
});
