import React, { Fragment } from "react";

import styles from "styles/SkillsItem.module.scss";

const SkillsItem = ({ title, icon, list }) => {
  return (
    <Fragment>
      <div className={`displayFlex ${styles.title}`}>
        <h5 className="is-capitalized">{title}</h5>
        <div className={`${styles.iconWrapper}`}>
          {icon}
        </div>
      </div>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={index}>
              <p className="is-size-p">{listItem}</p>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default SkillsItem;
