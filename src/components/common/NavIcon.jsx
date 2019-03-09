import React from "react";
import { Link } from "react-router-dom";
import * as Feather from "react-feather";

function NavIcon({ icon, route }) {
  const IconComponent = Feather[icon];
  return (
    <Link
      to={route}
      className="focus:outline-none text-white hover:text-orange-lighter"
      style={{
        transition: "color .25s ease-in-out"
      }}
    >
      <IconComponent />
    </Link>
  );
}

export default NavIcon;
