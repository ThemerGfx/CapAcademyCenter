export const searchItem = (text) => {
  return {
    type: 'SEARCH_MOVIE',
    payload: text
  };
};