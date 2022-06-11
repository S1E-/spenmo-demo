import * as React from 'react';
import './movieCard.scss';

import { updateFav } from '../../store/moviesSlice';
import { useDispatch } from 'react-redux';

type Props = {
  movie: any;
};

export function MovieCard({ movie }: Props) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const isChecked = e.target.checked;

    const data = JSON.parse(localStorage.getItem('favorites')) || {};
    data[movie.imdbID] = { ...movie, isChecked };
    localStorage.setItem('favorites', JSON.stringify(data));
    dispatch(updateFav({ imdbID: movie.imdbID, isChecked }));
  };

  return (
    <div className="moviecardContainer" style={{width: "7.875rem"}}>
      <div className="imageContainer">
        <img width="126" height="190" src={movie.Poster} alt={movie.Title} />
      </div>

      <span className="title">{movie.Title}</span>

      <time className="releaseYear">Year: {movie.Year}</time>

      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          defaultChecked={movie.isChecked}
        />
        <span className="label">Favorite</span>
      </label>
    </div>
  );
}
