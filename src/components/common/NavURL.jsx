import React from "react";
import { NavLink } from "react-router-dom";

function NavURL({ text, route, onClick }) {
  return (
    <NavLink
      to={route}
      className="underline text-white text-center uppercase px-2 py-2 m-2 no-underline select-none"
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
}

export default NavURL;
