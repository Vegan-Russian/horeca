import { ArticleContent } from '~~/types';
const alkogol: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Алкоголь',
      },
      {
        type: 'text',
        content:
          'У алкоголя есть несколько подвохов. Один из них очевидный: что-то невеганское может содержаться в составе. Например, лактоза и мёд (часто в пиве), сливки (в ликерах), кармин (в красных напитках) и так далее.',
      },
      {
        type: 'text',
        content:
          'Второй подвох касается фильтрации и оклейки продукта. Для очистки жидкости могут использоваться рыбий клей, желатин, не веган ферменты, яичный белок, обезжиренное молоко. Конечно, есть и веганские методики отфильтровать или оклеить продукт.',
      },
      {
        type: 'text',
        content:
          'Чтобы не разбираться в этом самостоятельно, советуем вам просто обращаться к сайтам <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a> (преимущественно российский рынок) и <a href="https://www.barnivore.com/" target="_blank">www.barnivore.com</a> (данные по всему миру).',
      },
      {
        type: 'text',
        content:
          'Подробнее: <a href="https://veganrussian.ru/alcohol" target="_blank">veganrussian.ru/alcohol</a>',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/alkogol/cocktail.webp',
    caption:
      '<a href="https://unsplash.com/@olenkasergienko" target="_blank">Фото @olenkasergienko</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
];

export default alkogol;
