import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ >
  )
}

export default App
