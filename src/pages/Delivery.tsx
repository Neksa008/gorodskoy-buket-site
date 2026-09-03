import { brand } from "../data/brand";
import { FlowerMark } from "../components/FlowerMark";
import { usePageTitle } from "../hooks/usePageTitle";

const mapLink = `https://yandex.ru/maps/?text=${encodeURIComponent(`${brand.city}, ${brand.address}`)}`;

export default function Delivery() {
  usePageTitle("Доставка и контакты");
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">
        Доставка и контакты
      </span>
      <h1 className="mt-1 font-display text-[30px] text-ink">Как получить букет</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white/60 p-6">
          <FlowerMark className="h-7 w-7 text-rose" />
          <h2 className="mt-4 font-display text-[19px] text-ink">Доставка</h2>
          <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-ink-soft">
            <li>По {brand.city} и в радиусе {brand.deliveryZoneKm} км — от {brand.deliveryFrom} ₽</li>
            <li>Бесплатно при заказе от {brand.deliveryFreeFrom.toLocaleString("ru-RU")} ₽</li>
            <li>Можно выбрать точное время, включая доставку-сюрприз без звонка получателю</li>
            <li>Присылаем фотоотчёт до того, как курьер выедет</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white/60 p-6">
          <FlowerMark className="h-7 w-7 text-forest" />
          <h2 className="mt-4 font-display text-[19px] text-ink">Самовывоз</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
            {brand.address}, {brand.city}
            <br />
            Часы работы: {brand.hours}
          </p>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[13.5px] font-semibold text-rose-deep hover:underline"
          >
            Открыть на карте →
          </a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-forest px-6 py-8 sm:px-10">
        <h2 className="font-display text-[19px] text-cream">Контакты</h2>
        <div className="mt-4 grid gap-4 text-[14px] text-cream/85 sm:grid-cols-3">
          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-wide text-cream/60">Телефон</div>
            {brand.phones.map((p) => (
              <div key={p}>
                <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                  {p}
                </a>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-wide text-cream/60">VK</div>
            <a href={brand.vk} target="_blank" rel="noreferrer" className="hover:text-white">
              vk.ru/flower_paradisee
            </a>
          </div>
          <div>
            <div className="text-[11.5px] font-semibold uppercase tracking-wide text-cream/60">MAX</div>
            <span>«Городской букет, цветы в Орехово-Зуево»</span>
          </div>
        </div>
      </div>
    </div>
  );
}
