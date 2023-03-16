import { ArticleContent } from '~~/types';
const osnovnyeBliuda: ArticleContent[] = [
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Грибной суп',
      },
      {
        type: 'text',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Куриный или говяжий бульон.',
          'Молочные продукты. Например, сливки или коровье молоко.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content: 'Молочку можно заменить на кокосовые или овсяные сливки.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/osnovnye-bliuda/french-fries.webp',
    caption:
      '<a href="https://unsplash.com/@fermtz05" target="_blank">Фото @fermtz05</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Картофель фри / по-деревенски',
      },
      {
        type: 'subtitle',
        content: 'нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Соусы. Иногда соус нужно заказывать отдельно, а иногда он включён в блюдо. Проверьте, веганские ли ваши соусы См. <a href="https://veganrussian.ru/?query=%7B%22search%22%3A%7B%22isSearching%22%3Atrue%2C%22query%22%3A%22%D1%81%D0%BE%D1%83%D1%81%22%2C%22usePrioritySort%22%3Afalse%7D%7D" target="_blank">Соусы.</a>',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'В идеале подаваемый соус — веганский, но зачастую это не так. Если вы выберете для меню только веганские соусы, то они подойдут всем. Также хорошим тоном будет указать в меню, включен ли в блюдо соус.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Квашеная капуста',
      },
      {
        type: 'text',
        content: 'Сама по себе квашеная капуста — зачастую продукт веганский.',
      },
      {
        type: 'subtitle',
        content: 'нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Закваска. Нужно проверить, чтобы она не была выращена на молочных продуктах.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Выбирайте квашеную капусту с простым составом без закваски.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Кимчи капуста',
      },
      {
        type: 'text',
        content:
          'Капуста – растительный продукт, но в кимчи могут встречаться и животные продукты.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Рыбные продукты. Для усиление вкуса добавляют ферментированную рыбу, рыбный соус или экстракт.',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота (е270)</a>.',
      },
      {
        type: 'subtitle',
        content: 'совет:',
      },
      {
        type: 'text',
        content:
          'Вы можете обратиться к рецепту <a href="http://www.instagram.com/p/Bkku7wBnlvP" target="_blank">веган кимчи</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Кляр',
      },
      {
        type: 'text',
        content:
          'Кляр используется для приготовления закусок. Например, луковых колец или цветной капусты в кляре.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
            'Яйцо.',
            'Хондаши. Скорее встречается в азиатских блюдах и делается из рыбы.',
        ]
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Вместо яйца можно использовать газированную минеральную воду, аквафабу (отвар бобовых), <a href="https://veganrussian.ru/tag/for-baking/" target="_blank"> смеси для замены яиц </a>. Можно просто замешивать нежидкий кляр (консистенции густой сметаны), тогда заменители яиц не потребуются.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/osnovnye-bliuda/pasta.webp',
    caption:
      '<a href="https://unsplash.com/@mealontheplate" target="_blank">Фото @mealontheplate</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Лапша / макаронные изделия',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Куриные яйца. Их выдаёт ярко-желтый цвет.',
          'Чернила моллюсков. Любые чёрные макароны нужно проверить на наличие чернил.',
          'Молочные продукты. Иногда в составе макарон есть цельное коровье молоко или сухое обезжиренное коровье молоко. Порой в отваренные макароны добавляют сливочное масло.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота (е270)</a>. Встречается в удоне, упакованном в вакуумные пачки. Нужно уточнить, не получена ли она ферментацией лактозы.',
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
          'Мисо бульон — это, прежде всего, основа для мисо супов, но также он используется и в других паназиатских супах.',
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
          'Веганскую версию можно приготовить с мисо пастой, но на основе комбу даши (используя водоросли комбу для бульона).',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/osnovnye-bliuda/newokki.webp',
    caption:
      '<a href="https://unsplash.com/@micheile" target="_blank">Фото @micheile</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Ньокки',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота (е270)</a>. Всегда есть в покупных ньокки. Нужно проверить, чтобы кислота не была получена ферментацией лактозы.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Веганские ньокки можно посмотреть тут: <a href="https://veganrussian.ru" target="_blank">veganrussian.ru/tag/gnocci.</a>',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Овощной / грибной бульон',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Готовый покупной бульон. Может содержать коровье молоко, желатин, животный бульон, потенциально невеганские усилители вкуса (е627, е631, е635).',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Веганские бульоны можно найти на сайте <a href="https://veganrussian.ru/tag/bullion" target="_blank">veganrussian.ru/tag/bullion</a>.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Пюре картофельное',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Молочные продукты. Сливки, молоко, сливочное масло.',
          'Яичные продукты.',
        ],
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Веганское пюре можно приготовить с помощью веганских молочных аналогов.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/osnovnye-bliuda/rice.webp',
    caption:
      '<a href="https://unsplash.com/@pillepriske" target="_blank">Фото @pillepriske</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Рис отварной',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content:
          'Рыбный бульон. В азиатской кухне рис может отвариваться в рыбном бульоне.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Сделать рис вкуснее можно с помощью бульона на водорослях или с помощью добавки е621.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Сухари панко',
      },
      {
        type: 'text',
        content:
          'Сухари Панко используют для панировки роллов или других блюд паназиатской кухни. Сами сухари обычно веганские, но некоторые повара используют невеганский кляр (<a href="https://veganrussian.ru/tempura-oshi-blend/" target="_blank">см. Кляр и темпура кляр</a>) или яйцо (для облегчения панировки).',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'См. <a href="https://veganrussian.ru/tempura-oshi-blend/" target="_blank">Темпура кляр</a>, чтобы узнать, как сделать веганский кляр без яиц.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Темпура кляр',
      },
      {
        type: 'text',
        content:
          'Темпура кляр используется для приготовления горячих темпура роллов, овощей темпура, баклажанов и т. п. В готовом виде представляет собой объемный, воздушный и хрустящий кляр, обволакивающий продукт.',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'text',
        content: 'Яйцо. Может использоваться для кляра.',
      },
      {
        type: 'subtitle',
        content: 'Совет:',
      },
      {
        type: 'text',
        content:
          'Для того, чтобы приготовить хороший веганский темпура кляр, используйте темпура смесь или собственный микс из пшеничной и рисовой муки, соли и разрыхлителя. Разводите его ледяной или охлажденной газированной минеральной водой непосредственно перед использованием.',
      },
    ],
  },
  {
    type: 'image',
    content: '/images/guide/osnovnye-bliuda/udon.webp',
    caption:
      '<a href="https://unsplash.com/@norevisions" target="_blank">Фото @norevisions</a>. Источник <a href="https://unsplash.com" target="_blank">Unsplash.</a>',
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Удон',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          '<a href="https://veganrussian.ru/e270/" target="_blank">Молочная кислота (е270)</a>. Она может быть получена ферментацией молочных продуктов, но есть и иные способы.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Фалафель',
      },
      {
        type: 'subtitle',
        content: 'Однозначно невеганские ингредиенты:',
      },
      {
        type: 'list',
        content: [
          'Яйцо. Используется для скрепления или панировки, хотя оригинальный рецепт этого не предусматривает',
          'Сливочное масло',
          'Сыр из коровьего молока. Можно заменить на веганский',
          'Куриный бульон',
        ],
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'text',
        content:
          'Вкусо-ароматические смеси или соусы. Например, иногда добавляют Демигляс от Gallina Blanca, в составе которого есть свиной желатин и мясной экстракт.',
      },
    ],
  },
  {
    type: 'block',
    content: [
      {
        type: 'title',
        content: 'Чука',
      },

      {
        type: 'text',
        content:
          'Салат из водорослей чука – чаще всего веганская позиция, но есть нюансы. Кроме того, она практически всегда подаётся с <a href="https://veganrussian.ru/nut-sauce/" target="_blank">ореховым соусом.</a>',
      },
      {
        type: 'subtitle',
        content: 'Нужно проверить:',
      },
      {
        type: 'list',
        content: [
          'Усилители вкуса. Могут быть получены из животных, пробивайте номер ешки или название по сайту <a href="https://veganrussian.ru" target="_blank">veganrussian.ru.</a>',
          'Красители. Могут быть невеганскими, пробивайте номер ешки или название по сайту <a href="https://veganrussian.ru" target="_blank">veganrussian.ru.</a>',
          'Вино. Нужно проверять фильтрацию, см. <a href="https://veganrussian.ru/alcohol/" target="_blank">алкоголь.</a>',
        ],
      },
    ],
  },
];

export default osnovnyeBliuda;
