import { movieApi } from "./apiConfig";
import { extractErrorMessage } from "../utils/axiosUtils";

export const fetchMoviesApi = async (endpoint, additionalParams = {}) => {
  try {
    const response = await movieApi.get(endpoint, {
      params: additionalParams,
    });
    return response.data.results;
  } catch (error) {
    throw new Error(extractErrorMessage(error));
  }
};
