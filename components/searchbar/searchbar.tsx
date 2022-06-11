import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './searchbar.scss';

import { moviesStateType as moviesStateType } from '../../types';

import { getMovies } from '../../api/getMovies';
import {
  updateQuery,
  updateType,
  updateMovieData,
  updatePage,
  updateLoading,
  resetData,
} from '../../store/moviesSlice';

import Input from '../form/input';
import DropDown from '../form/dropdown';
import { dropDownOptions } from '../../types';
import Button from '../form/button';

type Props = {
  options: dropDownOptions[];
};

export function SearchBar({ options }: Props) {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: { movies: moviesStateType }) => state.movies.loading
  );
  const query = useSelector(
    (state: { movies: moviesStateType }) => state.movies.query
  );
  const page = useSelector(
    (state: { movies: moviesStateType }) => state.movies.page
  );

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    const query = e.target.elements[0].value;
    const type = e.target.elements[1].value;
    dispatch(resetData());
    dispatch(updateType(type));
    dispatch(updateLoading(true));
    getMovies(query, type, page + 1)
      .then((data) => {
        dispatch(updateMovieData(data));
        dispatch(updatePage());
      })
      .catch((reason) => dispatch(updateMovieData(reason)))
      .then(() => dispatch(updateLoading(false)));
  }, []);

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <Input
            placeholder="Search Movies..."
            onChange={(e) => {
              dispatch(updateQuery(e.target.value));
            }}
            value={query}
            customStyle={{
              border: 'none',
              outline: 'none',
              flex: '1',
              textTransform: 'capitalize',
            }}
          />
          <DropDown options={options} />
        </div>
        <Button
          disabled={!query || isLoading}
          isLoading={isLoading}
          type="submit"
          label="Search"
          customStyle={{ padding: '0.5rem' }}
        />
      </form>
    </div>
  );
}
