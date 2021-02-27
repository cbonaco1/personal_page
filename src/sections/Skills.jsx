import React from "react";
import { BsCodeSlash, BsGearWideConnected, BsPencil } from "react-icons/bs";
import Section from "./Section";
import SkillsItem from "components/SkillsItem";

import styles from "styles/Skills.module.scss";

const developSkillsItem = [
  'React', 
  'NodeJS', 
  'Express', 
  'Heroku', 
  'NextJS'
];
const designSkillsItem = [
  'Responsive, mobile-friendly design',
  'Figma',
  'Border-line obsession with UI/UX',
  'Accessibility'
];
const toolsSkillsItems = [
  'SEO',
  'Content Security Policy (CSP)',
  'Google Analytics',
  'Google Lightouse'
]

const Skills = () => {
  return (
    <Section className={`skills-section ${styles.skillsSection}`}>
      <div className={`${styles.left}`}>
        <h2>Skills</h2>
        <p className="is-size-5">
          Checkmate... God help us, we're in the hands of engineers. 
          They're using our own satellites against us. 
          And the clock is ticking. 
          Yeah, but your scientists were so preoccupied with whether or not they could, 
          they didn't stop to think if they should. Remind me to thank John for a lovely weekend.
          Developer by trade, here are some of my skills:
        </p>
      </div>
      <div>
        <ul className="columns">
          <li className="column box">
            <SkillsItem title="develop" icon={<BsCodeSlash />} list={developSkillsItem} />
          </li>
          <li className="column box">
            <SkillsItem title="design" icon={<BsPencil />} list={designSkillsItem} />
          </li>
          <li className="column box">
            <SkillsItem title="tools" icon={<BsGearWideConnected />} list={toolsSkillsItems} />
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Skills;
