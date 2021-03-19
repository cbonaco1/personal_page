import React from "react";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section from "./Section";

import styles from "styles/Contact.module.scss";

const myEmail = 'christian.bonacore@gmail.com';

const copyEmailToClipboard = (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(myEmail)
    .then(() => alert(`copied ${myEmail} to clipboard!`));
}

const Contact = () => {
  return (
    <div id="contact" className={`${styles['contact-section-wrapper']}`}>
      <Section containerClassName={`${styles['contact-section']} box`}>
        <h2>Contact Me</h2>
        <div className="columns is-vcentered">
          <div className="column">
            <p className="is-size-5">
              You know what? It is beets. I've crashed into a beet truck. 
              Just my luck, no ice. Yes, Yes, without the oops! 
              Hey, you know how I'm, like, always trying to save the planet? Here's my chance. 
            </p>
          </div>
          <div className="column is-one-third-desktop">
            <ul className={`columns is-mobile is-vcentered ${styles.iconList}`}>
              <li className={`column is-narrow box ${styles.icon}`}>
                <a href="tel:6314334415" title="631-433-4415">
                  <FaPhone size="2rem" />
                </a>
              </li>
              <li className={`column is-narrow box is-clickable ${styles.icon}`} onClick={copyEmailToClipboard}>
                <a href="#" title="Email me">
                  <FaEnvelope size="2rem" />
                </a>
              </li>
              <li className={`column is-narrow box ${styles.icon}`}>
                <a href="https://www.linkedin.com/in/christianbonacore" title="LinkedIn" target="_blank">
                  <FaLinkedinIn size="2rem" />
                </a>
              </li>
              <li className={`column is-narrow box ${styles.icon}`}>
                <a href="https://twitter.com/CBonacore" title="Twitter" target="_blank">
                  <FaTwitter size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact;
