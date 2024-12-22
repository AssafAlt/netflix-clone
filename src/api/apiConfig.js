import axios from "axios";

export const movieApi = axios.create({
  baseURL: process.env.REACT_APP_IMDB_API,
  params: { api_key: process.env.REACT_APP_IMDB_API_KEY, language: "en-US" },
});
