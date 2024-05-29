import React from 'react';
import { Grid, Typography } from '@mui/material';
import MovieCard from './MovieCard';
import { Movie } from '../interfaces/Movie';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (movies.length === 0) {
    return <Typography variant="h6">No movies found.</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
