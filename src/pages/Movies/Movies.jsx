import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/themoviedb_api';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/Movie/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const movieTitle = searchParams.get('query') || '';

  const updateQueryString = query => {
    const movieValue = query !== '' && { query };
    setSearchParams(movieValue);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieTitle);

        setFilms(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieTitle]);

  return (
    <div>
      <Searchbar value={movieTitle} onSubmit={updateQueryString} />

      {loading ? (
        <Loader />
      ) : films.length === 0 && movieTitle ? (
        <h2>🔎 Nothing found</h2>
      ) : (
        <MovieList films={films} />
      )}
    </div>
  );
};

export default Movies;
