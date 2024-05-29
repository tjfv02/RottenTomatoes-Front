// src/store/slices/moviesSlice.ts
import { Movie, MovieDetails } from "../../interfaces/Movie";
import { mainSlice } from "../mainSlice";



const moviesSliceTag = mainSlice.enhanceEndpoints({ addTagTypes: ['MOVIES'] });

const moviesSlice = moviesSliceTag.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<{ results: Movie[] }, void>({
      query: () => ({
        url: '/movie/popular',
        method: 'GET',
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      }),
      providesTags: ['MOVIES'],
    }),
    getMovieDetails: build.query<MovieDetails, number>({
      query: (id) => ({
        url: `/movie/${id}`,
        method: 'GET',
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      }),
      providesTags: (result, error, id) => [{ type: 'MOVIES', id }],
    }),
    searchMovies: build.query<{ results: Movie[] }, string>({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        params: {
          api_key: import.meta.env.VITE_API_KEY, 
          query,
        },
      }),
      providesTags: ['MOVIES'],
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieDetailsQuery,
  useSearchMoviesQuery,
} = moviesSlice;

export default moviesSlice;
