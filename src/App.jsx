import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Component/Home'

function App() {


  return (
    <>
      <h1>Welcome to my Page</h1>
      <Link to={'/Home'}><h2> Go to home page</h2></Link>

      <Routes>
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )

}
export default App
