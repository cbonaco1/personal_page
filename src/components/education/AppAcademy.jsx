import React from "react";
import EducationListItem from "./EducationListItem";

const AppAcademy = () => {
  return (
    <EducationListItem 
      name="App Academy"
      description={
        <>
          <p>Immersive 12-week bootcamp focused on full-stack web development.</p>
          <p>Program has a less than 5% acceptance rate.</p>
        </>
      }
      logo="/img/logos/app-academy.png"
      year="2015"
    />
  )
}

export default AppAcademy;
