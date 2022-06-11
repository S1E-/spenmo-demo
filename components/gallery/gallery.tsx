import * as React from 'react';
import './gallery.scss';

import { movies as moviesType } from '../../types';

import MovieCard from '../movieCard';

type Props = {
  movies: moviesType[];
};

export function Gallery({ movies }: Props) {
  return (
    <section className="moviecardsWrapper">
      {movies
        ?.filter((movie) => movie.Poster !== 'N/A')
        .map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      {Array.from({ length: 4 }, (_, i) => i).map((_) => (
        <div key={_} className="placeHolder" />
      ))}
    </section>
  );
}
