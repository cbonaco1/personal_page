import React from "react";
import Section from "./Section";
import Binghamton from "components/education/Binghamton";
import AppAcademy from "components/education/AppAcademy";

const Education = () => {
  return (
    <Section>
      <h3>Education</h3>
      <ul className="columns">
        <li className="column">
          <AppAcademy />
        </li>
        <li className="column">
          <Binghamton />
        </li>
      </ul>
    </Section>
  )
}

export default Education;
