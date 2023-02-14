import { ArticleContent } from '~~/types';
const sousy: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Бальзамический уксус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Мёд. Его добавляют для расширения линейки, и обычно он встречается нечасто.',
        ],
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Барбекю (BBQ) соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Яичные продукты. Например, сухой яичный желток.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Вино. Проверяется фильтрация и осветление.',
          'Молочная кислота (е270). Уточнить, не получена ли ферментацией молочных продуктов.',
          'Соевый соус. Если состав соуса не расписан подробно, нужно запросить его и затем проанализировать (см. <a href="https://veganrussian.ru/?query=%7B%22search%22%3A%7B%22isSearching%22%3Atrue%2C%22query%22%3A%22%D1%81%D0%BE%D0%B5%D0%B2%D1%8B%D0%B9%20%D1%81%D0%BE%D1%83%D1%81%22%2C%22usePrioritySort%22%3Afalse%7D%7D" target="_blank">Соевый соус</a>).',
        ],
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Ореховый соус (гомадаре)',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Яйца. Это может быть яичный меланж, яичный желток, либо просто майонез.',
          'Куриный бульон.',
          'Рыбный экстракт.',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content: 'Веганский кунжутный соус можно найти на veganrussian.ru.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/sousy/guacamole.webp',
    caption:
      '<a href="https://unsplash.com/@t_rampersad" target="_blank">Фото @t_rampersad</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Гуакамоле',
      },
      {
        type: 'text',
        content:
          'Традиционно соус гуакамоле является веганским, но кафе и рестораны могут готовить его по-своему.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Продукты из молока. В соус добавляют коровье молоко или сливки, чтобы предотвратить потемнение соуса.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content: 'Чтобы соус не темнел, достаточно добавить лимонный сок.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Горчица / Горчичный соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Куриное яйцо.', 'Краситель кармин (е120).', 'Пчелиный мёд.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: ['Краситель бета-каротин (е160а).'],
      },
      {
        type: 'text',
        content:
          'Веганская горчица: <a href="https://veganrussian.ru/tag/mustard" target="_blank">veganrussian.ru/tag/mustard</a>.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Cделайте горчицу из порошка — тогда не придётся разбираться с добавками.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Карри соус',
      },
      {
        type: 'text',
        content:
          'Соус карри (не путайте с пастой карри) характерен для азиатской кухни: индийской и малазийской.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Коровье молоко (а также сливки, сухое молоко). Практически всегда встречается в индийской кухне.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Кокосовое молоко. В малайзийской кухне соус карри содержит лишь кокосовое молоко и специи. Стабилизатора е435, чьё происхождение нужно проверять.',
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя.. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
        ],
      },
      {
        type: 'subtitle',
        content: 'с вниманием:',
      },
      {
        type: 'text',
        content: 'Соусы на майонезной основе (см. Майонез).',
      },
    ],
  },
  {
    id: 'shriracha',
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Шрирача',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Краситель кармин (е120).', 'Молоко.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
          'Молочная кислота (е270). Нужно уточнить, не получена ли она ферментацией лактозы.',
        ],
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/sousy/sriracha.webp',
    caption:
      '<a href="https://unsplash.com/@fifernando" target="_blank">Фото @fifernando</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Кетчуп / Томатный соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Краситель кармин (е120). Добавляют в дешёвые соусы, качественные томаты не нужно подкрашивать.',
          'Пчелиный мёд. Можно заменить <a href="https://veganrussian.ru/tag/vegan-honey/" target="_blank">сиропами</a>.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Молочная кислота (е270). Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'с вниманием:',
      },
      {
        type: 'text',
        content:
          'Ароматизатор. Бывают с молоком, это указано в составе. Копчёный ароматизатор стоит проверить (но если это жидкий дым, то можно не проверять).',
      },
      {
        type: 'text',
        content:
          'Веганские кетчупы можно посмотреть в этой категории <a href="https://veganrussian.ru/tag/ketchup-and-tomato-sauces" target="_blank">veganrussian.ru/tag/ketchup-and-tomato-sauces</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Хрен',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Продукты из молока. Взбитые сливки, сухое молоко, сухие молочные сливки, молочная сыворотка, молочный белок (казеин).',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: ['Ароматизатор «сливки». Может содержать молочные продукты.'],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'При желании вы можете сделать свой соус из хрена с использованием веганской молочки.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Кимчи соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Рыба и морепродукты: рыбный соус, стружка тунца бонито, сушеные анчоусы, анчоусный соус, креветочный соус и т.п. Добавляются для усиления вкуса.',
      },
      {
        type: 'text',
        content:
          'Закуска «капуста кимчи» в формате соуса/топпинга (дополнительно см. <a href="https://veganrussian.ru/?query=%7B%22search%22%3A%7B%22isSearching%22%3Atrue%2C%22query%22%3A%22%D0%BA%D0%B8%D0%BC%D1%87%D0%B8%22%2C%22usePrioritySort%22%3Afalse%7D%7D" target="_blank">Кимчи</a>).',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Тахини (кунжутный соус)',
      },
      {
        type: 'text',
        content:
          'Паста тахини используется в ближневосточной кухне и традиционно является веганской (изготавливается из кунжута). Но производители могут вносить свои коррективы.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Молочные продукты. Как минимум – коровье молоко, сухое молоко, йогурт, кефир и сметана.',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content: 'Выбирайте тахини с единственным ингредиентом — кунжут.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/sousy/mayonnaise.webp',
    caption:
      '<a href="https://unsplash.com/@saracervera" target="_blank">Фото @saracervera</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    id: 'mayo',
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Майонез',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Яйца любых птиц (курицы, перепёлки).',
          'Яичные продукты. Меланж, яичный порошок, яичный желток, яичный белок, яичный желток сухой и т.д.',
          'Молочные продукты. Сливки, сметана, молочный белок.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Красители: каротин (е160а) и лютеин (е161b). Носителем может быть желатин.',
          'Горчица (не горчичный порошок). Может содержать красители, упомянутые выше.',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганские майонезы можно посмотреть тут <a href="https://veganrussian.ru/tag/mayo" target="_blank">veganrussian.ru/tag/mayo</a> или во вкладе “Поставщики”.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Понзу',
      },
      {
        type: 'text',
        content:
          'Понзу — это соус с цитрусовыми нотками. Традиционно является невеганским, однако распространены и веганские версии.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Бульон на основе рыбных продуктов: стружка тунца, бонито, бульон хондаши.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Такой же вкусный бульон можно сделать на основе водорослей комбу.',
      },
      {
        type: 'text',
        content:
          'Веганский понзу можно найти на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Ремулад',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Яйца и яичные продукты.',
          'Молоко и молочные продукты.',
          'Анчоусы и экстракты из них.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Молочная кислота (е270). Нужно уточнить, не получена ли она ферментацией лактозы.',
          'Бета-каротин (е160а). Носителем не должен быть желатин',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content: 'Cоус Ремулад можно сделать на основе веганского майонеза.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/sousy/pesto.webp',
    caption:
      '<a href="https://unsplash.com/@ca_creative" target="_blank">Фото @ca_creative</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Песто',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content: 'Сыр из молока животных.',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Молочная кислота (е270). Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'text',
        content:
          'Веганский песто: <a href="https://veganrussian.ru/tag/pesto" target="_blank">veganrussian.ru/tag/pesto</a>.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганский песто можно приготовить с нуля, используя базилик, орехи, сырные дрожжи и оливковое масло.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Сифудо',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Сливки из коровьего молока',
          'Майонез (см. <a href="https://veganrussian.ru/tag/mayo/" target="_blank">Майонез</a>).',
          'Рыба и морепродукты. Стружка тунца бонито, устричный соус, рыбный соус.',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганский вариант соуса Сифудо можно приготовить на основе растительных сливок или <a href="https://veganrussian.ru/tag/mayo/" target="_blank">веганского майонеза</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Спайси соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content: 'Икра летучей рыбы. Порой встречается, но не обязательно.',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Майонез. Спайси соус готовится на основе майонеза, который в традиционном общепите всегда невеганский (см. <a href="#mayo">Майонез</a>).',
          'Острый соус. Часто это шрирача, а у неё есть свои подводные камни (см. <a href="#shriracha">Шрирача</a>)',
        ],
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/sousy/soy-sauce.webp',
    caption:
      '<a href="https://unsplash.com/@ca_creative" target="_blank">Фото @ca_creative</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Соевый соус',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Рыбные продукты. Рыбный бульон, соус, хондаши, стружка тунца (бонито).',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганские соевые соусы: <a href="https://veganrussian.ru/tag/soy-sauces" target="_blank">veganrussian.ru/tag/soy-sauces</a>',
      },
      {
        type: 'text',
        content: 'Для усиления вкуса можно использовать водоросль комбу.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Терияки',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Устричный соус.', 'Рыбный соус.', 'Пчелиный мёд.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Вино. Речь не о составе, а о технологических процессах — оклейке и фильтрации. Для подробностей см. <a href="/guide/alkogol" target="_blank">Алкоголь</a>;.',
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
        ],
      },
      {
        type: 'subtitle',
        content: 'с вниманием:',
      },
      {
        type: 'text',
        content:
          'Бульон. Кафе, которые готовят Терияки соус самостоятельно, могут добавлять невеганский бульон.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганские соусы Терияки: <a href="https://veganrussian.ru/tag/teriyaki" target="_blank">veganrussian.ru/tag/teriyaki</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Унаги',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Пчелиный мёд.',
          'Краситель кармин (е120).',
          'Экстракт бонито (рыба).',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя. О них можно прочесть на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
          'Вино. Фильтрация/оклейка могут быть невеганскими. Для подробностей см. <a href="/guide/alkogol" target="_blank">Алкоголь</a>.',
          'Молочная кислота (е270). Нужно уточнить, не получена ли она ферментацией лактозы.',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганские унаги соусы можно найти на <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
      },
    ],
  },
];

//
//
// 1.
// 2.
// 3.
//
// 1.
// 2.
// 3.
//
//
export default sousy;
