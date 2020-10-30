import React from "react";
import WorkListItem from "components/WorkListItem";

const ConEdison = () => {
  return (
    <WorkListItem 
      title={"System Analyst"}
      company={"Consolidated Edison"}
      description={"Administrator for software development tools Team Foundation Server (TFS) and Visual Studio. Responsible for managing licenses for these products for both employees and contractors. Also co-led corporate TFS version upgrade."}
      logo={'/img/logos/conEd.png'}
      years={'2012 - 2015'}
    />
  )
};

export default ConEdison;
