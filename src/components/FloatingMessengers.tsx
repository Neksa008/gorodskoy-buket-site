import { brand } from "../data/brand";

const base = import.meta.env.BASE_URL;

const buttons = [
  { href: brand.vkChat, label: "Написать в VK", icon: `${base}vk-logo.png` },
  { href: brand.max, label: "Канал в MAX", icon: `${base}max-logo.png` },
];

/** Floating contact pill pinned to the bottom-right corner, visible on every page. */
export function FloatingMessengers() {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 rounded-full border-2 border-rose bg-white p-2 shadow-xl shadow-rose/25 sm:bottom-6 sm:right-6"
      role="group"
      aria-label="Связаться с нами"
    >
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noreferrer"
          title={b.label}
          aria-label={b.label}
          className="block rounded-full ring-1 ring-ink/10 transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
        >
          <img src={b.icon} alt="" className="h-12 w-12 rounded-full" />
        </a>
      ))}
    </div>
  );
}
