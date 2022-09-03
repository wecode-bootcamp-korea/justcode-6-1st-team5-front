import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="">
      <section className="wrapper_content_contact">
        <div className="contact_description">
          <h1 className="contact_description_h1">Need help?</h1>
          <img
            className="contact_img"
            alt="contact img"
            src="https://images.unsplash.com/photo-1610450949065-1f2841536c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
          <div>
            <p>We're here to answer your questions</p>
            <p>
              Please fill out this form for all products, order,shipping, and
              website related inquiries
            </p>
            <p>Customer Care Team is available Monday to Friday, 9am to 5pm</p>
            <p>
              Thank you for visiting <span>ROECY'</span>website
            </p>
          </div>
        </div>

        <form className="contact_form">
          <label htmlFor="name">Your name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Your email</label>
          <input id="email" type="text" placeholder="Your email" />

          <label htmlFor="message">Your message</label>
          <input id="message" type="text" placeholder="Your message" />
          <button className="contact_btn">Send message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
