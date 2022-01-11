import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  const { id, title, release_date, poster_path } = props.data;
  return (
    <section>
      {/* <div>
      <img src="" alt="" />
    </div> */}
      <Link to={`/movie/${id}`}>
        <div className='poster'>
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
        </div>
        <h3 className='movie-title'>{title}</h3>
      </Link>
      <p className='movie-releaseDate'>{release_date}</p>
    </section>
  )
}

export default Movie
