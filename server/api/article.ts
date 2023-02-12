import { Article } from '~~/types';
import { articles } from '~~/utils/data';

export default defineEventHandler((event) => {
  const { id } = getQuery(event);

  if (!id) {
    return {
      response: 'Parameter id must be specified',
      success: false,
    };
  }

  if (typeof id !== 'string') {
    return {
      response: 'The id parameter must be a string',
      success: false,
    };
  }

  const option: Partial<Article> | undefined = articles.find(
    (item) => item.id === id,
  );

  if (!option) {
    return {
      response: 'There is no article with the provided ID',
      success: false,
    };
  }

  const { images, ...narrowedOption } = option;

  return {
    response: narrowedOption,
    success: true,
  };
});
