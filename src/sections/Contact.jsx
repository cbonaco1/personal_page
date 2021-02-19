import React from "react";
import Section from "./Section";

import styles from "styles/Contact.module.scss";

const Contact = () => {
  return (
    <div className={`${styles['contact-section-wrapper']}`}>
      <Section containerClassName={`${styles['contact-section']} box`}>
        <h4>Contact Me</h4>
        <div className="columns is-vcentered">
          <div className="column">
            <p>
              You know what? It is beets. I've crashed into a beet truck. 
              Just my luck, no ice. Yes, Yes, without the oops! 
              Hey, you know how I'm, like, always trying to save the planet? Here's my chance. 
              You really think you can fly that thing? 
              Must go faster... go, go, go, go, go!
            </p>
          </div>
          <div className="column is-one-third-desktop">
            <ul className="columns is-mobile is-vcentered">
              <li className="column">Phone</li>
              <li className="column">Email</li>
              <li className="column">LinkedIn</li>
              <li className="column">Twitter</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact;
