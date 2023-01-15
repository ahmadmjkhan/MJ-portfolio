import React, { useRef } from "react";
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs"

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_d01yo69','template_x6qce2i',form.current,'xzMobR7uLdAlVX11u');
    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>cooljunaid.ahmed784@gmail.com</h5>
            <a href="mailto:cooljunaid.ahmed784@gmail.com" target="_blank">
              Send A message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91-8948302907</h5>
            <a
              href="https://api.whatsapp.com/send?phone+918948302907"
              target="_blank"
            >
              
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Junaid Ahmad</h5>
            <a href="https://www.linkedin.com/in/junaid-ahmad-3b402b13b/" target="_blank">
              view Profile
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea type="text" name="name" placeholder="Your Messages" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
