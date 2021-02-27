import React from "react";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Section from "./Section";

import styles from "styles/Contact.module.scss";

const copyEmailToClipboard = () => {
  navigator.clipboard.writeText('christian.bonacore@gmail.com')
    .then(() => alert('copied email to clipboard!'))
}

const Contact = () => {
  return (
    <div className={`${styles['contact-section-wrapper']}`}>
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
            <ul className="columns is-mobile is-vcentered">
              <li className={`column`}>
                <a href="tel:6314334415" title="631-433-4415">
                  <FaPhone />
                </a>
              </li>
              <li className="column is-clickable" tabIndex="0" onClick={copyEmailToClipboard}>
                <FaEnvelope />
              </li>
              <li className="column">
                <a href="https://www.linkedin.com/in/christianbonacore" title="LinkedIn" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="column">
                <a href="https://twitter.com/CBonacore" title="Twitter" target="_blank">
                  <FaTwitter />
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
