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

export { parseDataMovies };
