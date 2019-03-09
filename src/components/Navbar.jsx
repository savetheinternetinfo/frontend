import React from "react";
import NavURL from "./common/NavURL";
import NavIcon from "./common/NavIcon";

import FlagMenu from "./common/FlagMenu";

function Navbar() {
  return (
    <nav className="flex flex-row-reverse bg-blue">
      <FlagMenu />
      <NavURL text="Demos" route="/" />
      <NavURL text="About" route="/" />
      <NavURL text="Memes" route="/" />
      <NavURL text="Gallery" route="/" />
      <NavURL text="About us" route="/" />

      <NavIcon icon="Home" url="http://google.com" />
      <NavIcon icon="Youtube" url="http://google.com" />
      <NavIcon icon="Instagram" url="http://google.com" />
      <NavIcon icon="Twitter" url="http://google.com" />
      <NavIcon icon="Facebook" url="http://google.com" />
    </nav>
  );
}

export default Navbar;
