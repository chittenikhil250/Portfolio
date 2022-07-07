import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_houn5mu', 'template_un4fobo', formRef.current, 'WSNxt_9P0zTf2Ks9f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chnikhil250@gmail.com</h5>
            <a href="mailto:chnikhil250@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="text" placeholder="Your Email" name="user_email" required/>
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          <span className={messageSent ? 'message-sent' : 'none'}>Message sent Succesfully </span>
        </form>
      </div>
    </section>
  )
}

export default Contact