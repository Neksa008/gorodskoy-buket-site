export type Category =
  | "buket"
  | "kompozitsiya"
  | "sukhotsvety"
  | "svechi"
  | "otkrytki"
  | "toppery"
  | "igrushki"
  | "upakovka";

export const categories: { key: Category; label: string; labelOne: string }[] = [
  { key: "buket", label: "Букеты", labelOne: "Букет" },
  { key: "kompozitsiya", label: "Композиции", labelOne: "Композиция" },
  { key: "sukhotsvety", label: "Сухоцветы", labelOne: "Сухоцветы" },
  { key: "svechi", label: "Свечи", labelOne: "Свеча" },
  { key: "otkrytki", label: "Открытки", labelOne: "Открытка" },
  { key: "toppery", label: "Топперы", labelOne: "Топпер" },
  { key: "igrushki", label: "Игрушки", labelOne: "Игрушка" },
  { key: "upakovka", label: "Упаковка", labelOne: "Упаковка" },
];

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  /** two CSS colors used to fake a soft product swatch until real photos are in */
  swatch: [string, string];
}

export const products: Product[] = [
  {
    id: "white-roses",
    name: "Композиция «Белые розы»",
    category: "kompozitsiya",
    price: 2510,
    description: "Белые розы в плотной посадке — сдержанная и очень нарядная композиция.",
    swatch: ["#F7EFE9", "#E8D9CE"],
  },
  {
    id: "kompozitsiya-1",
    name: "Композиция дня",
    category: "kompozitsiya",
    price: 2870,
    description: "Сборная композиция из сезонных цветов — обновляем состав каждую неделю.",
    swatch: ["#F3D9E2", "#EAB8C9"],
  },
  {
    id: "kompozitsiya-roses",
    name: "Композиция с розами",
    category: "kompozitsiya",
    price: 3050,
    description: "Розы и плотная зелень в невысокой круглой посадке — держит форму несколько дней.",
    swatch: ["#F0C6D6", "#D98BA8"],
  },
  {
    id: "buket-roses",
    name: "Букет с розами",
    category: "buket",
    price: 2080,
    description: "Классический букет из розовых роз с лёгкой зеленью.",
    swatch: ["#F6DEE6", "#E6A9C0"],
  },
  {
    id: "buket-liliya",
    name: "Букет с лилией",
    category: "buket",
    price: 3900,
    description: "Крупные лилии в паре с розами — заметный и ароматный букет.",
    swatch: ["#FBEFD8", "#F0D28E"],
  },
  {
    id: "buket-1",
    name: "Букет «Нежность»",
    category: "buket",
    price: 1890,
    description: "Лёгкий букет для повседневного повода — альстромерии и хризантемы.",
    swatch: ["#EFE6F2", "#D3BEDD"],
  },
  {
    id: "buket-2",
    name: "Букет «Праздничный»",
    category: "buket",
    price: 3200,
    description: "Яркое сочетание крупных цветов — для события, которое хочется отметить красиво.",
    swatch: ["#F9DCC4", "#EFA766"],
  },
  {
    id: "kompozitsiya-2",
    name: "Композиция «Компакт»",
    category: "kompozitsiya",
    price: 1390,
    description: "Небольшая композиция в коробке — удобно нести и дарить без хлопот с вазой.",
    swatch: ["#E4EEDD", "#B9D1A4"],
  },
  {
    id: "kompozitsiya-3",
    name: "Композиция «Мини»",
    category: "kompozitsiya",
    price: 900,
    description: "Самая доступная композиция в ассортименте — маленький, но настоящий букет.",
    swatch: ["#F6ECDD", "#E4C99B"],
  },
  {
    id: "sukhotsvety-1",
    name: "Композиция из сухоцветов",
    category: "sukhotsvety",
    price: 1990,
    description: "Не вянет месяцами — лаванда, ковыль и хлопок в тёплой палитре.",
    swatch: ["#EFE3D2", "#CBB08A"],
  },
  {
    id: "svecha-rosa",
    name: "Свеча ароматическая «Роза»",
    category: "svechi",
    price: 450,
    description: "Соевая свеча в стакане, аромат розы и белого мускуса.",
    swatch: ["#F3D9E2", "#DFA9BC"],
  },
  {
    id: "svecha-vanil",
    name: "Свеча в стакане «Ваниль»",
    category: "svechi",
    price: 380,
    description: "Тёплый ванильный аромат — хорошо дополняет букет как подарок.",
    swatch: ["#F6ECDD", "#E8CFA3"],
  },
  {
    id: "otkrytka-dlya-tebya",
    name: "Открытка «Для тебя»",
    category: "otkrytki",
    price: 150,
    description: "Небольшая открытка с местом для личного пожелания.",
    swatch: ["#F0EAF5", "#D9CBE8"],
  },
  {
    id: "otkrytka-prazdnik",
    name: "Открытка «С праздником»",
    category: "otkrytki",
    price: 150,
    description: "Универсальная праздничная открытка к букету.",
    swatch: ["#FDEBD3", "#F3C98D"],
  },
  {
    id: "topper-bday",
    name: "Топпер «С днём рождения»",
    category: "toppery",
    price: 250,
    description: "Деревянный топпер в композицию — приятная деталь на день рождения.",
    swatch: ["#E4EEDD", "#A9C98E"],
  },
  {
    id: "topper-lovimoi",
    name: "Топпер «Любимой»",
    category: "toppery",
    price: 250,
    description: "Топпер для романтичного повода.",
    swatch: ["#F6DEE6", "#E6A9C0"],
  },
  {
    id: "igrushka-medved",
    name: "Мягкая игрушка «Мишка», 20 см",
    category: "igrushki",
    price: 890,
    description: "Классика к букету — плюшевый мишка среднего размера.",
    swatch: ["#F3E9DF", "#D9C0A0"],
  },
  {
    id: "upakovka-podarok",
    name: "Подарочная упаковка",
    category: "upakovka",
    price: 200,
    description: "Красивая упаковка для сопутствующих подарков — плюсом к букету.",
    swatch: ["#EAF1E6", "#BFDDA8"],
  },
];
