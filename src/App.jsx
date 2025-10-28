import React from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Navbar from './component/Navbar'
import Jobs from './page/Jobs'
import JobDetails from './page/JobDetails'
import MyProfile from './page/MyProfile'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  )
}

export default App
