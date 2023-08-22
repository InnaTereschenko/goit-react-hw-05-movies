import axios from 'axios';
 
const API_KEY = 'df6fbc2cd946f27f995c350c8f6a0424';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    
  },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/week`, params);
    console.log(response.data.results);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(`/movie/${movieId}`, params);
    console.log(response.data);
  return response.data;
};

export const handleSearch = async movieTitle => {
    const response = await axios.get(`/search/movie?query=${movieTitle}`, params);
    console.log(response.data.results);
  return response.data.results;
};

export const fetchMovieCast = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?`, params);
    console.log(response.data.cast);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};

// https://api.themoviedb.org/3/movie/157336?api_key=df6fbc2cd946f27f995c350c8f6a0424