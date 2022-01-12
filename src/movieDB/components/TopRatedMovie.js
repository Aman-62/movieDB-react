import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a44a598404f1aa8b8440fc402ccab41e&page=1'

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([])
  const fetchPopularMovie = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data);
      const movie = data.results.slice(0, 5)
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
  console.log(movies);
  return (
    <div className="container main">
      <h2>Top Rated Movies</h2>
      <div className='movie-list'>
        {movies.map(item => {
          const { title, poster_path, release_date, id } = item
          return <section key={id}>
            <Link to={`/movie/${id}`}>
              <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
              </div>
              <h3 className='movie-title'>{title}</h3>
            </Link>
            <p className='movie-releaseDate'>{release_date}</p>
          </section>

        })}
      </div>
    </div>
  )
}

export default TopRatedMovie
