import React from 'react';
import MovieList from '../Components/MovieList';
import SearchForm from '../Components/SearchForm';
import { Footer } from '../Components/Footer';
// import { useGlobalContext } from '../Context';
// import PopularMovie from '../components/PopularMovie';
// import TopRatedMovie from '../components/TopRatedMovie';
// import UpcomingMovie from '../components/UpcomingMovie';
const Home = () => {
  return (
    <main>
      <SearchForm />
      <MovieList />
      {/* <PopularMovie />
      <TopRatedMovie />
      <UpcomingMovie /> */}
      <Footer />
    </main>
  )
}

export default Home
