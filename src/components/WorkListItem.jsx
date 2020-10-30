import React from "react";
import Image from "next/image";

const WorkListItem = ({
  title,
  company,
  description,
  logo,
  years
}) => {
  return (
    <li>
      <p>{title}</p>
      <p><i>{company}</i></p>
      <p>{description}</p>
      <Image
        src={logo}
        alt={company}
        width={200}
        height={200}
      />
      <p>{years}</p>
    </li>
  )
}

export default WorkListItem;
