import React from "react";
import NavURL from "./NavURL";
import NavIcon from "./NavIcon";

import FlagMenu from "./FlagMenu";

function Navbar() {
  return (
    <nav className="z-50 flex flex-row-reverse h-auto self-end">
      <FlagMenu />
      <NavURL text="Demos" route="/demos" />
      <NavURL text="About" route="/" />
      <NavURL text="Memes" route="/" />
      <NavURL text="Gallery" route="/" />
      <NavURL text="About us" route="/about" />
      <NavIcon icon="Home" route="/" />
    </nav>
  );
}

export default Navbar;
