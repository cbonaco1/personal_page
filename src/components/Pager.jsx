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
              className={styles.pagerLogo}
            />
          </div>
        </div>
        <p className={`is-size-4 ${styles.jobTitle}`}>Senior Software Engineer, Web</p>
        <p className={`${styles.jobTime}`}><i>March 2018 - present</i></p>
        <p className="is-size-5">
          Pager helps consumers navigate their entire care journey, connecting them to the right care, in the right place, at the right time — like having a doctor in your family.
          For more information, visit <a href="https://pager.com/" title="Pager">pager.com</a>.
        </p>
      </div>
      <div className="column is-narrow">
        <Image 
          src="/img/pager_demo.png"
          alt="Pager"
          height={455}
          width={500}
        />
      </div>
    </div>
  )
};

export default Pager;
