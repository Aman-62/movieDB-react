import React from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import { useGlobalContext } from '../Context';
import PopularMovie from '../components/PopularMovie';
import TopRatedMovie from '../components/TopRatedMovie';
import UpcomingMovie from '../components/UpcomingMovie';
const Home = () => {
  return (
    <main>
      <SearchForm />
      <MovieList />
      <PopularMovie />
      <TopRatedMovie />
      <UpcomingMovie />
    </main>
  )
}

export default Home
