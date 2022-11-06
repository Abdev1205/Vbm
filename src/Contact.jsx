import React, { useState } from 'react'
import Navbar from './Navbar'
import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from 'react-router-dom';
function Contact() {

  const [state, handleSubmit] = useForm("xoqbkonr");
  const [submit,setSubmitting] = useState("Submit")
  if (state.succeeded) {
    return <>
      <div className="feedback">
        <p >Thanks for your Valuable Feedback!</p>
        <NavLink className="feedback-button" exact to="/" >
        Home
        </NavLink>
      </div>
    </>
  }
  return (
    <>
      <Navbar />
      <div className="contact-form">

        <form  onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder='Enter Your Name'
            required
            autoComplete='off'
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />



          <input
            id="email"
            type="email"
            name="email"
            placeholder='Enter Your Email Id'
            required
            autoComplete='off'
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder='Enter Your Message'
            required
            autoComplete='off'
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button  type="submit" disabled={state.submitting}>
            {submit}
          </button>
        </form>
      </div>



    </>
  )
}

export default Contact
