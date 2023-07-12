import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovie'
import { useEffect, useState, useRef } from 'react'
import './App.css'

export function App () {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

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
    const newSearch = e.target.value
    updateSearch(newSearch)
    getMovies({ search: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='search-form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type='text' placeholder='Avengers, Star Wars, Harry Potter...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
