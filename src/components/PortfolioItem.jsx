import React from "react";
import Image from "next/image";

import styles from "styles/PortfolioItem.module.scss";

const PortfolioItem = ({
  title,
  logoImgSrc,
  description,
  liveUrl,
  logoImgHeight
}) => {
  return (
    <div className="columns is-mobile is-vcentered">
      <div className={`column ${styles.logoContainer} is-narrow`}>
        <Image 
          src={logoImgSrc}
          width={200}
          height={logoImgHeight || 200}
          alt={title}
        />
      </div>
      <div className="column">
        <h4 className={`${styles.title}`}>{title}</h4>
        <div className={`${styles.description}`}>
          {description}
        </div>
        <p><a href={liveUrl} title={`visit ${title} website`} className="button is-primary is-uppercase" target="_blank">visit website</a></p>
      </div>
    </div>
  )
};

export default PortfolioItem
