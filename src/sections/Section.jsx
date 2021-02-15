import React from "react";

const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="container is-max-desktop" style={{border: '1px solid black'}}>
        { children }
      </div>
    </section>
  )
}

export default Section;
