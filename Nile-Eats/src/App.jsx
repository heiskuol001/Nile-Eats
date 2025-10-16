import React from 'react'
import HomePage from './pages/HomePage'
import Admin from './pages/Admin'
import Carousel from './pages/Carousel'
import SwiperDemo from './pages/SwiperDemo'
import { Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Admin' element={<Admin />} />
    </Routes>
      
      {/* <SwiperDemo />*/}
      
    </>
  )
}

export default App
