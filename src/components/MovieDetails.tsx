// src/components/MovieDetails.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Container, TextField, Button } from '@mui/material';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

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
  

  const handleRatingSubmit = async () => {

  };



  return (
    <Container>
      {data && (
        <>
          <Typography variant="h4" gutterBottom>{data.title}</Typography>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          <Typography variant="body1" gutterBottom>{data.overview}</Typography>
          <Typography variant="h6" gutterBottom>Rating: {data.vote_average}</Typography>
          <TextField
            label="Your Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            inputProps={{ min: 0, max: 10 }}
          />
          <TextField
            label="Your Comment"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleRatingSubmit}>
            Submit Rating
          </Button>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
