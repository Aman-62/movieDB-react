import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://api.themoviedb.org/3/search/movie?api_key=a44a598404f1aa8b8440fc402ccab41e&query='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [searchToggle, setSearchToggle] = useState(false)

  const fetchMovies = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      // console.log(data);
      const movie = data.results
      // console.log(movies);
      if (movie) {
        const newMovies = movie.map((item) => {
          const { id, popularity, title, release_date, poster_path } = item
          return { id, popularity, title, release_date, poster_path }
        })
        setMovies(newMovies)
        // console.log(setMovies);
      } else {
        setMovies([])
      }
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchMovies()
  }, [searchTerm, fetchMovies])

  return <AppContext.Provider value={{ loading, movies, setSearchTerm, searchToggle, setSearchToggle }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }