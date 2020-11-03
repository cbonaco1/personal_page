import React from "react";
import Section from "./Section";
import Binghamton from "components/education/Binghamton";
import AppAcademy from "components/education/AppAcademy";

const Education = () => {
  return (
    <Section>
      <h3>Education</h3>
      <ul>
        <AppAcademy />
        <Binghamton />
      </ul>
    </Section>
  )
}

export default Education;
