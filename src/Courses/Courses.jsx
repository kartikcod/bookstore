import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
         <Course/>
      </div>
      <Footer />
    </>
  )
}

export default Courses
