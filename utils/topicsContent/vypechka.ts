import { ArticleContent } from '~~/types';
const vypechka: ArticleContent[] = [
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Булочки для бургеров/хотдогов' },
      {
        type: 'text',
        content:
          'См. <a href="https://www.veganhoreca.ru/term?search=%D0%A5%D0%BB%D0%B5%D0%B1" target="_blank">Хлеб</a>',
      },
      {
        type: 'text',
        content:
          'Веганские булочки: <a href="https://veganrussian.ru/tag/buns" target="_blank">veganrussian.ru/tag/buns.</a>',
      },
    ],
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Посыпка' },
      { type: 'subtitle', content: 'Однозначно невеганские ингредиенты:' },
      {
        type: 'list',
        content: [
          'Шеллак (е904). Глазировать, получаемый из жуков.',
          'Пчелинный воск (е901). Глазирователь, получаемый от пчёл.',
          'Красители. Часто встречается кармин (е120) из жуков.',
        ],
      },
      { type: 'subtitle', content: 'Совет:' },
      {
        type: 'text',
        content:
          'Вы можете найти уже проверенные варианты посыпок на сайте <a href="https://veganrussian.ru" target="blank">veganrussian.ru</a>.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/vypechka/bread.webp',
    caption:
      '<a href="https://unsplash.com/@debbiewidjaja" target="_blank">Фото @debbiewidjaja</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Хлеб' },
      { type: 'subtitle', content: 'Однозначно невеганские ингредиенты:' },
      {
        type: 'list',
        content: [
          'Яйца куриц: яйцо, яйцо куриное, меланж, яичный меланж, продукты яичные.',
          'Молочные продукты: молоко, молочная сыворотка, подсырной продукт, сыворотка, сметана, творог, молоко сухое, молоко сухое цельное, сыворотка сухая молочная, сливочное масло.',
          'Мёд.',
          'Йодказеин. Добавка для обогощения йодом, на основе молочного белка.',
        ],
      },
      { type: 'subtitle', content: 'С вниманием:' },
      {
        type: 'text',
        content:
          'Некоторую выпечку и хлеб смазывают яичным белком для блеска. Веганам такой хлеб не походит.',
      },
      { type: 'subtitle', content: 'Нужно проверить:' },
      {
        type: 'list',
        content: [
          '<a href="https://veganrussian.ru/e160a/" target="blank">Бета-каротин, каротины (е160а)</a>. Краситель обычно входит в состав маргарина, который используют в выпечке.',
          '<a href="https://veganrussian.ru/e270/" target="blank">Молочная кислота (е270)</a>. Регулятор кислотности.',
          '<a href="https://veganrussian.ru/304/" target="blank">Аскорбилпальмитат (е304)</a>. Эмульгатор.',
          '<a href="https://veganrussian.ru/322/" target="blank">Лецитин (е322)</a>. Эмульгатор.',
          '<a href="https://veganrussian.ru/481/" target="blank">Стеароил-2-лактилат натрия (е481)</a>. Эмульгатор.',
          '<a href="https://veganrussian.ru/flavorings/" target="blank">Ароматизатор сливки, молоко</a>. Может содержать коровье молоко.',
          'Закваска, лактобактерии. В исключительных случаях могут использовать молочную закваску. Есть смысл уточнить, если не указано в составе. Например, если написано «пшеничная закваска» или «ржаная закваска» – всё в порядке.',
          'Ферменты, энзимы. В хлебопечении это, чаще всего, бактериальные или грибные ферменты. Их питательные среды нуждаются в проверке. Примеры и синонимы: амилаза, липаза, ксиланаза, гемицеллюлоза ферментные препараты микробного происхождения, фермент микробного происхождения, улучшитель хлебопекарный (это может быть безобидная аскорбиновая кислота или фермент, нужно уточнить).',
        ],
      },
      {
        type: 'subtitle',
        content: 'Советы:',
      },
      {
        type: 'list',
        content: [
          'Сдобу можно приготовить полностью из веганских продуктов, используя сухой веганский заменитель яиц (например, <a href="https://veganrussian.ru/egg-alternative-newa-nutrinion/" target="blank">Не яйцо</a>), растительное молоко, <a href="https://veganrussian.ru/tag/butter/" target="blank">веганский спред</a> вместо сливочного масла, либо веганское «сливочное» масло, <a href="https://veganrussian.ru/recipe-of-vega-butter/" target="blank">приготовленное самостоятельно</a>.',
          'Блестящую золотистую корочку можно сделать с использованием крепко заваренного чая с сахаром/растительного молока/растительного спреда/заваренного чайного пакетика (просто смазать верхушку).',
        ],
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/vypechka/lavash.webp',
    caption:
      '<a href="https://unsplash.com/@micheile" target="_blank">Фото @micheile</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Лаваш' },
      {
        type: 'text',
        content:
          'Традиционный лаваш — абсолютно веганский продукт. Проблемы появляются при модификации состава.',
      },
      { type: 'subtitle', content: 'Однозначно невеганские ингредиенты:' },
      {
        type: 'list',
        content: [
          'Молочные продукты. Это может быть сыр (в сырном лаваше) или кефир.',
          'Яичные продукты. Сами яйца и меланж.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'См. <a href="https://www.veganhoreca.ru/term?search=%D0%A1%D0%BF%D1%80%D0%B5%D0%B4+/+%D0%BC%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D0%BD" target="blank">Маргарин</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Пита' },
      {
        type: 'text',
        content:
          'Как правило, пита имеет простейший веганский состав, но бывают и изменённые версии. ',
      },
      { type: 'subtitle', content: 'С вниманием:' },
      {
        type: 'text',
        content:
          'Проследите, чтобы в состав питы не было добавлено молоко, и лепешка не смазывалась сливочным маслом или куриным яйцом.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Тортилья' },
      {
        type: 'text',
        content:
          'См. <a href="https://www.veganhoreca.ru/term?search=%D0%A5%D0%BB%D0%B5%D0%B1" target="blank">Хлеб</a>. Обращайте внимание на ферменты, молоко и пищевые добавки.',
      },
      { type: 'subtitle', content: 'Совет:' },
      {
        type: 'text',
        content:
          'Если вы не можете найти подходящие тортильи, то просто используйте лаваш.',
      },
      {
        type: 'text',
        content:
          'Проверенные веганские тортильи: <a href="https://veganrussian.ru/tag/tortilla" target="blank">veganrussian.ru/tag/tortilla</a>.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/vypechka/dough.webp',
    caption:
      '<a href="https://unsplash.com/@kiboka" target="_blank">Фото @kiboka</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Тесто для пиццы' },
      { type: 'subtitle', content: 'Однозначно невеганские ингредиенты:' },
      {
        type: 'list',
        content: [
          'Яичные продукты. Яйца, яичный майонез.',
          'Молочные продукты. Молоко, кефир.',
          'Чернила каракатицы (в чёрном тесте).',
        ],
      },
      { type: 'subtitle', content: 'Нужно проверить:' },
      {
        type: 'text',
        content:
          'См. <a href="https://www.veganhoreca.ru/term?search=%D0%A1%D0%BF%D1%80%D0%B5%D0%B4+/+%D0%BC%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D0%BD" target="blank">Маргарин</a>.',
      },
      {
        type: 'text',
        content:
          'Зачастую веганский вариант теста предлагают неаполитанские пиццерии. Тесто в других видах пиццерий и просто пицца-опции в заведениях могут с бóльшей вероятностью содержать животные ингредиенты.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      { type: 'title', content: 'Спред / маргарин' },
      { type: 'subtitle', content: 'Однозначно невеганские ингредиенты:' },
      { type: 'text', content: 'Молочные продукты. Сливочное масло, пахта.' },
      { type: 'subtitle', content: 'Нужно проверить:' },
      {
        type: 'list',
        content: [
          'Красители. Если это бета-каротин или лютеин, нужно удостовериться, что их носитель – не желатин.',

          'Эмульгаторы. Возьмите за правило искать непонятные ингредиенты, так вы переведете их в разряд ешек. А Е-номера можно проверить на <a href="https://veganrussian.ru" target="blank">veganrussian.ru</a> или в приложениях VegSafe/Vegan Additives.',

          'Ароматизаторы. В данном случае могут содержать молочные продукты.',

          'Витамины. Например, часто в спредах можно найти витамин D, который может быть получен из шерсти овец (не веган) или из лишайника (веган).',

          'Лецитин. Может быть соевый и подсолнечный, но также яичный.',
        ],
      },
      { type: 'subtitle', content: 'Совет:' },
      {
        type: 'text',
        content:
          'Обратите внимание на рецепт <a href="https://www.instagram.com/p/COgFxPAsNPa/" target="blank">веганского «сливочного» масла из растительного молока</a>.',
      },
    ],
  },
];

export default vypechka;
