import { reviews, reviewsSource } from "../data/reviews";
import { Reveal } from "./Reveal";
import { FlowerMark } from "./FlowerMark";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">
              Что говорят покупатели
            </span>
            <h2 className="mt-1 font-display text-[26px] text-ink">Нам доверяют</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[13px] text-ink-soft">
            <FlowerMark className="h-4 w-4 text-rose" />
            <span className="font-semibold text-ink">{reviewsSource.rating}</span>
            <span>
              · {reviewsSource.count} оценок на {reviewsSource.label}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-white/70 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-[13px] font-semibold text-rose-deep">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-ink">{review.name}</div>
                  <div className="text-[11.5px] text-ink-soft/70">{review.date}</div>
                </div>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{review.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
