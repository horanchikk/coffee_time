interface DataObjT {
    name: string;
    isTitle: 'big' | 'mini' | null;
    size: string | null;
    price: string | null;
}

type Data = DataObjT[]

export const teaData: Data = [
    { name: 'ЧАЙ', isTitle: 'big', size: null, price: null },
    { name: 'ЧЁРНЫЙ ЧАЙ', isTitle: 'mini', size: null, price: null },
    { name: 'Английский завтрак', isTitle: null, size: '500мл', price: '180р' },
    { name: 'Эрл Грей', isTitle: null, size: null, price: null },
    { name: 'Чёрная смородина', isTitle: null, size: null, price: null },
    { name: 'Пу Эр Ан-Бао', isTitle: null, size: null, price: null },
    { name: 'ЗЕЛЁНЫЙ ЧАЙ', isTitle: 'mini', size: null, price: null },
    { name: 'Сенча', isTitle: null, size: '500мл', price: '180р' },
    { name: 'Жасминовый', isTitle: null, size: null, price: null },
    { name: 'Грюн Матинэ', isTitle: null, size: null, price: null },
    { name: 'Женьшень Полёт Дракона', isTitle: null, size: null, price: null },
    { name: 'Спринг Тоник', isTitle: null, size: null, price: null },
    { name: 'Касабланка Минт', isTitle: null, size: null, price: null },
    { name: 'ФРУКТОВЫЙ ЧАЙ', isTitle: 'mini', size: null, price: null },
    { name: 'Палм Бич', isTitle: null, size: '300мл', price: '190р' },
    { name: 'Ройбуш крем-карамель', isTitle: null, size: null, price: null },
    { name: 'Анчан', isTitle: null, size: null, price: null },
    { name: 'Анчан Латте', isTitle: null, size: null, price: null },
    { name: 'Чай Матча', isTitle: null, size: null, price: null },
    { name: 'Альманд Пай', isTitle: null, size: null, price: null },
    { name: 'Персидское Яблоко', isTitle: null, size: null, price: null },
    { name: 'Звёздная Пыль', isTitle: null, size: null, price: null },
    { name: 'Ванильная Звёздная Пыль', isTitle: null, size: null, price: null },
    { name: 'Маргента', isTitle: null, size: null, price: null },
    { name: 'Дикая Вишня', isTitle: null, size: null, price: null },
    { name: 'Маракеш', isTitle: null, size: null, price: null },
    { name: 'Сицилийский Апельсин', isTitle: null, size: null, price: null },
    { name: 'Стробери Флип Эсенс оф Фрут', isTitle: null, size: null, price: null },
    { name: 'ТРАВЯНОЙ ЧАЙ', isTitle: 'mini', size: null, price: null },
    { name: 'Велнес Кап', isTitle: null, size: '500мл', price: '180р' },
    { name: 'Баварская Мята', isTitle: null, size: null, price: null },
    { name: 'Улум', isTitle: null, size: null, price: null },
    { name: 'Ромашковый Луг', isTitle: null, size: null, price: null },
    { name: 'Японская Липа', isTitle: null, size: null, price: null },
    { name: 'Французская Роза', isTitle: null, size: null, price: null },
    { name: 'Ромашка Мята', isTitle: null, size: null, price: null },
];

