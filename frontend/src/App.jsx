import React from 'react'
import Navbar from './Components/Navbar'
import FrontBanner from './Components/FrontBanner'
import Footer from './Components/Footer'
import BookOption from './Components/BookOption'
import Home from './Home/Home'
import Course from './Components/Course'
import {Route,Routes} from "react-router-dom"
import Signup from './Components/Signup'
import About from './Components/About'
import Payment from './Components/Payment'
import Login from './Components/Login'
const App = () => {
  return (
    //<h1 className="text-3xl font-bold underline">
    <>
      {/* <Home/>
      <Course/> */}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/allcourses" element={<Course/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/Login" element={<Login/>} />

      </Routes>
      </>
      
    //</h1>

  )
}

export default App
