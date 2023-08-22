import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/themoviedb_api';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/Movie/MovieList';

import { InfinitySpin } from 'react-loader-spinner';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [movieTitle, setMovieTitle] = useState(searchParams.get('query') || '');
  const [loading, setLoading] = useState(false);

  const movieTitle = searchParams.get('query') || '';

  const updateQueryString = query => {
    const movieValue = query !== '' && { query };
    setSearchParams(movieValue);

    // evt => {
    //     const movieValue = evt.target.value;
    //     if (movieValue === '') {
    //          setSearchParams({});
    //     }
    //   setFilms([]);
    //     setSearchParams({ query: movieValue });
    //     setMovieTitle(movieValue);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieTitle);
        console.log('Movies received from handleSearch:', movies);
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
      <Searchbar value={movieTitle} onChange={updateQueryString} />

      {/* Відображення індикатора завантаження */}
      {loading ? (
        <InfinitySpin width="200" color="#4fa94d" />
      ) : films.length === 0 && movieTitle ? (
        <h2>🔎 Nothing found</h2>
      ) : (
        <MovieList films={films} />
      )}
    </div>
  );
};

export default Movies;
