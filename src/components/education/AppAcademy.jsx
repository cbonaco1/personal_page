import React from "react";
import EducationListItem from "./EducationListItem";

const AppAcademy = () => {
  return (
    <EducationListItem 
      name="App Academy"
      location="New York, NY"
      description="Immersive 12-week bootcamp focused on full-stack web development. Curriculum includes Ruby, Rails, React.js, along with pair-programming and best practices in web development. Program has a less than 5% acceptance rate."
      logo="/img/logos/app-academy.png"
      year={2015}
    />
  )
}

export default AppAcademy;
