import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/themoviedb_api';
import {List, Item} from './Reviews.styles'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Отримання оглядів фільму з API
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div style={{ display: 'flex' }}>
          
          <List>
            {reviews.map(review => (
              <Item key={review.id}>
                <p style={{width: '100px'}}>{review.author}</p>
                <p>{review.content}</p>
              </Item>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;