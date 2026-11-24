import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

export const sanityConfigured = Boolean(projectId && dataset);

let cached: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!sanityConfigured || !projectId) return null;
  if (cached) return cached;
  cached = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
    stega: false
  });
  return cached;
}

export const sanityEnv = { projectId, dataset, apiVersion };
