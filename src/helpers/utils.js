const parseDataMovies = (resultArray) => {
  const array = [...resultArray];
  const parsedArray = array.map((item) => {
    return {
      title: item.title,
      poster: item.poster_path,
    };
  });
  return parsedArray;
};

const parseDataMoviesSec = (resultArray) => {
  const array = [...resultArray];
  const parsedArray = array.map((item) => {
    item.map((secItem) => {
      return {
        title: secItem.title,
        poster: secItem.poster_path,
      };
    });
  });
  return parsedArray;
};

export { parseDataMovies, parseDataMoviesSec };
