import Nav from '../Nav';
import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


let Contact = (props) => {
  const navigate = useNavigate();
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0h0bgml', 'template_uduig9p', form.current, 'Bj9fLdatugXkzZVLz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      swal("Good Job!", "Massage sent..", "success");
      navigate('/blog');
  };


    return(
        <>
  

<section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-item">
          <input type="text" name="user_name"required />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="user_email"  required />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        {/* <button className="submit-btn" >Send</button> */}
        <input className="submit-btn" type="submit" value="Send" />  
      </form>
    </div>
  </div>
</section>
        </>
    )
}

export default Contact;