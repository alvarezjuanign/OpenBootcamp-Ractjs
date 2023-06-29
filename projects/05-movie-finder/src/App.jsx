import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'

export function App () {
  const { movies: mappedMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='search-form'>
          <input type='text' placeholder='Avengers, Star Wars, Harry Potter...' />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}
