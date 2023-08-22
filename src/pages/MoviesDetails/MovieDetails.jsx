import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/themoviedb_api';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import {
  Tittle,
  Box,
  InfoBox,
  Text,
  TittleText,
  MoreInfoBox,
  MoreInfoTittle,
  MoreButtonList,
  LinkButton,
} from './MoviesDetails.styles';



const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation;
  const backLinkHref = useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };
    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { poster_path, title, vote_average, genres, overview } = movieDetails;

  return (
    <>
      <Link to={backLinkHref.current}>
        <ButtonBack text=" Go back" />
      </Link>

     
      <Box>
        <img width="300" src={poster_path} alt={title} />
        <InfoBox>
          <Tittle>{title ? title : 'No Info'}</Tittle>
          <Text>
            <TittleText>User Score: </TittleText>{' '}
            {vote_average ? Math.round(vote_average * 10) : 0}%
          </Text>
          <Text>
            <TittleText>Overview: </TittleText>
            {overview ? overview : 'No Info'}
          </Text>
          <Text>
            <TittleText>Genres: </TittleText>
            {genres.length > 0
              ? genres.map(value => value.name).join(', ')
              : 'No Info'}
          </Text>
        </InfoBox>
      </Box>
      <MoreInfoBox>
        <MoreInfoTittle>Additional information</MoreInfoTittle>
        <MoreButtonList>
          <li>
            <LinkButton to="cast" state={{ from: backLinkHref }}>
              Cast
            </LinkButton>
          </li>
          <li>
            <LinkButton to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </LinkButton>
          </li>
        </MoreButtonList>
      </MoreInfoBox>

      <Outlet />
    </>
  );
};

export default MovieDetails;
