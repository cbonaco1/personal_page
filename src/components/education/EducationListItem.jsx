import React from "react";
import Image from "next/image";

const EducationListItem = ({
  name,
  location,
  description,
  logo,
  year
}) => {
  return (
    <li>
      <p>{name}</p>
      <p>{location}</p>
      <p>{description}</p>
      <Image
        src={logo}
        alt={name}
        width={200}
        height={200}
      />
      <p>{year}</p>
    </li>
  )
}

export default EducationListItem;
