import React from "react";
import Image from "next/image";

import styles from 'styles/Pager.module.scss';

const Pager = () => {
  return (
    <div className={`columns ${styles.pager}`}>
      <div className="column">
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
        <h4>Senior Software Engineer, Web{' '}<i>March 2018 - present</i></h4>
        <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck. Just my luck, no ice. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
      </div>
      <div className="column is-narrow">
        <div>
          <Image 
            src="/img/pager_office.png"
            alt="Pager"
            height={500}
            width={400}
          />
        </div>
      </div>
    </div>
  )
};

export default Pager;
