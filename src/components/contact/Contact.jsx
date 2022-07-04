/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>E-Mail Contact</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <AiOutlineMail className="experience__details-icon" />
              <div>
                <h4>dika.ter89@gmail.com</h4>
                <a href="mailto:dika.ter89@gmail.com" target="_blank">
                  Send a Message
                </a>
              </div>
            </article>
          </div>
        </div>
        {/* {End of Frontend} */}
        <div className="experience__frontend">
          <h3>Whatshapp Contact</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <AiOutlineWhatsApp className="experience__details-icon" />
              <div>
                <h4>+62 81717813105</h4>
                <a href="https://wa.me/+6281717813105" target="_blank">
                  Send a Whatshapp
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
