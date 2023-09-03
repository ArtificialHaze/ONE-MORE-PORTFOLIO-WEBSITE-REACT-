import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "[YOUR_EMAILJS_SERVICE_ID]",
        "[YOUR_EMAILJS_TEMPLATE_ID]",
        formRef.current,
        "[YOUR_EMAILJS_PUBLIC_KEY]"
      )
      .then(
        (res) => {
          console.log(res.text);
          alert("Email was sent.");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          saepe mollitia. Officia, dolores ex asperiores eum pariatur aliquam
          voluptate vitae.
        </p>
        <div className="clientImgs">
          <img src="[CLIENT_IMAGE]" className="clientImg" alt="Client-01" />
          <img src="[CLIENT_IMAGE]" className="clientImg" alt="Client-02" />
          <img src="[CLIENT_IMAGE]" className="clientImg" alt="Client-03" />
          <img src="[CLIENT_IMAGE]" className="clientImg" alt="Client-04" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          accusantium.
        </span>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          action="#"
          className="contactForm"
        >
          <input
            type="text"
            className="name"
            name="your_name"
            placeholder="Name.."
          />
          <input
            type="mail"
            className="email"
            name="your_email"
            placeholder="Email.."
          />
          <textarea
            className="message"
            name="message"
            rows="5"
            placeholder="Message.."
          ></textarea>
          <button type="submit" className="submitBtn" value={"Send"}>
            Submit
          </button>
          <div className="links">
            <img src="[SOCIAL_ICON_IMAGE]" alt="Link-01" className="link" />
            <img src="[SOCIAL_ICON_IMAGE]" alt="Link-02" className="link" />
            <img src="[SOCIAL_ICON_IMAGE]" alt="Link-03" className="link" />
            <img src="[SOCIAL_ICON_IMAGE]" alt="Link-04" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
