import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'
import { useState } from 'react'
import './App.css'

export function App () {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState()
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ query })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    if (newQuery === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (newQuery.length < 3) {
      setError('Debe tener más de tres caracteres')
      return
    }

    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='search-form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' type='text' placeholder='Avengers, Star Wars, Harry Potter...' />
          <button>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}
