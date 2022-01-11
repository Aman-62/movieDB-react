import React from 'react'
import Loading from './Loading'
import Movie from './Movie'
import { useGlobalContext } from '../Context'

const MovieList = () => {
  const { movies, loading } = useGlobalContext()
  // console.log(movies);
  if (loading) {
    return <Loading />
  }
  if (movies.length < 1) {
    return <h2>No movies Found. </h2>
  }
  return (
    <main className='container main'>
      <h1 className='page-title'>One place for all Movies...</h1>
      <div className='movie-list'>
        {movies.map((item) => {
          return <Movie key={item.id} data={item} />
        })}
      </div>
    </main>
  )
}

export default MovieList