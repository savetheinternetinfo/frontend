import React from "react";
import { Link } from "react-router-dom";
import * as Feather from "react-feather";
import { ReactComponent as Reddit } from "../../assets/reddit.svg";

function NavIcon({ icon, route, url, size, className, onClick }) {
  const IconComponent = Feather[icon];
  const iconSize = size || 16;
  const styles = {
    margin: "0.4rem"
  };
  const classes =
    "bezier focus:outline-none text-white hover:text-orange cursor-pointer text-center px-2 py-2 select-none " +
    className;
  return typeof route === "undefined" ? (
    <a href={url} style={styles} className={classes} onClick={onClick}>
      {icon !== "Reddit" ? (
        <IconComponent size={iconSize} />
      ) : (
        <Reddit className="w-6 h-6 stroke-current hover:text-${hoverColor}" />
      )}
    </a>
  ) : (
    <Link to={route} style={styles} className={classes} onClick={onClick}>
      <IconComponent size={iconSize} />
    </Link>
  );
}

export default NavIcon;
