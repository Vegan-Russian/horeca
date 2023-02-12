import { Article } from '~~/types';
import kakZamenitZhivotnyeProdukty from './topicsContent/kakZamenitZhivotnyeProdukty';

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
    name: 'Закуски',
    images: {
      normal: '/images/guide/main/zakuski.webp',
      small: '/images/guide/main/zakuski-sm.webp',
    },
  },
  {
    id: 'zavtraki',
    name: 'Завтраки',
    images: {
      normal: '/images/guide/main/zavtraki.webp',
      small: '/images/guide/main/zavtraki-sm.webp',
    },
  },
  {
    id: 'osnovnye-bliuda',
    name: 'Основные блюда',
    images: {
      normal: '/images/guide/main/osnovnye-bliuda.webp',
      small: '/images/guide/main/osnovnye-bliuda-sm.webp',
    },
  },
  {
    id: 'deserty',
    name: 'Десерты',
    images: {
      normal: '/images/guide/main/deserty.webp',
      small: '/images/guide/main/deserty-sm.webp',
    },
  },
  {
    id: 'vypechka',
    name: 'Выпечка',
    images: {
      normal: '/images/guide/main/vypechka.webp',
      small: '/images/guide/main/vypechka-sm.webp',
    },
  },
  {
    id: 'pripravy',
    name: 'Приправы',
    images: {
      normal: '/images/guide/main/pripravy.webp',
      small: '/images/guide/main/pripravy-sm.webp',
    },
  },
  {
    id: 'sousy',
    name: 'Соусы',
    images: {
      normal: '/images/guide/main/sousy.webp',
      small: '/images/guide/main/sousy-sm.webp',
    },
  },
  {
    id: 'komplimenty',
    name: 'Комплименты',
    images: {
      normal: '/images/guide/main/komplimenty.webp',
      small: '/images/guide/main/komplimenty-sm.webp',
    },
  },
  {
    id: 'alkogol',
    name: 'Алкоголь',
    images: {
      normal: '/images/guide/main/alkogol.webp',
      small: '/images/guide/main/alkogol-sm.webp',
    },
  },
];

export const terms = [
  {
    id: 'rastitelnoe-moloko',
    term: 'Растительное молоко',
    def: 'Это немолоко, сделанный из растительных ингредиентов',
  },
  {
    id: 'rastitelnoe-moloko-2',
    term: 'Растительное молоко 2',
    def: 'Это немолоко, сделанный из растительных ингредиентов',
  },
  {
    id: 'rastitelnoe-moloko-3',
    term: 'Растительное молоко 3',
    def: 'Это немолоко, сделанный из растительных ингредиентов',
  },
  {
    id: 'rastitelnoe-moloko-4',
    term: 'Растительное молоко 4',
    def: 'Это немолоко, сделанный из растительных ингредиентов',
  },
  {
    id: 'rastitelnoe-moloko-5',
    term: 'Растительное молоко 5',
    def: 'Это немолоко, сделанный из растительных ингредиентов',
  },
];
