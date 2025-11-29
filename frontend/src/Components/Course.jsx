import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Coursecontent from './Coursecontent'

const Course = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Coursecontent/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Course
