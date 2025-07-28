import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

const About = () => {
  return (
    <>
      <Navbar />
       <div className='h-screen dark:bg-black dark:text-white  '>
        <AboutUs />
       </div>
     
      <Footer/>
    </>
  )
}

export default About
