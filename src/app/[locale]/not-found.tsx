import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-espresso-950 px-6 text-center text-ivory-100">
      <p className="eyebrow text-champagne-300/70">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-display-md text-ivory-50">
        This page could not be found.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory-200/60">
        The page may have moved, or the link may be out of date.
        <span className="mt-2 block" dir="rtl">
          تعذّر العثور على هذه الصفحة. ربما نُقلت أو أصبح الرابط قديمًا.
        </span>
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 bg-ivory-100 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-label text-espresso-950 transition-colors hover:bg-champagne-200"
      >
        Return home
      </Link>
    </main>
  );
}
