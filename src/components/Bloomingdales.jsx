import React from "react";
import WorkListItem from "components/WorkListItem";

const Bloomingdales = () => {
  return (
    <WorkListItem 
      title={"UI Developer"}
      company={"Bloomingdale's"}
      description={"Front-end developer for retailer's website. Member of Credit Services team, focusing on providing a friction-less credit experience for our customers."}
      logo={'/img/logos/bloomingdales.png'}
      years={'2016 - 2019'}
    />
  )
};

export default Bloomingdales;
