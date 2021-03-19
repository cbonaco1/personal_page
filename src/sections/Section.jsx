import React from "react";

const Section = ({ children, className, containerClassName, ...rest }) => {
  return (
    <section className={`section${className ? ` ${className}` : ''}`} {...rest}>
      <div className={`container is-max-desktop ${containerClassName ? containerClassName : ''}`}>
        { children }
      </div>
    </section>
  )
}

export default Section;
