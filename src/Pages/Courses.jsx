import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen dark:bg-black dark:text-white '>
         <Course/>
      </div>
      <Footer />
    </>
  )
}

export default Courses
