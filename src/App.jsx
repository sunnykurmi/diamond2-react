import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog';
import Home from './Home';
import Blogg from './Blogg';
const App = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog1" element={<Blog />} />
        <Route path="/blog2" element={<Blogg />} />
      </Routes>
    </div>
  )
}

export default App

