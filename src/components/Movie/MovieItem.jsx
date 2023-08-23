import { Item, Link } from './Movie.styles';
import { useLocation } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <Item key={id}>
      <Link to={`/movies/${id}}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="190px"/>
        <p>{title}</p>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
