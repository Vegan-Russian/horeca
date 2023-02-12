export type ArticleContent = {
  type: 'block' | 'image';
  content:
    | {
        type: 'title' | 'text' | 'link' | 'list' | 'subtitle';
        content: string | string[];
        link?: string;
      }[]
    | string;
  imageTitle?: string;
};

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
