import type { Product } from "../data/products";

export interface OrderDetails {
  name: string;
  phone: string;
  fulfillment: "delivery" | "pickup";
  address?: string;
  date?: string;
  time?: string;
  card?: string;
  anonymous: boolean;
  comment?: string;
}

export function formatOrderText(items: { product: Product; qty: number }[], total: number, order: OrderDetails) {
  const lines = [
    "Заявка с сайта — Городской Букет",
    "",
    ...items.map(({ product, qty }) => `• ${product.name} × ${qty} — ${product.price * qty} ₽`),
    `Итого: ${total} ₽`,
    "",
    `Имя: ${order.name}`,
    `Телефон: ${order.phone}`,
    order.fulfillment === "delivery" ? `Доставка: ${order.address ?? "—"}` : "Самовывоз",
  ];

  if (order.date || order.time) {
    lines.push(`Дата/время: ${[order.date, order.time].filter(Boolean).join(" ")}`);
  }
  if (order.card) lines.push(`Текст открытки: ${order.card}`);
  if (order.anonymous) lines.push("Не говорить получателю, от кого букет");
  if (order.comment) lines.push(`Комментарий: ${order.comment}`);

  return lines.join("\n");
}
