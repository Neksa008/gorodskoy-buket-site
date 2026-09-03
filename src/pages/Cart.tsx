import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { brand } from "../data/brand";
import { formatOrderText } from "../utils/formatOrder";
import { usePageTitle } from "../hooks/usePageTitle";

type Fulfillment = "delivery" | "pickup";

export default function Cart() {
  usePageTitle("Заявка");
  const { items, total, setQty, remove, clear } = useCart();
  const [fulfillment, setFulfillment] = useState<Fulfillment>("delivery");
  const [anonymous, setAnonymous] = useState(false);
  const [orderText, setOrderText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const freeDelivery = total >= brand.deliveryFreeFrom;

  // No order backend yet, so we don't silently pretend the request was sent.
  // Instead we hand the customer a ready-made message: one tap copies it or
  // opens VK, so the order actually reaches the shop today. Swap this for a
  // real endpoint / MAX-notification once order intake is wired up.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = formatOrderText(items, total, {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      fulfillment,
      address: fulfillment === "delivery" ? String(data.get("address") ?? "") : undefined,
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      card: String(data.get("card") ?? ""),
      anonymous,
      comment: String(data.get("comment") ?? ""),
    });
    setOrderText(text);
    clear();
  };

  const copyOrder = async () => {
    if (!orderText) return;
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (items.length === 0 && !orderText) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-display text-[26px] text-ink">В заявке пока пусто</h1>
        <p className="mt-3 text-[14px] text-ink-soft">
          Добавьте букет или композицию из каталога — оформим доставку или самовывоз.
        </p>
        <Link
          to="/catalog"
          className="mt-6 inline-block rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white hover:bg-rose-deep"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  if (orderText) {
    return (
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-display text-[26px] text-ink">Заявка готова 🌸</h1>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-ink-soft">
          Мы пока принимаем заказы вручную: отправьте эту заявку нам в VK или позвоните — и мы
          перезвоним, чтобы подтвердить заказ, время и оплату.
        </p>

        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-line bg-white/70 p-4 text-left text-[13px] leading-relaxed text-ink">
          {orderText}
        </pre>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copyOrder}
            className="rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-rose-deep"
          >
            {copied ? "Скопировано ✓" : "Скопировать заявку"}
          </button>
          <a
            href={brand.vk}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-forest px-6 py-3 text-[14px] font-semibold text-cream transition-colors hover:bg-forest-deep"
          >
            Открыть VK
          </a>
          <a
            href={`tel:${brand.phones[0].replace(/[^\d+]/g, "")}`}
            className="text-[14px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-rose"
          >
            Позвонить
          </a>
        </div>

        <Link to="/catalog" className="mt-8 inline-block text-[13px] text-ink-soft hover:text-rose-deep">
          ← Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="font-display text-[28px] text-ink">Оформление заявки</h1>
      <p className="mt-2 text-[14px] text-ink-soft">
        Заявка не требует оплаты онлайн прямо сейчас — мы перезвоним, согласуем детали и оформим заказ.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          {items.map(({ product, qty }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-xl border border-line bg-white/60 p-3"
            >
              <div
                className="h-14 w-14 flex-none rounded-lg"
                style={{ background: `linear-gradient(155deg, ${product.swatch[0]}, ${product.swatch[1]})` }}
              />
              <div className="flex-1">
                <div className="text-[14px] font-medium text-ink">{product.name}</div>
                <div className="text-[13px] text-ink-soft">{product.price.toLocaleString("ru-RU")} ₽</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQty(product.id, qty - 1)}
                  className="h-7 w-7 rounded-full border border-line text-ink-soft hover:border-rose"
                >
                  −
                </button>
                <span className="w-5 text-center text-[13px] tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(product.id, qty + 1)}
                  className="h-7 w-7 rounded-full border border-line text-ink-soft hover:border-rose"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => remove(product.id)}
                className="text-[12px] text-ink-soft/70 hover:text-rose-deep"
              >
                Убрать
              </button>
            </div>
          ))}

          <div className="rounded-xl border border-line bg-cream-deep/60 p-4 text-[13.5px] text-ink-soft">
            <div className="flex justify-between">
              <span>Сумма заказа</span>
              <span className="font-semibold text-ink">{total.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="mt-1 flex justify-between">
              <span>Доставка по {brand.city}</span>
              <span className={freeDelivery ? "font-semibold text-forest" : ""}>
                {freeDelivery ? "бесплатно" : `от ${brand.deliveryFrom} ₽`}
              </span>
            </div>
            {!freeDelivery && (
              <p className="mt-2 text-[12px] text-ink-soft/80">
                Бесплатная доставка от {brand.deliveryFreeFrom.toLocaleString("ru-RU")} ₽.
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            {(["delivery", "pickup"] as Fulfillment[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFulfillment(f)}
                className={`flex-1 rounded-full border px-3 py-2 text-[13px] font-medium transition-colors ${
                  fulfillment === f
                    ? "border-forest bg-forest text-cream"
                    : "border-line bg-white/60 text-ink-soft"
                }`}
              >
                {f === "delivery" ? "Доставка" : "Самовывоз"}
              </button>
            ))}
          </div>

          <Field label="Имя" required>
            <input required type="text" name="name" className="field" placeholder="Как к вам обращаться" />
          </Field>

          <Field label="Телефон" required>
            <input required type="tel" name="phone" className="field" placeholder="+7 900 000-00-00" />
          </Field>

          {fulfillment === "delivery" ? (
            <Field label="Адрес доставки" required>
              <input required type="text" name="address" className="field" placeholder="Улица, дом, квартира" />
            </Field>
          ) : (
            <p className="rounded-lg border border-line bg-white/60 px-3 py-2.5 text-[13px] text-ink-soft">
              Заберите заказ по адресу: {brand.address}, {brand.hours}.
            </p>
          )}

          <Field label="Дата и время">
            <div className="flex gap-2">
              <input type="date" name="date" className="field" />
              <input type="time" name="time" className="field" />
            </div>
          </Field>

          <Field label="Текст открытки (по желанию)">
            <textarea name="card" rows={2} className="field resize-none" placeholder="Что написать получателю" />
          </Field>

          <label className="flex items-center gap-2 text-[13px] text-ink-soft">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="h-4 w-4 accent-rose"
            />
            Не говорить получателю, от кого букет
          </label>

          <Field label="Комментарий">
            <textarea name="comment" rows={2} className="field resize-none" placeholder="Дополнительные пожелания" />
          </Field>

          <button
            type="submit"
            className="w-full rounded-full bg-rose py-3 text-[14px] font-semibold text-white transition-colors hover:bg-rose-deep"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink">
        {label} {required && <span className="text-rose-deep">*</span>}
      </span>
      {children}
    </label>
  );
}
