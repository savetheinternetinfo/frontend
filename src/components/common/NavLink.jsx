import React from "react";
import { Link } from "react-router-dom";

function NavLink({ text, route }) {
  return (
    <Link
      to={route}
      className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-orange-lighter no-underline"
      style={{
        transition: "color .25s ease-in-out"
      }}
    >
      {text}
    </Link>
  );
}

export default NavLink;
