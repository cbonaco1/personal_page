import React from "react";
import Image from "next/image";

const EducationListItem = ({
  name,
  description,
  logo,
  year
}) => {
  return (
    <>
      <p>{name}</p>
      {description}
      <Image
        src={logo}
        alt={name}
        width={100}
        height={100}
      />
      <p>{year}</p>
    </>
  )
}

export default EducationListItem;
