import React from "react";
import * as Feather from "react-feather";

function Icon({ icon }) {
  const IconComponent = Feather[icon];
  return <IconComponent className="text-white" />;
}

export default Icon;
