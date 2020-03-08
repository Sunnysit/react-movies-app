import axios from "axios";
import { BASE_URL, MOVIE_API } from "../config/api_config";

export const getMovies = async category => {
  const result = await axios
    .get(`${BASE_URL}/movie/${category}?api_key=${MOVIE_API}`)
    .catch(err => {
      return err;
    });

  return result;
};

export const getTvShows = async category => {
  const result = await axios
    .get(`${BASE_URL}/tv/${category}?api_key=${MOVIE_API}`)
    .catch(err => {
      return err;
    });

  return result;
};

export const searchMovie = async (name,type) => {
  const result = await axios
  .get(`${BASE_URL}/search/${type}?query=${name}&api_key=${MOVIE_API}`)
  .catch(err => {
    return err;
  });

return result;
}