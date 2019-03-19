import React from "react";
import { NavLink } from "react-router-dom";

function NavURL({ text, route, onClick, className }) {
  const classes =
    "underline text-white text-center uppercase px-2 py-1 m-2 no-underline select-none " +
    className;
  return (
    <NavLink
      style={{
        paddingTop: "0.3rem"
      }}
      to={route}
      className={classes}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}

export default NavURL;
