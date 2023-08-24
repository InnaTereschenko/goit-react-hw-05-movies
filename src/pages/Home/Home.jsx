import React, { useEffect, useState } from 'react';
import { Title } from './Home.styles';
import MovieList from 'components/Movie/MovieList';
import { fetchTrendingMovies } from 'services/themoviedb_api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // отримання списку популярних фільмів за тиждень
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const movies = await fetchTrendingMovies();

        // оновлюємо список фільмів
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title>Trending movies for a week</Title>
      {loading ? (
        <Loader />
      ) : (
        trendingMovies.length > 0 && <MovieList films={trendingMovies} />
      )}
    </div>
  );
};

export default Home;
