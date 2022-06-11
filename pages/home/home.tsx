import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './home.scss';

import { moviesStateType as moviesStateType } from '../../types';

import { searchbarDropdownOptions } from '../../constants';
import { getMovies } from '../../api/getMovies';
import {
  updateMovieData,
  updatePage,
  updateLoading,
} from '../../store/moviesSlice';

import SearchBar from '../../components/searchbar';
import MovieCard from '../../components/movieCard';
import Button from '../../components/form/button';
import ErrorMessage from '../../components/errorMessage';

export function Home() {
  const moviesStore = useSelector(
    (state: { movies: moviesStateType }) => state.movies
  );

  const isLoading = useSelector(
    (state: { movies: moviesStateType }) => state.movies.loading
  );
  const query = useSelector(
    (state: { movies: moviesStateType }) => state.movies.query
  );
  const type = useSelector(
    (state: { movies: moviesStateType }) => state.movies.type
  );
  const page = useSelector(
    (state: { movies: moviesStateType }) => state.movies.page
  );
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(updateLoading(true));
    getMovies(query, type, page + 1)
      .then((data) => {
        dispatch(updateMovieData(data));
        dispatch(updatePage());
      })
      .catch((reason) => dispatch(updateMovieData(reason)))
      .then(() => dispatch(updateLoading(false)));
  };

  return (
    <div className="homeContainer">
      <SearchBar options={searchbarDropdownOptions} />

      {/* @ts-ignore */}
      {moviesStore.error ? (
        <ErrorMessage>
          No results found for <span>"{moviesStore.error}"</span>
        </ErrorMessage>
      ) : (
        <section className="moviecardsWrapper">
          {moviesStore?.movies
            ?.filter((movie) => movie.Poster !== 'N/A')
            .map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </section>
      )}

      {moviesStore?.movies?.length > 0 && (
        <div className="LoadMoreContainer">
          <Button
            disabled={
              moviesStore.page >= moviesStore.totalPages || !query || isLoading
            }
            isLoading={isLoading}
            type="button"
            label={
              moviesStore.page >= moviesStore.totalPages
                ? 'No more movie left'
                : 'Load More'
            }
            customStyle={{ padding: '4px', width: '40%', height: '40px' }}
            onClick={() => handleLoadMore()}
          />
        </div>
      )}
    </div>
  );
}
