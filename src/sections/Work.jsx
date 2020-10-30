import React from "react";
import Pager from "components/Pager";
import Bloomingdales from "components/Bloomingdales";
import ConEdison from "components/ConEdison";
import Section from "./Section";

const Work = () => {
  return (
    <Section>
      <h3>Work</h3>
      <ul>
        <Pager />
        <Bloomingdales />
        <ConEdison />
      </ul>
    </Section>
  )
}

export default Work;
