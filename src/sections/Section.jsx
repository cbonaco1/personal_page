import React from "react";

const Section = ({ children, className, containerClassName }) => {
  return (
    <section className={`section ${className ? className : ''}`}>
      <div className={`container is-max-desktop ${containerClassName ? containerClassName : ''}`} style={{border: '1px solid black'}}>
        { children }
      </div>
    </section>
  )
}

export default Section;
