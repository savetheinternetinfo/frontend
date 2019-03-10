import React from "react";
import { Link } from "react-router-dom";
import * as Feather from "react-feather";

function FootIcon({ icon, route, url, size }) {
  const IconComponent = Feather[icon];
  const iconSize = size || 16;
  const classes =
    "bezier focus:outline-none text-orange hover:text-white cursor-pointer text-center px-2 py-2 m-2 select-none";
  return typeof route === "undefined" ? (
    <a href={url} className={classes}>
      <IconComponent size={iconSize} />
    </a>
  ) : (
    <Link to={route} className={classes}>
      <IconComponent size={iconSize} />
    </Link>
  );
}

export default FootIcon;
