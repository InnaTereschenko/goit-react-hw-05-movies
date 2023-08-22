import React, { useEffect, useState } from 'react';
import { Title } from './Home.styles';
import MovieList from 'components/Movie/MovieList';
import { fetchTrendingMovies } from 'services/themoviedb_api';

const Home = () => {
      const [trendingMovies, setTrendingMovies] = useState([]);

    // отримання списку популярних фільмів за тиждень
    useEffect(() => {
           const fetchData = async () => {
      try {
          const movies = await fetchTrendingMovies(); 
          
        // оновлюємо список фільмів
          setTrendingMovies(movies); 
          
      } catch (error) {
        console.error(error);
      }
        };
        fetchData();

  }, [])

    return <div>
        <Title>Trending movies for a week</Title>
      {trendingMovies.length > 0 && <MovieList films={trendingMovies } />}
    </div>;
}

export default Home;