import React from "react";
import { useStateValue } from "../../contexts/StateContext";

import NavURL from "./NavURL";
import NavIcon from "./NavIcon";
import FlagMenu from "./FlagMenu";

function Navbar() {
  const [{ translation }] = useStateValue();

  return (
    <nav className="z-50 flex flex-row-reverse h-auto self-end">
      <FlagMenu />
      <NavURL text={translation["sti_day"]} route="/demos" />
      <NavURL text={translation["about_title"]} route="/" />
      <NavURL text={translation["memes_title"]} route="/" />
      <NavURL text={translation["gallery_title"]} route="/gallery" />
      <NavURL text={translation["about_us_heading"]} route="/about" />
      <NavIcon icon="Home" route="/" />
    </nav>
  );
}

export default Navbar;
