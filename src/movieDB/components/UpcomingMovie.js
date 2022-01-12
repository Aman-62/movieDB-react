import React, { useState, useEffect } from 'react'
import Movie from './Movie'
const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a44a598404f1aa8b8440fc402ccab41e&page=1'

const UpcomingMovie = () => {
  const [movies, setMovies] = useState([])
  const fetchPopularMovie = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data);
      const movie = data.results.slice(0, 10)
      if (movie) {
        const newMovies = movie.map((item) => {
          const { title, id, release_date, poster_path } = item
          return { title, id, release_date, poster_path }
        })
        setMovies(newMovies)
      }
      else {
        setMovies([])
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchPopularMovie()
  }, [])
  return (
    <div className="container main">
      <h2 className='text-center'>Upcoming Movies</h2>
      <div className='movie-list'>
        {movies.map((item) => {
          return <Movie key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}

export default UpcomingMovie
