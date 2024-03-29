import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gqmxvqd",
      "template_issttvl",
      form.current,
      "b5edZuxsgQc5gvoA2"
    );
    e.target.reset();
  };

  const { t } = useTranslation();

  return (
    <section id="contact">
      <h5>{t("contact.subtitle")}</h5>
      <h2>{t("contact.title")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>dmaceda2288@gmail.com</h5>
            <a href="mailto:dmaceda2288@gmail.com" target="_blank">
              {t("contact.send")}
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>Messenger</h4>
            <h5>dmaceda</h5>
            <a href="https://m.me/diego.maceda.7" target="_blank">
              {t("contact.send")}
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+54-221-4884165</h5>
            <a
              href="https://api.whatsapp.com/send?phone=542214884165"
              target="_blank"
            >
              {t("contact.send")}
            </a>
          </article>
        </div>
        {/******************** FORMULARIO ****************/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact.message")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
