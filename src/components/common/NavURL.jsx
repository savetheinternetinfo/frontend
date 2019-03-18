import React from "react";
import { NavLink } from "react-router-dom";

function NavURL({ text, route, onClick, className }) {
  const classes =
    "underline text-white text-center uppercase px-2 py-2 m-2 no-underline select-none " +
    className;
  return (
    <NavLink to={route} className={classes} onClick={onClick}>
      {text}
    </NavLink>
  );
}

export default NavURL;
