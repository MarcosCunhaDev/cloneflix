import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from "../../services/api";
import axios from "axios";

export async function getSearchedMovies(value, setData) {
  const query = value;
  const url = `${SEARCH_BASE_URL}${query}`;

  try {
    const response = await axios.get(url);
    const data = await response.data.results;
    setData(data);
  } catch (err) {
    console.error(err);
  }
}
