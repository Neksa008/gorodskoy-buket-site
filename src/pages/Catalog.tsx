import { useMemo, useState } from "react";
import { categories, products, type Category } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { usePageTitle } from "../hooks/usePageTitle";

const PRICE_MAX = Math.max(...products.map((p) => p.price));

export default function Catalog() {
  usePageTitle("Каталог");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (activeCategory === "all" || p.category === activeCategory) && p.price <= maxPrice
      ),
    [activeCategory, maxPrice]
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div>
        <span className="text-[12px] font-semibold uppercase tracking-wide text-forest/70">Каталог</span>
        <h1 className="mt-1 font-display text-[30px] text-ink">Букеты и композиции</h1>
        <p className="mt-2 max-w-xl text-[14px] text-ink-soft">
          {products.length} позиций в наличии — фильтруйте по категории и цене, чтобы найти то, что нужно.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 border-b border-line/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
              activeCategory === "all"
                ? "border-forest bg-forest text-cream"
                : "border-line bg-white/60 text-ink-soft hover:border-forest/50"
            }`}
          >
            Всё
          </button>
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                activeCategory === c.key
                  ? "border-forest bg-forest text-cream"
                  : "border-line bg-white/60 text-ink-soft hover:border-forest/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <label className="flex min-w-[220px] flex-col gap-1.5 text-[13px] text-ink-soft">
          <span>
            До <span className="font-semibold text-ink">{maxPrice.toLocaleString("ru-RU")} ₽</span>
          </span>
          <input
            type="range"
            min={0}
            max={PRICE_MAX}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-rose"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-[14px] text-ink-soft">
          В этом диапазоне пока ничего нет — попробуйте увеличить цену или сменить категорию.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 6) * 60}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
