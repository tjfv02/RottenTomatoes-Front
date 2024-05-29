import React from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGetPopularMoviesQuery } from '../api/slices/movieSlice';
import MovieList from '../components/MovieList';

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: '16px 0',
  textAlign: 'center',
  marginBottom: '20px',
}));

const Home: React.FC = () => {
  // const { data, error, isLoading } = useGetPopularMoviesQuery();
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
    <>

      <Container sx={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Popular Movies
        </Typography>
        {data && <MovieList movies={data.results} />}
      </Container>
    </>
  );
};

export default Home;
