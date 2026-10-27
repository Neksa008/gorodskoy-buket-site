import { categories, photoUrl, type Product } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const categoryLabel = categories.find((c) => c.key === product.category)?.label;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/60">
      <div className="aspect-[4/5] overflow-hidden bg-cream-deep">
        <img
          src={photoUrl(product.image)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
