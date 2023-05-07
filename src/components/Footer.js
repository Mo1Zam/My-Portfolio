import React from 'react';

import "./FooterStyles.css" ;

import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
              <h4>
                <FaPhone size={20} style={{marginRight : "1rem"}}/>
                  +91-XXX-XXX-9655
              </h4>
          </div>
          <div className="email">
             <h4>
               <FaMailBulk size={20} style={{marginRight : "1rem"}}/>
                sayedsha0021@gmail.com
              </h4>
          </div>
        </div>

        <div className="right">
          <h4>Social Accounts</h4>
          <div className="social">
          <FaFacebook size={30} style={{marginRight : "1rem"}} />
          <FaLinkedin size={30}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer