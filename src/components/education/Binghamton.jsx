import React from "react";
import EducationListItem from "./EducationListItem";

const Binghamton = () => {
  return (
    <EducationListItem 
      name="Binghamton University"
      location="Bachelor's of Science - Computer Science"
      description="Computer Science"
      logo="/img/logos/binghamton.png"
      year={2012}
    />
  )
}

export default Binghamton;
