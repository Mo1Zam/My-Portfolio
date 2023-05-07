import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <input type="text"></input>
        <textarea rows={6} placeholder="Type Your Message Here..."></textarea>
        <button className="btn">Submit</button>
    </div>
  )
}

export default Form