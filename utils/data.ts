import { Article, TextTypeArticleContent } from '~~/types';
import alkogol from './topicsContent/alkogol';
import deserty from './topicsContent/deserty';
import kakZamenitZhivotnyeProdukty from './topicsContent/kakZamenitZhivotnyeProdukty';
import komplimenty from './topicsContent/komplimenty';
import osnovnyeBliuda from './topicsContent/osnovnyeBliuda';
import pripravy from './topicsContent/pripravy';
import sousy from './topicsContent/sousy';
import vypechka from './topicsContent/vypechka';
import zakuski from './topicsContent/zakuski';
import zavtraki from './topicsContent/zavtraki';

export const articles: Article[] = [
  {
    id: 'kak-zamenit-zhivotnye-produkty',
    name: 'Как заменить <br /> животные продукты',
    description:
      'Вы узнаете, чем можно заменить мясо, рыбу, курицу, молоко, сливки, сыр, пробиотики, сливочное масло, яйца, мед и желатин.',
    content: kakZamenitZhivotnyeProdukty,
    images: {
      normal: '/images/guide/main/kak-zamenit-zhivotnye-produkty.webp',
      small: '/images/guide/main/kak-zamenit-zhivotnye-produkty-sm.webp',
    },
  },
  {
    id: 'zakuski',
    description:
      'Вы узнаете больше об ингредентах в блюдах, как оливки, маслины, хрустящие баклажаны и хумус. Вяленые томаты.',
    name: 'Закуски',
    content: zakuski,
    images: {
      normal: '/images/guide/main/zakuski.webp',
      small: '/images/guide/main/zakuski-sm.webp',
    },
  },
  {
    id: 'zavtraki',
    description:
      'Вы узнаете больше об особенностях в блюдах, как арахисовая паста, готовые сухие завтраки, каша быстрого приготовления, тостовый хлеб.',
    name: 'Завтраки',
    content: zavtraki,
    images: {
      normal: '/images/guide/main/zavtraki.webp',
      small: '/images/guide/main/zavtraki-sm.webp',
    },
  },
  {
    id: 'osnovnye-bliuda',
    name: 'Основные блюда',
    description:
      'Вы узнаете больше о таких блюдах, как грибной суп, картофель фри, по-деревенски, квашеная капуста, кимчи капуста, кляр, лапша, макаронные изделия, мисо бульон, ньокки, овощной, грибной бульон, пюре картофельное, рис отварной, сухари панко, темпура кляр, удон, фалафель, чука.',
    content: osnovnyeBliuda,
    images: {
      normal: '/images/guide/main/osnovnye-bliuda.webp',
      small: '/images/guide/main/osnovnye-bliuda-sm.webp',
    },
  },
  {
    id: 'deserty',
    name: 'Десерты',
    description:
      'Вы узнаете об ингредиентах, продуктах и блюдах, как батончики, джем, сиропы и топпинги, сыроедческие десерты (RAW), чиа-пуддинг.',
    content: deserty,
    images: {
      normal: '/images/guide/main/deserty.webp',
      small: '/images/guide/main/deserty-sm.webp',
    },
  },
  {
    id: 'vypechka',
    name: 'Выпечка',
    description:
      'Вы узнаете больше о булочках для бургеров и хот-догов, хлебе, лаваше; пите, тортилье, о тесте для пиццы и маргарине, спреде.',
    content: vypechka,
    images: {
      normal: '/images/guide/main/vypechka.webp',
      small: '/images/guide/main/vypechka-sm.webp',
    },
  },
  {
    id: 'pripravy',
    content: pripravy,
    description:
      'Вы узнаете больше о васаби, глутамате натрия, пасте карри, пасте том ям, о мисо бульоне, овощном и грибном бульоне, пасте кочудян.',
    name: 'Приправы',
    images: {
      normal: '/images/guide/main/pripravy.webp',
      small: '/images/guide/main/pripravy-sm.webp',
    },
  },
  {
    id: 'sousy',
    name: 'Соусы',
    description:
      'Вы узнаете о соусах, как бальзамический уксус, барбекю (BBQ) соус, горчица, горчичный соус, гуакамоле, кетчуп, томатный соус, карри соус, кимчи соус, майонез, ореховый соус (гомадаре), песто, понзу, ремулад, сифудо, соевый соус, спайси соус, тахини (кунжутный соус), терияки, унаги, хрен, шрирача.',
    content: sousy,
    images: {
      normal: '/images/guide/main/sousy.webp',
      small: '/images/guide/main/sousy-sm.webp',
    },
  },
  {
    id: 'komplimenty',
    name: 'Комплименты',
    description: 'Больше о вариантах комплиментов от кухни.',
    content: komplimenty,
    images: {
      normal: '/images/guide/main/komplimenty.webp',
      small: '/images/guide/main/komplimenty-sm.webp',
    },
  },
  {
    id: 'alkogol',
    description: 'Вы узнаете о подвохах алкогольной продукции.',
    content: alkogol,
    name: 'Алкоголь',
    images: {
      normal: '/images/guide/main/alkogol.webp',
      small: '/images/guide/main/alkogol-sm.webp',
    },
  },
];

export const terms = articles.reduce<
  { content: TextTypeArticleContent['content'] }[]
>((acc, article) => {
  article.content?.forEach((item) => {
    if (item.type === 'image') return;
    acc.push({ content: item.content });
  });

  return acc;
}, []);
