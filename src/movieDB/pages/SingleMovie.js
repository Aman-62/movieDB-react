import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

// const url = 'https://api.themoviedb.org/3/movie/557?api_key=a44a598404f1aa8b8440fc402ccab41e'

const SingleMovie = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getMovie() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a44a598404f1aa8b8440fc402ccab41e`)
        const data = await response.json()
        const movie = data
        console.log(movie);
        if (movie) {
          setMovie(movie)
        } else {
          setMovie(null)
        }
        setLoading(false)
      }
      catch (e) {
        console.log(e);
      }
    }
    getMovie()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!movie) {
    return <h2>No Movie Found!</h2>
  }
  return (
    <section className='container single-movie-page'>
      <div className="single-movie-img">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
      </div>
      <div className="single-movie-info">
        <h3 className='single-movie-title'>{movie.title}</h3>
        <p className='single-movie-tagline'>{movie.tagline}</p>
        <p className='single-movie-summary'>{movie.overview}</p>
        <p className='single-movie-popularity'>Popularity: {movie.popularity}</p>
        <p className='single-movie-runtime'>Runtime: {movie.runtime}min</p>
      </div>
    </section>
  )
}

export default SingleMovie
