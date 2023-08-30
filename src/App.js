import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Header from './Components/Header'
import MovieList from './Components/MovieList'
import Movie from './Movie'

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
