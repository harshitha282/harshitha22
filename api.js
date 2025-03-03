import axios from "axios";

// Set up the OMDB API base URL and your API key
const API_KEY = "b9feda3a";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      i: id,
      apiKey: API_KEY,
    },
  });
  return response.data;
};
