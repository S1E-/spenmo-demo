import * as React from 'react';
import './favorites.scss';

import MovieCard from '../../components/movieCard';
import ErrorMessage from '../../components/errorMessage';
import Gallery from '../../components/gallery';

export function Favorites() {
  const data = JSON.parse(localStorage.getItem('favorites')) || {};
  const favMovies = Object.values(data).filter((movie) => movie.isChecked);
  return (
    <div className="favoritesContainer">
      {favMovies.length ? (
        <Gallery movies={favMovies} />
      ) : (
        <ErrorMessage>You have no favorites.</ErrorMessage>
      )}
    </div>
  );
}
