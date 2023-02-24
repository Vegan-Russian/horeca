import { ArticleContent } from '~~/types';
const zavtraki: ArticleContent[] = [
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Готовые сухие завтраки' },
      {
        type: 'text',
        content:
          'Хорошее решение для хостела — выставлять веганские завтраки и растительное молоко к ним. ',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты: ',
      },
      {
        type: 'list',
        content: ['Мёд.', 'Коровье молоко.'],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить: ',
      },
      {
        type: 'text',
        content:
          'Витаминный премикс. Многие витамины могут быть получены из животных.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Если вы хотите пересыпать завтрак в красивый контейнер, то не забудьте где-то оставить название или состав продукта. ',
      },
      {
        type: 'text',
        content:
          'Гарантированно веганские завтраки: <a href="https://veganrussian.ru/tag/cereals" target="_blank">veganrussian.ru/tag/cereals</a>.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/zavtraki/peanut-butter.webp',
    caption:
      '<a href="https://unsplash.com/@towfiqu999999" target="_blank">Фото @towfiqu999999</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Арахисовая паста',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Молочные продукты. В составе арахисовой пасты может быть молочный белок.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Веганские арахисовые пасты есть на сайте <a href="https://veganrussian.ru" target="_blank">https://veganrussian.ru</a>',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Каша быстрого приготовления',
      },
      {
        type: 'text',
        content:
          'Это может быть как утренняя овсяная кашка, так и более серьёзная гречневая каша.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Мёд.',
          'Молочные продукты. Молочная сыворотка, сухое цельное молоко.',
          'Мясные продукты. Сушеная говядина, мясо варёное сублимированное.',
          'Молочный белок. Встречается в протеиновых кашах, но есть каши и с растительным белком.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Сливки сухие растительные. Могут содержать лактозу или казеин, нужно уточнять полный состав.',
          'Витаминный премикс. Уточните происхождение.',
          'Усилители вкуса. Проверьте их по сайту VR.',
        ],
      },
      {
        type: 'text',
        content: 'С вниманием:',
      },
      {
        type: 'text',
        content:
          'Ароматизатор. Сливочный вкус может содержать молоко в составе, а мясной – ещё и яйца или усилители вкуса.',
      },
      {
        type: 'text',
        content:
          'Проще всего ориентироваться на те каши, которые есть на сайте <a href="https://veganrussian.ru" target="_blank">VR</a>. Среди них даже варианты с веганским сухим молоком: Быстров и Мистраль.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Тостовый хлеб',
      },
      {
        type: 'text',
        content:
          'См. <a href="https://www.veganhoreca.ru/term?search=%D0%A5%D0%BB%D0%B5%D0%B1" target="_blank">Хлеб</a>',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Покупайте хлеб от Harry’s — он доступный и веганский. Ссылка: <a href="https://veganrussian.ru/american-sandwich-harrys/" target="_blank">https://veganrussian.ru/american-sandwich-harrys/</a>',
      },
    ],
  },
];

export default zavtraki;
