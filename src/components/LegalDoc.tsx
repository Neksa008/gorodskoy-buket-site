export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export function LegalDoc({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">{eyebrow}</span>
      <h1 className="mt-1 font-display text-[26px] text-ink">{title}</h1>
      <p className="mt-2 text-[13px] text-ink-soft">Действует с {updated}</p>

      <div className="mt-8 space-y-7">
        {sections.map((s, i) => (
          <section key={s.heading}>
            <h2 className="font-display text-[16px] text-ink">
              {i + 1}. {s.heading}
            </h2>
            <div className="mt-2 space-y-2">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-[13.5px] leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
