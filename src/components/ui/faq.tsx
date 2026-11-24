import { Plus } from "lucide-react";

export function FaqList({
  items,
  tone = "dark"
}: {
  items: { question: string; answer: string }[];
  tone?: "dark" | "light";
}) {
  return (
    <div className={tone === "light" ? "border-t border-ivory-100/15" : "border-t border-espresso-900/12"}>
      {items.map((item, index) => (
        <details
          key={index}
          className={
            tone === "light"
              ? "group border-b border-ivory-100/15"
              : "group border-b border-espresso-900/12"
          }
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span
              className={
                tone === "light"
                  ? "font-display text-xl text-ivory-100"
                  : "font-display text-xl text-espresso-900"
              }
            >
              {item.question}
            </span>
            <Plus
              className={
                (tone === "light"
                  ? "text-champagne-200 "
                  : "text-taupe-500 ") +
                "mt-1 h-4 w-4 shrink-0 transition-transform duration-500 ease-editorial group-open:rotate-45"
              }
              aria-hidden="true"
            />
          </summary>
          <p
            className={
              tone === "light"
                ? "max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-ivory-200/70"
                : "max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-warmgrey-500"
            }
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
