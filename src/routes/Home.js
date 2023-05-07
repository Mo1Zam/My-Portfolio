import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Heroimg from '../components/Heroimg'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home