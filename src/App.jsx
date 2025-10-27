import React from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Navbar from './component/Navbar'
import Jobs from './page/Jobs'
import JobDetails from './page/JobDetails'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobDetails" element={<JobDetails />} />
      </Routes>
    </>
  )
}

export default App
