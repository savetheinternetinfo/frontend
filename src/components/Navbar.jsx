import React from "react";
import NavURL from "./common/NavURL";
import NavIcon from "./common/NavIcon";

import FlagMenu from "./common/FlagMenu";

function Navbar() {
  return (
    <nav className="z-50 flex flex-row-reverse h-auto">
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
