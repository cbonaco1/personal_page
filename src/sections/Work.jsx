import React from "react";
import Pager from "components/Pager";
import Portfolio from "components/Portfolio";
import Section from "./Section";

import styles from "styles/Work.module.scss";

const Work = () => {
  return (
    <Section>
      <h2>Work</h2>
      <Pager />
      <div className={`${styles.intro}`}>
        <p>
          In addition to my work as a professional software engineer, in my spare time I work as a freelancer, 
          designing and developing websites for small businesses. 
          While each client presents unique challenges, I focus on two main themes
        </p>
        <ul className={`${styles.phrase}`}>
          <li><p>Beautiful design</p></li>
          <li><p>Powerful engineering</p></li>
        </ul>
        <p>
          I want your website to function like a sports car. Sleek design with an engine under the hood that flies
        </p>
        <p>
          Below are some of the projects I have had the pleasure to work on.
          Please <a href="/contact">contact me</a> if you would like to work together.
        </p>
      </div>
      <Portfolio />
    </Section>
  )
}

export default Work;
