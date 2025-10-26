import React from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
