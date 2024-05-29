import React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGetMovieDetailsQuery } from '../api/slices/movieSlice';

const Media = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '600px',
});

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '20px',
}));

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
//   const { data: movie, error, isLoading } = useGetMovieDetailsQuery(Number(id));
const movie = {
    "id": 1,
    "title": "The Shawshank Redemption",
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates—including an older prisoner named Red—for his integrity and unquenchable sense of hope.",
    "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "vote_average": 8.7
  }
  


  if (!movie) return null;

  return (
    <StyledContainer>
      <Typography variant="h3">{movie.title}</Typography>
      <Box mt={2}>
        <Media
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Box>
      <Typography variant="h5" sx={{ marginTop: '20px' }}>
        Overview
      </Typography>
      <Typography>{movie.overview}</Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        Rating: {movie.vote_average}
      </Typography>
    </StyledContainer>
  );
};

export default MovieDetails;
