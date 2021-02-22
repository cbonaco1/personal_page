import React from "react";
import Section from "./Section";

import styles from "styles/Skills.module.scss";

const Skills = () => {
  return (
    <Section className="skills-section">
      <div className={`${styles.left}`}>
        <h2>Skills</h2>
        <p>
          Checkmate... God help us, we're in the hands of engineers. 
          They're using our own satellites against us. 
          And the clock is ticking. 
          Yeah, but your scientists were so preoccupied with whether or not they could, 
          they didn't stop to think if they should. Remind me to thank John for a lovely weekend.
        </p>
        <p>Developer by trade, here are some of my skills:</p>
      </div>
      <div>
        <ul className="columns">
          <li className="column box">
            <h5 className="is-capitalized">develop</h5>
            <ul>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Heroku</li>
              <li>NextJS</li>
            </ul>
          </li>
          <li className="column box">
            <h5 className="is-capitalized">design</h5>
            <ul>
              <li>Responsive, mobile-friendly design</li>
              <li>Figma</li>
              <li>Border-line obsession with UI/UX</li>
              <li>Accessibility</li>
            </ul>
          </li>
          <li className="column box">
            <h5 className="is-capitalized">tools</h5>
            <ul>
              <li>SEO</li>
              <li>Content Security Policy (CSP)</li>
              <li>Google Analytics</li>
              <li>Google Lightouse</li>
            </ul>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Skills;
