import {
  SEARCH_BASE_URL,
  TRENDING_URL,
  GENRES_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from "./api.js";
import axios from "axios";

export async function getSearchedMovies(value, setData, setLoadingData) {
  const query = value;
  const url = `${SEARCH_BASE_URL}${query}`;
  setLoadingData(true);

  try {
    const response = await axios.get(url);
    const data = await response.data.results;
    setLoadingData(false);
    setData(data);
  } catch (err) {
    setLoadingData(false);
    console.error(err);
  }
}

export async function getTrendingMovies(setData) {
  const url = TRENDING_URL;

  try {
    const response = await axios.get(url);
    const data = await response.data.results;
    setData(data);
  } catch (err) {
    console.error(err);
  }
}

export async function getMoviesGenres(setData) {
  const url = GENRES_URL;

  try {
    const response = await axios.get(url);
    const data = await response.data.genres;
    setData(data);
  } catch (err) {
    console.error(err);
  }
}

export async function getMoviesByGenre(genreId) {
  const url = `${POPULAR_BASE_URL}`;
  try {
    const response = await axios.get(url);
    const data = await response.data.results;
    return data;
  } catch (err) {
    console.error(err);
  }
}
