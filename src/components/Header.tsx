import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FlowerMark } from "./FlowerMark";

const links = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/about", label: "О нас" },
  { to: "/delivery", label: "Доставка и контакты" },
];

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
        <NavLink to="/" className="flex items-center gap-2.5">
          <FlowerMark className="h-7 w-7 text-rose" />
          <span className="font-display text-[19px] leading-none text-ink">Городской Букет</span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors ${
                  isActive ? "text-rose-deep" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/cart"
          className="relative flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-rose"
        >
          Заявка
          {count > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose px-1 text-[11px] font-bold text-white">
              {count}
            </span>
          )}
        </NavLink>
      </div>

      <nav className="flex items-center gap-5 overflow-x-auto border-t border-line/60 px-5 py-2 md:hidden">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) =>
              `whitespace-nowrap text-[13px] font-medium ${isActive ? "text-rose-deep" : "text-ink-soft"}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
