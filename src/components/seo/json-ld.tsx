export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const payload = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data.map((item) => {
          const clone: Record<string, unknown> = { ...item };
          delete clone["@context"];
          return clone;
        })
      }
    : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}
