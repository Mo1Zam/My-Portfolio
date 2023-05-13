import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Heroimg from '../components/Heroimg'
import About from '../components/AboutComponent'
import Form from '../components/Form'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <About/>
      <Work/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home