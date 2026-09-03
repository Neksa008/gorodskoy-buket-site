import { Link } from "react-router-dom";
import { brand } from "../data/brand";
import { FlowerMark } from "../components/FlowerMark";
import { usePageTitle } from "../hooks/usePageTitle";

const points = [
  {
    title: "Работаем с марта 2026 года",
    text: "Молодая точка в самом центре Орехово-Зуева — но цветы подбираем и собираем так, будто делаем это уже много лет.",
  },
  {
    title: "Собираем на месте",
    text: "Каждое утро разбираем свежую поставку и в течение дня формируем букеты и композиции под конкретные заказы.",
  },
  {
    title: "Показываем перед доставкой",
    text: "Присылаем фото готового букета до того, как курьер выедет — чтобы вы точно знали, что получит адресат.",
  },
];

export default function About() {
  usePageTitle("О нас");
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">О нас</span>
      <h1 className="mt-1 font-display text-[30px] text-ink">
        Букеты для тех, кто выбирает <span className="italic text-rose-deep">искренне</span>
      </h1>

      <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
        «Городской Букет» — небольшая цветочная мастерская в {brand.city}. Мы не гонимся за витриной
        побольше: вместо этого стараемся, чтобы каждый букет выглядел так, будто собран для конкретного
        человека, а не «на поток». Свежесть, аккуратная упаковка и внимание к деталям — то, ради чего к
        нам возвращаются.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line bg-white/60 p-5">
            <FlowerMark className="h-6 w-6 text-rose" />
            <h3 className="mt-3 font-display text-[16px] text-ink">{p.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-cream-deep/60 p-6">
        <h2 className="font-display text-[18px] text-ink">Что мы собираем, кроме букетов</h2>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
          Композиции в коробках, сухоцветы, которые не вянут месяцами, открытки, топперы и мягкие
          игрушки — чтобы можно было собрать подарок целиком в одном месте, не бегая по городу.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          to="/catalog"
          className="rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-rose-deep"
        >
          Смотреть каталог
        </Link>
        <Link
          to="/delivery"
          className="text-[14px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-rose"
        >
          Доставка и контакты
        </Link>
      </div>
    </div>
  );
}
