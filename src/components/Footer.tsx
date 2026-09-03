import { Link } from "react-router-dom";
import { brand } from "../data/brand";
import { FlowerMark } from "./FlowerMark";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-deep/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <FlowerMark className="h-6 w-6 text-rose" />
            <span className="font-display text-[17px] text-ink">{brand.name}</span>
          </div>
          <p className="text-[13px] leading-relaxed text-ink-soft">
            Свежие букеты и композиции в {brand.city}. Собираем на заказ, доставляем с фотоотчётом.
          </p>
        </div>

        <div className="text-[13px] text-ink-soft">
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-forest/70">Контакты</div>
          <p>{brand.address}, {brand.city}</p>
          <p className="mt-1">{brand.hours}</p>
          {brand.phones.map((p) => (
            <p key={p} className="mt-1">
              <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="hover:text-rose-deep">
                {p}
              </a>
            </p>
          ))}
        </div>

        <div className="text-[13px] text-ink-soft">
          <div className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-forest/70">Мы в сети</div>
          <p>
            <a href={brand.vk} target="_blank" rel="noreferrer" className="hover:text-rose-deep">
              VK: vk.ru/flower_paradisee
            </a>
          </p>
          <p className="mt-1">MAX: «Городской букет, цветы в Орехово-Зуево»</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 border-t border-line/60 px-5 py-4 text-center text-[11.5px] text-ink-soft/80 sm:flex-row sm:justify-between">
        <span>
          ИП Кривцова Татьяна Васильевна · ИНН 505302987474 · © {new Date().getFullYear()} {brand.name}
        </span>
        <span className="flex gap-4">
          <Link to="/offer" className="hover:text-rose-deep">
            Публичная оферта
          </Link>
          <Link to="/privacy" className="hover:text-rose-deep">
            Политика конфиденциальности
          </Link>
        </span>
      </div>
    </footer>
  );
}
