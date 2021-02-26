import React from "react";
import Image from "next/image";

import styles from 'styles/Pager.module.scss';

const Pager = () => {
  return (
    <div className={`columns ${styles.pager}`}>
      <div className={`column ${styles.jobDescriptionColumn}`}>
        <div className="columns is-vcentered">
          <div className="column is-narrow">
            <h3>Pager</h3>
          </div>
          <div className="column">
            <Image
              src="/img/logos/pager.png"
              alt="Pager"
              height={100}
              width={100}
            />
          </div>
        </div>
        <p className={`is-size-4 ${styles.jobTitle}`}>Senior Software Engineer, Web</p>
        <p className={`${styles.jobTime}`}><i>March 2018 - present</i></p>
        <p className="is-size-5">This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
      </div>
      <div className="column is-narrow">
        <Image 
          src="/img/pager_office.png"
          alt="Pager"
          height={500}
          width={400}
        />
      </div>
    </div>
  )
};

export default Pager;
