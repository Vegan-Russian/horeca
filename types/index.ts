export type TextTypeArticleContent = {
  id?: string;
  type: 'block';
  content: {
    type: 'title' | 'text' | 'link' | 'list' | 'subtitle';
    content: string | string[];
    link?: string;
  }[];
};

export type ImageTypeArticleContent = {
  type: 'image';
  content: string;
  imageTitle?: string;
  caption?: string;
};

export type ArticleContent = TextTypeArticleContent | ImageTypeArticleContent;

export type Article = {
  id: string;
  name: string;
  description?: string;
  content?: ArticleContent[];
  images: {
    normal: string;
    small: string;
  };
};

export type SuggestOption = { value: string; title: string };
