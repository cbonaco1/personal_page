import React from "react";
import Image from "next/image";

import styles from 'styles/Pager.module.scss'

const Pager = () => {
  return (
    <div className={`displayFlex ${styles.container}`}>
      <div className={`${styles.pagerOffice}`}>
        <Image 
          src="/img/pager_office.png"
          alt="Pager"
          height={500}
          width={400}
        />
      </div>
      <div className={`${styles.info}`}>
        <div className={`displayFlex ${styles.titleLogo}`}>
          <h3>Pager</h3>
          <div>
            <Image
              src="/img/logos/pager.png"
              alt="Pager"
              height={100}
              width={100}
            />
          </div>
        </div>
        <h4>Senior Software Engineer, Web <i>March 2018 - present</i></h4>
        <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
      </div>
    </div>
  )
};

export default Pager;
