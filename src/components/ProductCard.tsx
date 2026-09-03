import { categories, type Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { FlowerMark } from "./FlowerMark";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const categoryLabel = categories.find((c) => c.key === product.category)?.label;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/60">
      <div
        className="relative flex h-44 items-center justify-center"
        style={{ background: `linear-gradient(155deg, ${product.swatch[0]}, ${product.swatch[1]})` }}
      >
        <FlowerMark
          className="h-16 w-16 opacity-80 transition-transform duration-500 group-hover:scale-110"
          petal="rgba(255,255,255,0.75)"
          center="rgba(255,255,255,0.95)"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-forest/70">
          {categoryLabel}
        </span>
        <h3 className="font-display text-[17px] leading-snug text-ink">{product.name}</h3>
        <p className="text-[13px] leading-relaxed text-ink-soft">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-lg text-rose-deep">{product.price.toLocaleString("ru-RU")} ₽</span>
          <button
            onClick={() => add(product.id)}
            className="rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-cream transition-colors hover:bg-forest-deep"
          >
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
