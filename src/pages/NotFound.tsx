import { Link } from "react-router-dom";
import { FlowerMark } from "../components/FlowerMark";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Страница не найдена");
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <FlowerMark className="h-12 w-12 text-rose/60" />
      <h1 className="mt-5 font-display text-[30px] text-ink">Такой страницы не нашлось</h1>
      <p className="mt-3 text-[14px] text-ink-soft">
        Возможно, ссылка устарела или в адресе опечатка. Загляните в каталог — там точно есть на что
        посмотреть.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="rounded-full bg-rose px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-rose-deep"
        >
          На главную
        </Link>
        <Link
          to="/catalog"
          className="text-[14px] font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-rose"
        >
          В каталог
        </Link>
      </div>
    </div>
  );
}
