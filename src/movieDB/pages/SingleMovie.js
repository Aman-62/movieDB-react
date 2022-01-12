import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

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
    <div>
      <SearchForm />
      <section className='container single-movie-page'>
        <div className="heading">
          <h3 className='single-movie-title'>{movie.title}</h3>
          <div className="heading-info">
            <p className='single-movie-releaseDate'>{movie.release_date}</p>
            <span>|</span>
            <p className='single-movie-runtime'>{movie.runtime}min</p>
          </div>
        </div>
        <div className="single-movie-img">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        </div>
        <div className="single-movie-info">
          <p className='single-movie-tagline'>{movie.tagline}</p>
          <p className='single-movie-summary'>{movie.overview}</p>
          <hr />
          <p>Genres :
            {movie.genres.map((item) => {
              return <span key={item.id}> {item.name}, </span>
            })}
          </p>
          <br />
          <p>Popularity : {movie.popularity}</p>
          <p>Budget : {movie.budget}</p>
          <p>Revenue : {movie.revenue}</p>
          <br />
          <p>Prduction Companies :
            {movie.production_companies.map((item) => {
              return <span key={item.id}> {item.name}, </span>
            })}
          </p>
          <br />
          <p>Language :
            {movie.spoken_languages.map((item) => {
              return <span key={item.iso_639_1}> {item.name}</span>
            })}
          </p>
          <br />
          <p>Vote : {movie.vote_average}</p>
        </div>
      </section >
    </div >
  )
}

export default SingleMovie
