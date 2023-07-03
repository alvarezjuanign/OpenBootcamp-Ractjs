import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'
import { useEffect, useState, useRef } from 'react'
import './App.css'

export function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }

      if (search === '') {
        setError('No se puede buscar una película vacía')
        return
      }

      if (search.length < 3) {
        setError('Debe tener más de tres caracteres')
        return
      }

      setError(null)
    }
    , [search])

    return { search, updateSearch, error }
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='search-form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type='text' placeholder='Avengers, Star Wars, Harry Potter...' />
          <button>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
