import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SingleMovieTwo from './Pages/SingleMovieTwo'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'
import Loading from './Components/Loading'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovieTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="lol" element={<Loading />} />
      </Routes>
    </div>
  )
}

export default Main
