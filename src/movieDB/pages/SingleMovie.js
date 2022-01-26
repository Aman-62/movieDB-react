import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import { useParams, Link } from 'react-router-dom'
import SearchForm from '../Components/SearchForm'

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
      <div className="heading">
        <h3 className='single-movie-title'>{movie.title}</h3>
        <p className='single-movie-date-time'>{movie.release_date}  <span>|</span>  {movie.runtime} min</p>
      </div>
      <div className="flex">

        <div className="single-movie-img">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        </div>
        <div className="summary">
          <p className='single-movie-tagline'>{movie.tagline}</p>
          <p className='single-movie-summary'>{movie.overview}</p>
        </div>
      </div>
      <div className="single-movie-more-info">
        <p>Genres :
          {movie.genres.map((item) => {
            return <span key={item.id}> {item.name} | </span>
          })}
        </p>
        <p>Popularity : {movie.popularity} | Vote : {movie.vote_average}</p>

        <p>Budget : ${movie.budget} | Revenue : ${movie.revenue}</p>
        <p>Prduction Companies :
          {movie.production_companies.map((item) => {
            return <span key={item.id}> {item.name} | </span>
          })}
        </p>
        <p>Language :
          {movie.spoken_languages.map((item) => {
            return <span key={item.iso_639_1}> {item.name} | </span>
          })}
        </p>
      </div>
    </section >
  )
}

export default SingleMovie
