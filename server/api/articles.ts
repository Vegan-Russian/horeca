import { articles } from '~~/utils/data';

export default defineEventHandler(() => {
  return articles.map(({ id, name, images }) => ({ id, name, images }));
});
