import React, { Fragment} from "react";

const SkillsItem = ({ title, list }) => {
  return (
    <Fragment>
      <h5 className="is-capitalized">{title}</h5>
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
