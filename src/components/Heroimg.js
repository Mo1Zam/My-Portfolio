import "./HeroimgStyles.css"
import { Link } from "react-router-dom"
import React from 'react'



function Heroimg() {
  return (
    <div className="hero">
        <div className="mask"></div>
        <div className="content">
            <p>HI, I'M MOHD AZAM</p>
            <h1>FRONT-END DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg