import type { Metadata } from "next";
import Link from "next/link";
import { sanityConfigured } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Content Studio",
  robots: { index: false, follow: false }
};

export default async function StudioPage() {
  if (!sanityConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-espresso-950 px-6 py-24 text-ivory-100">
        <div className="max-w-xl">
          <p className="eyebrow text-champagne-300/70">Sanity Studio</p>
          <h1 className="mt-5 font-display text-4xl text-ivory-50">Connect your content studio</h1>
          <p className="mt-5 text-sm leading-relaxed text-ivory-200/65">
            The embedded Studio activates once Sanity environment variables are set. Add the
            following to your environment and redeploy:
          </p>
          <pre className="mt-5 overflow-x-auto border border-ivory-100/15 bg-espresso-900 p-4 text-xs text-ivory-200/80">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01`}
          </pre>
          <p className="mt-5 text-sm leading-relaxed text-ivory-200/65">
            Until then, the website renders from the typed fallback content in{" "}
            <code className="text-champagne-200">src/content</code>. You can also run the Studio
            locally with <code className="text-champagne-200">npm run sanity</code>.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-flex items-center gap-2 bg-ivory-100 px-6 py-3 text-[0.65rem] font-medium uppercase tracking-label text-espresso-950"
          >
            Back to site
          </Link>
        </div>
      </main>
    );
  }

  const { Studio } = await import("./studio");
  return <Studio />;
}
