import { ArticleContent } from '~~/types';

const deserty: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'батончики',
      },
      {
        type: 'text',
        content:
          'Простой вариант добавить перекус или десерт в кофейню — поставить на стойку батончики. Если они будут веганскими, то подойдут любому посетителю. Веганские варианты можно найти на сайте <a href="https://veganrussian.ru/" target="_blank">veganrussian.ru</a> или в разделе “Поставщики”.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/deserty/jam.webp',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Джем',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content: 'Желатин',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Красители. Пробейте их названия по сайту VR, чтобы понять, подходят ли они веган_ам.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content: 'Веганский джем есть на сайте.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Сиропы и топпинги',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Мёд', 'Краситель кармин е120'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Ароматизаторы. Если у них молочные, десертные профили, или же вкус лесной орех.',
          'Красители. Могут быть невеганскими или требующими проверки, пробивайте номер ешки или название по сайту veganrussian.ru.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Совет',
      },
      {
        type: 'text',
        content: 'На сайте VR есть проверенные сиропы и топпинги.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Сыроедческие десерты (RAW)',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: ['Мёд. Можно заменить сиропом топинамбура.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Ошибки в названии продукта. Продавцы могут называть десерты с мёдом веганскими.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/deserty/chia-pudding.webp',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Чиа-пуддинг',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Коровье молоко. Можно использовать только проверенное растительное.',
          'Крем-чиз или сливочный сыр. Из коровьего молока — нет, <a href=" https://veganrussian.ru/tag/cream-cheese/" target="_blank">растительные чизы можно.</a>',
          'Желатин. Загущать фруктовый слой нужно пектином или агар-агаром.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Кокосовые сливки. В них могут быть потенциально невеганские стабилизаторы. Проще всего брать веганские Aroy-D, которые есть везде.',
      },
    ],
  },
];

export default deserty;
