import { ArticleContent } from '~~/types';

const pripravy: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Васаби',
      },
      {
        type: 'text',
        content:
          'Васаби — постоянный спутник популярных роллов и суши. Чаще всего его состав веган, но есть исключения.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Молочные продукты. Лактоза или сухое молоко.',
          'Яичный белок.',
          'Мёд.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Примеры не веган и веган васаби есть на сайте <a href="https://veganrussian.ru" target="_blank">veganrussian.ru</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Глутамат натрия',
      },
      {
        type: 'text',
        content:
          'Глутамат натрия — популярная и при этом всегда веганская добавка. Её можно смело использовать в веганских блюдах. А вот <a href="https://veganrussian.ru/e631/" target="_blank">инозинат натрия</a> или <a href="https://veganrussian.ru/e627/" target="_blank">гуанилат натрия</a> могут быть изготовлены как из животных продуктов, так и нет, поэтому происхождение этих добавок всегда нужно проверять.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/pripravy/seasonings.webp',
    caption:
      '<a href="https://unsplash.com/@32steps" target="_blank">Фото @32steps</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Карри паста / Том Ям паста',
      },
      {
        type: 'text',
        content:
          'Карри пасту можно встретить в блюдах карри, иногда на её основе готовят соусы. Из пасты Том Ям в основном делают суп.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content: 'Морепродукты. Креветочная паста или рыбный соус.',
      },
      {
        type: 'text',
        content: 'Веганские варианты можно найти у брендов Aroy-D и Hom-D. ',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Мисо бульон',
      },
      {
        type: 'text',
        content:
          'Мисо бульон — это прежде всего основа для мисо супов, но также он используется и в других паназиатских супах.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Рыбные продукты. Хондаши/хондаси (обычно гранулированный рыбный бульон), стружка тунца бонито.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Веганскую версию мисо бульона можно приготовить с мисо пастой, но на основе комбу даши (используя водоросли комбу для бульона) вместо хондаши и без использования стружки тунца.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/pripravy/mushrooms.webp',
    caption:
      '<a href="https://unsplash.com/@sigmund" target="_blank">Фото @sigmund</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Овощной / грибной бульон',
      },
      {
        type: 'text',
        content:
          'Бульон может быть как и из сухой смеси, так и приготавливаемый с нуля.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Коровье молоко. Чаще в сухих смесях.',
          'Желатин. Также в сухих смесях.',
          'Бульон из животных (например, бульон из говядины). Встречается и там, и там.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Усилители вкуса. Чаще всего встречаются е627, е631 и е635, чьё происхождение (животное или нет) нужно проверять у производителя.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Паста Кочудян',
      },
      {
        type: 'text',
        content:
          'Традиционно Кочудян является веганским продуктом: его получают ферментацией соевых бобов, риса и перца чили. Но некоторые вариации могут содержать животные продукты.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Мёд.',
          'Морепродукты/рыба. Если на основе пасты Кочудян готовят заправку, соус или маринад, в процессе могут добавить животные компоненты. При этом заправка/соус/маринад имеет название Кочудян, будто речь о пасте.',
        ],
      },
    ],
  },
];

export default pripravy;
