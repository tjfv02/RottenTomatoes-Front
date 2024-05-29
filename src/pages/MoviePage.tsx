// src/components/MoviesPage.tsx
import React from 'react';
import { CircularProgress, Typography, Container } from '@mui/material';
import MovieList from '../components/MovieList';

const MoviePage: React.FC = () => {

const data = {
  "results": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "vote_average": 8.7
    },
    {
      "id": 2,
      "title": "The Godfather",
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "vote_average": 8.7
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "vote_average": 8.5
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
      "vote_average": 8.5
    }
  ]
}


  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Movies
      </Typography>
      <MovieList movies={data?.results || []} />
    </Container>
  );
};

export default MoviePage;
