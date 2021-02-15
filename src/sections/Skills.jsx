import React from "react";
import Section from "./Section";

import styles from "styles/Skills.module.scss";

const Skills = () => {
  return (
    <Section>
      <div className={`displayFlex ${styles.container}`}>
        <div className={`${styles.left}`}>
          <h2>Skills</h2>
          <p>
            Checkmate... God help us, we're in the hands of engineers. 
            They're using our own satellites against us. 
            And the clock is ticking. 
            Yeah, but your scientists were so preoccupied with whether or not they could, 
            they didn't stop to think if they should. Remind me to thank John for a lovely weekend.
          </p>
        </div>
        <div className={`${styles.right}`}>
          <ul>
            <li>
              <h4>Develop</h4>
              <p>Developer by trade, here are some of my skills:</p>
              <ul>
                <li>React</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Heroku</li>
                <li>NextJS</li>
              </ul>
            </li>
            <li>
              <h4>Design</h4>
              <ul>
                <li>Responsive & Mobile-Friendly Design</li>
                <li>Figma</li>
                <li>Border-line obsession with UI/UX</li>
                <li>Accessibility</li>
              </ul>
            </li>
            <li>
              <h4>Tools</h4>
              <ul>
                <li>Google Analytics</li>
                <li>Google Lightouse</li>
                <li>SEO</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Skills;
