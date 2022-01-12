import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  const { id, title, release_date, poster_path } = props.data;
  return (
    <section className='movie-list-single'>
      {/* <div>
      <img src="" alt="" />
    </div> */}
      <Link to={`/movie/${id}`} className='poster'>
        <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="" />
      </Link>
      <Link to={`/movie/${id}`}>
        <h3 className='movie-title'>{title.length > 15 ? title.slice(0, 15) + '...' : title}</h3>
      </Link>
      <p className='movie-releaseDate'>{release_date}</p>
    </section>
  )
}

export default Movie
