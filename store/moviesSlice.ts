import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { moviesStateType, movies } from '../types';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: null,
    page: 0,
    totalPages: Infinity,
    query: '',
    type: 'all',
    loading: false,
  } as moviesStateType,
  reducers: {
    updateMovieData: (
      state,
      action: PayloadAction<Partial<moviesStateType>>
    ) => {
      if (action.payload.error !== null && state.movies.length > 0) {
        state.page = Infinity;
      } else {
        state.movies = [...state.movies, ...action.payload.movies];
        state.error = action.payload.error;
        state.totalRecords = ~~(action.payload.total / 10);
      }
    },
    resetData: (state) => {
      state.movies = [];
      state.page = 0;
      state.error = null;
      state.totalPages = Infinity;
    },
    updateLoading: (state, action: PayloadAction<Partial<moviesStateType>>) => {
      state.loading = action.payload;
    },
    updateQuery: (state, action: PayloadAction<Partial<moviesStateType>>) => {
      state.query = action.payload;
      if (action.payload === '') {
        state.movies = [];
        state.error = null;
        state.page = 0;
        state.totalPages = Infinity;
      }
    },
    updateType: (state, action: PayloadAction<Partial<moviesStateType>>) => {
      if (state.type !== action.payload) {
        state.movies = [];
        state.error = null;
        state.page = 0;
        state.totalPages = Infinity;
      }
      state.type = action.payload;
    },
    updatePage: (state) => {
      state.page += 1;
    },
    updateFav: (state, action: PayloadAction<Partial<movies>>) => {
      state.movies = state.movies.map((movie) => {
        if (movie.imdbID === action.payload.imdbID) {
          movie.isChecked = action.payload.isChecked;
        }

        return movie;
      });
    },
  },
});

export const {
  updateMovieData,
  updateLoading,
  updateQuery,
  updateType,
  updatePage,
  updateFav,
  resetData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
