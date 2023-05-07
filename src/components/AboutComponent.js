import { Link } from "react-router-dom"
import "./AboutComponentStyles.css"

import React from 'react'
import React1 from '../assets/React1.png';
import React2 from '../assets/React2.png';

const AboutComponent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Get to KNOW ME! on my Journy</h1>
            <p>Im a Front-End Developer. I create responsive secure websites for my clients</p>
            <Link to="/contact"></Link>
            <button className="btn-2">Contact</button>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stack top">
                    <img src={React1}
                    className="img" alt="img"/>
                </div>
                <div className="image-stack bottom">
                    <img src={React2}
                    className="img" alt="img"/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default AboutComponent