export const coffeeData: Data = [
    { name: 'КОФЕЙНАЯ КЛАССИКА', isTitle: 'big', size: null, price: null },
    { name: 'ЧЁРНЫЙ КОФЕ', isTitle: 'mini', size: null, price: null },
    { name: 'Эспрессо двойной', isTitle: null, size: null, price: '100р' },
    { name: 'Американо', isTitle: null, size: '200/300мл', price: '120р' },
    { name: 'КОФЕ С МОЛОКОМ', isTitle: 'mini', size: null, price: null },
    { name: 'Капучино', isTitle: null, size: '300/400мл', price: '170/180р' },
    { name: 'Латте', isTitle: null, size: '300/400мл', price: '170/180р' },
    { name: 'Флет уайт', isTitle: null, size: '200мл', price: '150р' },
    { name: 'АВТОРСКИЙ КОФЕ', isTitle: 'big', size: null, price: null },
    { name: 'Капучино Фундучный', isTitle: null, size: null, price: null },
    { name: 'Латте Солёная карамель', isTitle: null, size: null, price: null },
    { name: 'Латте Малиновый тарт', isTitle: null, size: null, price: null },
    { name: 'Латте Сырный', isTitle: null, size: null, price: null },
    { name: 'Латте Халва', isTitle: null, size: null, price: null },
    { name: 'Латте Ореховый', isTitle: null, size: null, price: null },
    { name: 'Латте Спайси манго', isTitle: null, size: null, price: null },
    { name: 'Латте от Бариста', isTitle: null, size: '300/400мл', price: '200/210р' },
    { name: 'РАФЫ', isTitle: 'big', size: null, price: null },
    { name: 'Классический', isTitle: null, size: null, price: null },
    { name: 'Солёная карамель', isTitle: null, size: null, price: null },
    { name: 'Лимонное печенье', isTitle: null, size: null, price: null },
    { name: 'Тройной орех', isTitle: null, size: null, price: null },
    { name: 'Черничный', isTitle: null, size: null, price: null },
    { name: 'Апельсиновый', isTitle: null, size: null, price: null },
    { name: 'Новогодний', isTitle: null, size: null, price: null },
    { name: 'Медовый пряник', isTitle: null, size: null, price: null },
    { name: 'Сникерс', isTitle: null, size: null, price: null },
    { name: 'Рафаэлло', isTitle: null, size: null, price: null },
    { name: 'Хэллуин', isTitle: null, size: null, price: null },
    { name: 'Баунти', isTitle: null, size: null, price: null },
    { name: 'Кедровый', isTitle: null, size: null, price: null },
    { name: 'Имбирный пряник', isTitle: null, size: null, price: null },
    { name: 'Раф от бариста', isTitle: null, size: '300/400мл', price: '200/220р' },
    { name: 'Фисташка-малина', isTitle: null, size: '300мл', price: '250р' }
];

export const teaHotData: Data = [
    {name: "СОГРЕВАЮЩИЕ НАПИТКИ", isTitle: "big", size: null, price: null},
    {name: "Таёжный", isTitle: null, size: null, price: null},
    {name: "Облепиховый", isTitle: null, size: null, price: null},
    {name: "Тропический", isTitle: null, size: null, price: null},
    {name: "Маракуйя", isTitle: null, size: null, price: null},
    {name: "Сибирский", isTitle: null, size: null, price: null},
    {name: "Грейпфрут-розмарин", isTitle: null, size: null, price: null},
    {name: "Ежевика-малина", isTitle: null, size: null, price: null},
    {name: "Глинтвейн", isTitle: null, size: '500мл', price: '180р'},
    {name: "ШОКОЛАДНЫЕ НАПИТКИ", isTitle: "big", size: null, price: null},
    {name: "Мокачинно", isTitle: null, size: '300/400мл', price: '180/190р'},
    {name: "Какао", isTitle: null, size: '300мл', price: '180р'},
    {name: "Горячий шоколад", isTitle: null, size: '200мл', price: '180р'},
    {name: "АВТОРСКИЕ ЧАИ", isTitle: "big", size: null, price: null},
    {name: "Киви-клубника-фейхоа", isTitle: null, size: null, price: null},
    {name: "Мятное яблоко", isTitle: null, size: null, price: null},
    {name: "Сладкая дикая вишня", isTitle: null, size: null, price: null},
    {name: "Черничный Ежевика", isTitle: null, size: null, price: null},
    {name: "Пряный апельсин", isTitle: null, size: null, price: null},
    {name: "Чёрная смородина", isTitle: null, size: null, price: null},
    {name: "Клубника-мята", isTitle: null, size: '500мл', price: '180р'}
];

