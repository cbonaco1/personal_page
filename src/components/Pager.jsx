import React from "react";
import WorkListItem from "components/WorkListItem";

const Pager = () => {
  return (
    <WorkListItem 
      title={"Senior Software Engineer, Web"}
      company={"Pager"}
      description={"Pager provides a platform where patients are connected to appropriate health care, saving time and money by being navigated to only the care they need."}
      logo={'/img/logos/pager.png'}
      years={'2019 - present'}
    />
  )
};

export default Pager;
