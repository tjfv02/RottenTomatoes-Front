// src/components/MovieCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  backgroundColor: theme.palette.grey[50],
}));

const StyledCardMedia = styled(CardMedia)({
  height: 500,
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.grey[100],
}));

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <StyledCard>
      <CardActionArea component={Link} to={`/movie/${movie.id}`}>
        <StyledCardMedia
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
        />
        <StyledCardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            Rating: {movie.vote_average}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default MovieCard;
