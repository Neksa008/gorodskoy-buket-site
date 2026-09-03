import { Link } from "react-router-dom";
import { products } from "../data/products";
import { brand } from "../data/brand";
import { ProductCard } from "../components/ProductCard";
import { FlowerMark } from "../components/FlowerMark";
import { Reveal } from "../components/Reveal";
import { Testimonials } from "../components/Testimonials";

const featured = products.filter((p) =>
  ["white-roses", "buket-liliya", "kompozitsiya-roses", "buket-2"].includes(p.id)
);

const values = [
  {
    title: "Свежие каждый день",
    text: "Разгружаем цветы каждое утро — в букете то, что сегодня приехало.",
  },
  {
    title: "Фотоотчёт перед доставкой",
    text: "Присылаем фото готового букета до того, как курьер выедет к получателю.",
  },
  {
    title: `Доставка по ${brand.city}`,
    text: `От ${brand.deliveryFrom} ₽, бесплатно при заказе от ${brand.deliveryFreeFrom.toLocaleString("ru-RU")} ₽.`,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-cream-deep blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium text-forest">
              <FlowerMark className="h-3.5 w-3.5" />
              Цветы в {brand.city}
            </span>

            <h1 className="mt-5 font-display text-[38px] leading-[1.1] text-ink sm:text-[46px]">
              Букеты, которые говорят
              <span className="italic text-rose-deep"> нежнее слов</span>
            </h1>

            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
              Собираем букеты и композиции под настроение и повод — от скромного «просто так»
              до праздничного «на всю витрину». Доставим с фотоотчётом или подготовим к самовывозу
              на {brand.address}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/catalog"
                className="rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-rose-deep"
              >
                Смотреть каталог
              </Link>
              <a
                href={`tel:${brand.phones[0].replace(/[^\d+]/g, "")}`}
                className="text-[14px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-rose"
              >
                {brand.phones[0]}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush via-cream-deep to-blush-deep" />
            <FlowerMark className="relative h-40 w-40 text-rose-deep" />
            <FlowerMark className="absolute right-6 top-8 h-14 w-14 rotate-12 text-forest/70" />
            <FlowerMark className="absolute bottom-10 left-4 h-10 w-10 -rotate-12 text-gold/80" />
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <h3 className="font-display text-[18px] text-ink">{v.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">
              Популярное
            </span>
            <h2 className="mt-1 font-display text-[26px] text-ink">Соберём такой же или похожий</h2>
          </div>
          <Link to="/catalog" className="hidden text-[13.5px] font-semibold text-rose-deep hover:underline sm:block">
            Весь каталог →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl bg-forest px-8 py-12 text-center sm:px-16">
          <h2 className="font-display text-[24px] text-cream sm:text-[28px]">
            Не знаете, какой букет выбрать?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-cream/80">
            Напишите нам в VK или позвоните — подскажем состав под повод и бюджет.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={brand.vk}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cream px-6 py-3 text-[14px] font-semibold text-forest-deep transition-colors hover:bg-white"
            >
              Написать в VK
            </a>
            <a
              href={`tel:${brand.phones[0].replace(/[^\d+]/g, "")}`}
              className="text-[14px] font-semibold text-cream underline decoration-cream/50 decoration-2 underline-offset-4 hover:decoration-cream"
            >
              {brand.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