export const milkData: Data = [
    {name: "МОЛОЧНЫЕ КОКТЕЙЛИ", isTitle: "big", size: null, price: null},
    {name: "Классический", isTitle: null, size: '300/400мл', price: '180/195р'},
    {name: "Клубничное печенье", isTitle: null, size: '300/400мл', price: '190/210р'},
    {name: "Орео Шейк", isTitle: null, size: null, price: null},
    {name: "Ореховый Шейк", isTitle: null, size: null, price: null},
    {name: "Баунти", isTitle: null, size: null, price: null},
    {name: "Фисташка", isTitle: null, size: '300мл', price: '270р'},
    {name: "Тропик", isTitle: null, size: '300мл', price: '270р'},
    {name: "СМУЗИ", isTitle: "big", size: null, price: null},
    {name: "Клубника банан", isTitle: null, size: null, price: null},
    {name: "Черничный", isTitle: null, size: null, price: null},
    {name: "Ягодный", isTitle: null, size: null, price: null},
    {name: "Облепиха банан", isTitle: null, size: null, price: null},
    {name: "Грепфрут банан", isTitle: null, size: null, price: null},
    {name: "Тропический", isTitle: null, size: null, price: null},
    {name: "Витаминка", isTitle: null, size: '500мл', price: '180р'},
    {name: "СВЕЖЕВЫЖАТЫЙ СОК", isTitle: "big", size: null, price: null},
    {name: "Яблочный", isTitle: null, size: null, price: null},
    {name: "Морковный", isTitle: null, size: null, price: null},
    {name: "Апельсиновый", isTitle: null, size: null, price: null},
    {name: "Грепфрутовый", isTitle: null, size: '100мл', price: '90р'}
]

export const limonadeData: Data = [
    {"name": "ЛИМОНАДЫ", "isTitle": "big", "size": null, "price": null},
    {"name": "Клубника лайм", "isTitle": null, "size": null, "price": null},
    {"name": "Кофейный лимонад", "isTitle": null, "size": null, "price": null},
    {"name": "Мохито", "isTitle": null, "size": null, "price": null},
    {"name": "Торнадо", "isTitle": null, "size": null, "price": null},
    {"name": "Космический", "isTitle": null, "size": null, "price": null},
    {"name": "Киви банан", "isTitle": null, "size": null, "price": null},
    {"name": "Огурец", "isTitle": null, "size": null, "price": null},
    {"name": "Цветочный", "isTitle": null, "size": null, "price": null},
    {"name": "Вишнёвый амаретто", "isTitle": null, "size": null, "price": null},
    {"name": "Барбарелла", "isTitle": null, "size": null, "price": null},
    {"name": "Личи лайм", "isTitle": null, "size": null, "price": null},
    {"name": "Клюквенная жвачка", "isTitle": null, "size": null, "price": null},
    {"name": "Манговое Мохито", "isTitle": null, "size": null, "price": null},
    {"name": "Гренадин", "isTitle": null, "size": null, "price": null},
    {"name": "Черника лаванда", "isTitle": null, "size": '400мл', "price": '180р'},
    {"name": "ХОЛОДНЫЙ ЧАЙ", "isTitle": "big", "size": null, "price": null},
    {"name": "Ice cherry", "isTitle": null, "size": null, "price": null},
    {"name": "Ice lime", "isTitle": null, "size": null, "price": null},
    {"name": "Ice raspberries", "isTitle": null, "size": null, "price": null},
    {"name": "Ice blackberries", "isTitle": null, "size": '400мл', "price": '180р'},
    {"name": "МОРСЫ", "isTitle": "big", "size": null, "price": null},
    {"name": "Облепиховый", "isTitle": null, "size": null, "price": null},
    {"name": "Вишнёвый", "isTitle": null, "size": null, "price": null},
    {"name": "Брусничный", "isTitle": null, "size": '500мл', "price": '180р'}
]

