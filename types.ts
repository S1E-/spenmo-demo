/* Store */

export type movies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'series' | 'all' | 'movie' | 'series';
  Poster: string;
  isChecked?: boolean;
};

export type moviesStateType = {
  movies: movies[];
  error: null | string;
  page: number;
  totalPages: number;
  query: string;
  type: string;
  loading: boolean;
  total?: number;
};

/* Api Call */

export type ReturnType = { movies: movies[]; error: null | string; total: number };
export type Success = {
  Search: movies[];
  totalResults: number;
  Response: string;
};

export type Fail = {
  Response: string;
  Error: string;
};
export type ResponseType = Success | Fail;

/* Constants */

export type dropDownOptions = {
  value: string;
  label: string;
};
