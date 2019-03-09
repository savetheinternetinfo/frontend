import React from "react";
import { Link } from "react-router-dom";
import * as Feather from "react-feather";

function NavIcon({ icon, route, url, size }) {
  const IconComponent = Feather[icon];
  const iconSize = size || 16;
  const classes =
    "focus:outline-none text-white hover:text-orange-lighter text-center px-2 py-2 m-2 select-none";
  return typeof route === "undefined" ? (
    <a
      href={url}
      className={classes}
      style={{
        transition: "color .25s ease-in-out"
      }}
    >
      <IconComponent size={iconSize} />
    </a>
  ) : (
    <Link
      to={route}
      className={classes}
      style={{
        transition: "color .25s ease-in-out"
      }}
    >
      <IconComponent size={iconSize} />
    </Link>
  );
}

export default NavIcon;
