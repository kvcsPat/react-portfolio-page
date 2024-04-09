import React, { useRef, useEffect, useState } from "react";
import Reveal from "../Reveal";
import emailjs from "@emailjs/browser";
import useToggle from "../../useToggle";
import Modal from "../Modal";
import "../../Styling/ContactMe.css";

export default function ContactMe() {
  const [isOn, toggleIsOn] = useToggle(false);

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => emailjs.init(publicKey), [publicKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      return;
    } else if (emailRef.current.value.match(emailRegex)) {
      try {
        setIsLoading(true);
        await emailjs.send(serviceId, templateId, {
          user_name: nameRef.current.value,
          user_email: emailRef.current.value,
          message: messageRef.current.value,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        toggleIsOn(true);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    }
  };

  return (
    <section id="ContactMe" className="contact-me">
      {isOn && <Modal toggle={toggleIsOn} />}
      <div className="text">
        <Reveal>
          <p className="text-p1">Get in touch</p>
          <h1 className="title invert">Contact Me</h1>
        </Reveal>
      </div>
      <div className="form-container">
        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-name field"
              name="user_name"
              ref={nameRef}
              type="text"
              placeholder="Enter your full name"
            />
            <input
              className="contact-email field"
              name="user_email"
              ref={emailRef}
              type="email"
              placeholder="Enter your email address"
            />
            <textarea
              className="contact-message field"
              name="message"
              ref={messageRef}
              cols="30"
              rows="10"
              placeholder="Send me a message"
            />
            <div className="btn-contact">
              <input
                className={isLoading ? "btn-submitted" : "btn-submit"}
                type="submit"
                value={isLoading ? "Sending" : "Send"}
              />
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
