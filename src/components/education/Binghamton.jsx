import React from "react";
import EducationListItem from "./EducationListItem";

const Binghamton = () => {
  return (
    <EducationListItem 
      name="Binghamton University"
      description={
        <>
          <p>Bachelor's of Science</p>
          <p>Computer Science</p>
        </>
      }
      logo="/img/logos/binghamton.png"
      year="2012"
    />
  )
}

export default Binghamton;
