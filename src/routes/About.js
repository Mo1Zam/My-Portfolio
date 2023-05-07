import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutComponent from '../components/AboutComponent'
function About() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About ME!" text="Surfing on Internet"/>
      <AboutComponent />
      <Footer/>
    </div>
  )
}

export default About