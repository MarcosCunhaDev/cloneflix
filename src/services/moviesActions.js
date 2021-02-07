import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from "./api.js";
import axios from "axios";

export async function SearchMovies(value) {
  const query = value;
  const url = `${SEARCH_BASE_URL}${query}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}
