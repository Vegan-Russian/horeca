import Fuze from 'fuse.js';
import { terms } from '~~/utils/data';

export default defineEventHandler((event) => {
  const { search } = getQuery(event);

  if (!search) {
    return {
      error: 'Parameter search must be specified',
      success: false,
    };
  }
  if (typeof search !== 'string') {
    return {
      error: 'The search parameter must be a string',
      success: false,
    };
  }

  const variants = new Fuze(terms, {
    includeScore: true,
    keys: ['term', 'def'],
    threshold: 0.55,
  })
    .search(search)
    .map(({ item }) => item);

  return {
    response: variants,
    success: true,
  };
});
