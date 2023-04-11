import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-icon"/>
            <h4>Email</h4>
            <h5>seanrmcgovern@gmail.com</h5>
            <a href="mailto:seanrmcgovern@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
