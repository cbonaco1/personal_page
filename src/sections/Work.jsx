import React from "react";
import Pager from "components/Pager";
import Portfolio from "components/Portfolio";
import Section from "./Section";

import styles from "styles/Work.module.scss";

const Work = () => {
  return (
    <Section id="work">
      <h2>Work</h2>
      <Pager />
      <div className={`${styles.intro}`}>
        <p className="is-size-5">
          In addition to my work as a professional software engineer, in my spare time I work as a freelancer, 
          designing and developing websites for small businesses. 
          While each client presents unique challenges, I focus on two main themes when building a website:
        </p>
        <div className={`${styles.phrase}`}>
          <p className="is-size-2">Beautiful design</p>
          <p className="is-size-2">Powerful engineering</p>
        </div>
        <p className="is-size-5">
          I want your website to function like a sports car. Sleek design with an engine under the hood that can go from 0-60mph in under 2 seconds. 
          Below are some of the projects I have had the pleasure to work on:
        </p>
      </div>
      <Portfolio />
    </Section>
  )
}

export default Work;
