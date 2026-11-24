import imageUrlBuilder from "@sanity/image-url";
import { getSanityClient, sanityEnv } from "./client";

export type SanityImageSource =
  | string
  | { asset?: { _ref?: string }; alt?: string; hotspot?: boolean };

const builder = (() => {
  const client = getSanityClient();
  return client ? imageUrlBuilder(client) : null;
})();

export function sanityImage(
  source: SanityImageSource | undefined,
  width = 1600,
  quality = 82
): string | null {
  if (!source) return null;
  if (builder) {
    return builder.image(source).width(width).quality(quality).auto("format").url();
  }
  if (!sanityEnv.projectId) return null;
  const ref = typeof source === "string" ? source : source.asset?._ref;
  if (!ref) return null;
  const match = /^image-([a-z0-9]+)-(\d+x\d+)-(\w+)$/.exec(ref);
  if (!match) return null;
  const [, id, dimensions, extension] = match;
  return `https://cdn.sanity.io/images/${sanityEnv.projectId}/${sanityEnv.dataset}/${id}-${dimensions}.${extension}?w=${width}&q=${quality}&auto=format`;
}
