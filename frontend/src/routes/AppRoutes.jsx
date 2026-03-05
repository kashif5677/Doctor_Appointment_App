import React from 'react'

import { Routes,Route, Router } from 'react-router-dom'
import Home from './../pages/Home';
import Doctor from './../pages/Doctor';
import Login from './../pages/Login';
import About from './../pages/About';
import Contact from './../pages/Contact';
import MyProfile from './../pages/MyProfile';
import MyAppointment from './../pages/MyAppointment';



function AppRoutes() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/doctor/:speciality' element={<Doctor/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/myprofile' element={<MyProfile/>}/>
      <Route path='/myappointemnt' element={<MyAppointment/>}/>
      <Route path='/myappointemnt/:docId' element={<MyAppointment/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
