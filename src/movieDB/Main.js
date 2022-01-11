import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingleMovie from './pages/SingleMovie'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="lol" element={<Loading />} />
      </Routes>
    </div>
  )
}

export default Main
