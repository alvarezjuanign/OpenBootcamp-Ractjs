import withResults from '../mocks/results.json'
// import withoutResults from '../mocks/noResults.json'

export function useMovies () {
  const movies = withResults.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
