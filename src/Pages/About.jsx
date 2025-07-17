import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

const About = () => {
  return (
    <>
      <Navbar />
       <div className='h-screen '>
        <AboutUs />
       </div>
     
      <Footer/>
    </>
  )
}

export default About