export const salatesData: Data = [
    {"name": "САЛАТЫ", "isTitle": "big", "size": null, "price": null},
    {"name": "Цезарь с курицей", "isTitle": null, "size": null, "price": '270р'},
    {"name": "Цезарь с креветкой", "isTitle": null, "size": null, "price": '350р'},
    {"name": "Салат с солёным лососеми и азиатской заправкой", "isTitle": null, "size": null, "price": '320р'},
    {"name": "Салат с сыром сулугуни и грецким орехом", "isTitle": null, "size": null, "price": '270р'},
    {"name": "Греческий", "isTitle": null, "size": null, "price": '270р'},
    {"name": "ПАСТЫ", "isTitle": "big", "size": null, "price": null},
    {"name": "Карбонара Фузилли по генуэзски", "isTitle": null, "size": null, "price": '270р'},
    {"name": "Фузилли с курицей и грибами в сливочном соусе", "isTitle": null, "size": null, "price": '270р'},
    {"name": "Тальятелле с лососем в сливочном соусе", "isTitle": null, "size": null, "price": '270р'},
    {"name": "Паста с морепродуктами", "isTitle": null, "size": null, "price": '320р'},
    {"name": "ВАФЛИ", "isTitle": "big", "size": null, "price": '370р'},
    {"name": "Сладкие вафли с мороженым и ягодами", "isTitle": null, "size": null, "price": '220р'},
    {"name": "Вафли с яйцом пашот и заеленью", "isTitle": null, "size": null, "price": '220р'},
    {"name": "КИСАДИЛЬИ", "isTitle": "big", "size": null, "price": null},
    {"name": "Кисадилья с курицей и соусом сальса", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Кисадилья с лососем", "isTitle": null, "size": null, "price": '200р'},
    {"name": "СЭНДВИЧИ", "isTitle": "big", "size": null, "price": null},
    {"name": "Сэндвич с курицей", "isTitle": null, "size": null, "price": '180р'},
    {"name": "Сэндвич с лососем", "isTitle": null, "size": null, "price": '250р'},
    {"name": "Сэндвич с ветчиной", "isTitle": null, "size": null, "price": '200р'},
    {"name": "ЗАКУСКИ", "isTitle": "big", "size": null, "price": null},
    {"name": "Картофель фри + соус", "isTitle": null, "size": null, "price": '170р'},
    {"name": "Картофель кантри + соус", "isTitle": null, "size": null, "price": '170р'},
    {"name": "Драники со сметаной", "isTitle": null, "size": null, "price": '150р'},
    {"name": "Креветки в темпуре", "isTitle": null, "size": null, "price": '260р'},
    {"name": "Кольца кальмара в панировке", "isTitle": null, "size": null, "price": '260р'}  
  ]
  
export const dessertsData: Data = [
    {"name": "КЛАССИКА", "isTitle": "big", "size": null, "price": null},
    {"name": "ЭНДОРФИНЫ", "isTitle": "mini", "size": null, "price": null},
    {"name": "Картошка", "isTitle": null, "size": null, "price": '140р'},
    {"name": "Сырок", "isTitle": null, "size": null, "price": '210р'},
    {"name": "Тарт", "isTitle": null, "size": null, "price": '220р'},
    {"name": "Чехов", "isTitle": null, "size": null, "price": '250р'},
    {"name": "Бонжур", "isTitle": null, "size": null, "price": '220р'},
    {"name": "Птичка \"Феникс\"", "isTitle": null, "size": null, "price": '230р'},
    {"name": "Пчёлка", "isTitle": null, "size": null, "price": '230р'},
    {"name": "Клубничное счастье", "isTitle": null, "size": null, "price": '230р'},
    {"name": "Трюфели", "isTitle": null, "size": null, "price": '80р'},
    {"name": "Маркус", "isTitle": null, "size": null, "price": '230р'},
    {"name": "Нуд", "isTitle": null, "size": null, "price": '230р'},
    {"name": "КЛАССИКА", "isTitle": "mini", "size": null, "price": null},
    {"name": "Муравей", "isTitle": null, "size": null, "price": '110р'},
    {"name": "Павлова", "isTitle": null, "size": null, "price": '240р'},
    {"name": "Черёмуховый торт", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Торт \"Три шоколада\"", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Фисташковый торт", "isTitle": null, "size": null, "price": '220р'},
    {"name": "Тирамису", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Медовик", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Наполеон", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Тарт ореховый", "isTitle": null, "size": null, "price": '200р'},
    {"name": "Чизкейк", "isTitle": null, "size": null, "price": '150р'},
    {"name": "Эскимо", "isTitle": null, "size": null, "price": '220р'},
    {"name": "Пончик", "isTitle": null, "size": null, "price": '85р'},
    {"name": "Моти", "isTitle": null, "size": null, "price": '150р'},
    {"name": "Макарун", "isTitle": null, "size": null, "price": null},
    {"name": "Бомба", "isTitle": null, "size": null, "price": '250р'},
    {"name": "Сникерс", "isTitle": null, "size": null, "price": '230р'},
    {"name": "Трайфл", "isTitle": null, "size": null, "price": '260р'}
  ]
  
export const delicatesiData: Data = [
    {"name": "ДЕЛИКАТЕСЫ", "isTitle": "big", "size": null, "price": null},
    {"name": "ИВАН-ЧАЙ", "isTitle": "mini", "size": null, "price": null},
    {"name": "Листовой", "isTitle": null, "size": null, "price": null},
    {"name": "Летний", "isTitle": null, "size": null, "price": null},
    {"name": "Кипрей луговой", "isTitle": null, "size": null, "price": null},
    {"name": "Душистый", "isTitle": null, "size": null, "price": null},
    {"name": "Секрет знахаря", "isTitle": null, "size": null, "price": null},
    {"name": "Майский шиповник", "isTitle": null, "size": '100гр', "price": '300р'},
    {"name": "ВАРЕНЬЕ", "isTitle": "mini", "size": null, "price": null},
    {"name": "Сосноый джем", "isTitle": null, "size": null, "price": '390р'},
    {"name": "Кедровый сироп", "isTitle": null, "size": null, "price": '450р'},
    {"name": "ПАСТЫ", "isTitle": "mini", "size": null, "price": null},
    {"name": "Фрутти", "isTitle": null, "size": null, "price": '300р'},
    {"name": "Кешью", "isTitle": null, "size": null, "price": '500р'},
    {"name": "Хрустящая", "isTitle": null, "size": null, "price": '500р'},
    {"name": "Кремовая", "isTitle": null, "size": null, "price": '300р'},
    {"name": "Фундучная", "isTitle": null, "size": null, "price": '400р'},
    {"name": "Миндальная", "isTitle": null, "size": null, "price": '500р'},
    {"name": "Медовая", "isTitle": null, "size": null, "price": '300р'},
    {"name": "Шоколадная", "isTitle": null, "size": null, "price": '450р'},
    {"name": "Протеиновая", "isTitle": null, "size": null, "price": '380р'},
    {"name": "ШОКОЛАД", "isTitle": "mini", "size": null, "price": null},
    {"name": "Тёмный с жидкой начинкой", "isTitle": null, "size": null, "price": '340р'},
    {"name": "Молочный с клубникой", "isTitle": null, "size": null, "price": '340р'},
    {"name": "Молочный с сосновой шишкой", "isTitle": null, "size": null, "price": '340р'},
    {"name": "Сосновый", "isTitle": null, "size": null, "price": '320р'},
    {"name": "Без сахара", "isTitle": null, "size": null, "price": '350р'}
  ]

export const produktiData: Data = [
    { name: 'ПРОДУКЦИЯ', isTitle: 'big', size: null, price: null },
    { name: 'Нектар облепиха', isTitle: null, size: '200/500мл', price: '100/150p' },
    { name: 'Нектар облепиха-банан', isTitle: null, size: '200/500мл', price: '100/150p' },
    { name: 'Нектар облепиха-манго', isTitle: null, size: '200/500мл', price: '100/150p' },
    { name: 'Нектар облепиха-апельсин', isTitle: null, size: '200/500мл', price: '100/150p' },
    { name: 'Вода "Петроглиф"', isTitle: null, size: '500мл', price: '100p' },
    { name: 'Дикорос', isTitle: null, size: '500мл', price: '100p' },
    { name: 'Азиано клубника', isTitle: null, size: '300мл', price: '100p' },
    { name: 'Азиано энерджи', isTitle: null, size: '300мл', price: '100p' },
    { name: 'Черноголовка пл/б', isTitle: null, size: '500мл', price: '60р' },
    { name: 'Черноголовка ст/б', isTitle: null, size: '500мл', price: '80p' },
    { name: 'Вода Легенда Сибири', isTitle: null, size: '250/500/1000мл', price: '100/150p' },
    { name: 'Вода Байкальская', isTitle: null, size: '250/500/1500мл', price: '100/150p' },
    { name: 'Вода Теренги', isTitle: null, size: '300мл', price: '60p' },
    { name: 'Турбо Энерджи', isTitle: null, size: '500мл', price: '80p' },
    { name: 'Вода Шамовари', isTitle: null, size: '1000мл', price: '1000p' }
  ]
  