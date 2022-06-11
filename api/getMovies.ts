import { ResponseType, Success, ReturnType } from '../types';

export async function getMovies(title: string, type: string, page: number = 1) {
  let url = `https://www.omdbapi.com/?apiKey=c17418a0&s=${title}&page=${page}`;
  if (type !== 'all') url += `&type=${type}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data: ResponseType = (await res.json()) as ResponseType;

      if (data.Response === 'True') {
        const ls = JSON.parse(localStorage.getItem('favorites')) || {};
        const successResponse = data as Success;

        return {
          movies:
            successResponse?.Search.map((movie) => ({
              ...movie,
              isChecked: ls[movie?.imdbID]?.['isChecked'],
            })) || [],
          error: null,
          total: +successResponse?.totalResults ?? Infinity,
        } as ReturnType;
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } catch {
    return { movies: [], error: title, total: Infinity } as ReturnType;
  }
}
