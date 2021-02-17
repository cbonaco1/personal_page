import React from "react";
import Image from "next/image";

import styles from "styles/PortfolioItem.module.scss";

const PortfolioItem = ({
  title,
  logoImgSrc,
  description,
  liveUrl
}) => {
  return (
    <div className={`columns is-mobile is-vcentered ${styles.columnsContainer}`}>
      <div className={`column ${styles.logoContainer} is-narrow`}>
        <Image 
          src={logoImgSrc}
          width={200}
          height={200}
          alt={title}
        />
      </div>
      <div className="column">
        <h4>{title}</h4>
        {description}
        <p><a href={liveUrl} target="_blank">LIVE</a></p>
      </div>
    </div>
  )
};

export default PortfolioItem
