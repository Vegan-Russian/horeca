import { ArticleContent } from '~~/types';
const zakuski: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Оливки / маслины',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Рыба и морепродукты. Внутри оливки может быть кусочек рыбы или креветки.',
          'Сыр. Также внутри оливки может быть сыр из коровьего молока.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Молочная кислота е270. Нужно уточнить, не получена ли она из ферментации лактозы.',
          'Усилители вкуса. Пробейте их номер по сайту VR, чтобы узнать, нужно ли их проверять и как.',
        ],
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Веганские оливки и маслины можно найти на сайте <a href="https://veganrussian.ru" target="_blank">veganrussian.ru.</a>',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Хрустящие баклажаны',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Яйцо. Используется для панировки.',
          'Рыбный и устричный соус. Может быть в основе соуса.',
          'Куриный или говяжий бульон. Также в соусе.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Яйцо в панировке можно исключить и использовать только кукурузный крахмал. В качестве соусов можно использовать веганский сладкий чили или унаги.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/zakuski/hummus.webp',
    imageTitle: 'Фото хумуса',
    caption:
      '<a href="https://unsplash.com/@kriztheman" target="_blank">Фото @towfiqu999999</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Хумус',
      },
      {
        type: 'text',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Молочные продукты. В авторских версиях хумуса встречаются кефир, сметана и сливочное масло.',
          'Куриный или говяжий бульон.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Тахини. В авторских вариантах хумуса тахини может содержать сметану.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Классический хумус не содержит животных компонентов, поэтому можно ориентироваться на традиционные версии рецепта.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Вяленые томаты',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота е270</a>. Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Выбирайте самые простые томаты без е270, можно с лимонной кислотой е330.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Маринованные огурцы',
      },
      {
        type: 'text',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Мёд. Обычно используют сахар, но для расширения линейки могут добавить и версию с мёдом.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
            '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота е270</a>. Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
            'Выбирайте маринованные огурцы с максимально простым составом.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Соленые огурцы огурцы',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
            '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота е270</a>. Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
            'Выбирайте соленые огурцы с максимально простым составом.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Каперсы',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
            '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота е270</a>. Нужно уточнить, не получена ли она ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
            'Выбирайте каперсы с максимально простым составом.',
      },
    ],
  },
];

export default zakuski;
