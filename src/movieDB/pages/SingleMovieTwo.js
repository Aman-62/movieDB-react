import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
var tags = require('language-tags')

// import SearchForm from '../components/SearchForm'

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

  let timeConverter = (n) => {
    let num = n;
    let hours = (num / 60)
    let rhours = Math.floor(hours)
    let min = (hours - rhours) * 60
    let rmin = Math.round(min)
    return rhours + 'h ' + rmin + 'm'
  }

  let vote = movie.vote_average.toString()
  let userScore = vote.replace('.', '')

  let backdropImg = `https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${movie.backdrop_path}`
  let posterImg = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="single-movie-main">
      <div className="backdrop-image" style={{ backgroundImage: `url("${backdropImg}")` }}>
        <div className="gradient-div">
          <div className='gradient'>
            <img src={posterImg} alt="" />
            <div className="scoreOuterCircle">
              <div className="scoreInnerCircle">
                <p>{userScore}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">

        <div className="single-movie-detail">
          <div className="title-div">

            <h2 className='single-movie-title'>{movie.title}</h2>
            <p>{movie.release_date} | {movie.genres.map((item) => {
              return <span key={item.id}> {item.name} | </span>
            })} {timeConverter(movie.runtime)}</p>
          </div>
          <div className='movie-info'>
            <div className="summary">
              <p className='tagline'>{movie.tagline}</p>
              <p className='overview'>Overview</p>
              <p className='overview-txt'>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div className="info">
          <h3 className='info-heading'>Status</h3>
          <p className='info-txt'>{movie.status}</p>
          <h3 className='info-heading'>Original Language</h3>
          <p className='info-txt'>English({movie.original_language})</p>
          <h3 className='info-heading'>Budget</h3>
          <p className='info-txt'>${numberWithCommas(movie.budget)}.00</p>
          <h3 className='info-heading'>Revenue</h3>
          <p className='info-txt'>${numberWithCommas(movie.revenue)}.00</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
