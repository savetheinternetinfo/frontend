import React, { useState, useEffect } from "react";
import { useStateValue } from "../../contexts/StateContext";
import { animated, useTransition } from "react-spring";

import NavURL from "./NavURL";
import NavIcon from "./NavIcon";
import FlagMenu from "./FlagMenu";

function Navbar() {
  const [{ translation }] = useStateValue();
  const [showMobileNav, setShowMobileNav] = useState(false);

  console.log(showMobileNav);

  const transitions = useTransition(showMobileNav, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <nav className="z-50 flex flex-row h-12 w-full">
      <NavIcon
        className="z-50 md:hidden justify-start"
        icon="Menu"
        onClick={() => setShowMobileNav(!showMobileNav)}
      />
      <div className="flex-grow" />
      <NavIcon className="z-50" icon="Home" route="/" />
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className={
                "flex-col absolute pt-1 md:pt-0 md:relative md:flex md:flex-row w-full overflow-hidden bg-blue md:bg-transparent flex"
              }
            >
              <NavURL
                onClick={() => setShowMobileNav(false)}
                text={translation["memes_title"]}
                route="/"
              />
              <NavURL
                onClick={() => setShowMobileNav(false)}
                text={translation["about_us_heading"]}
                route="/about"
              />
              <NavURL
                onClick={() => setShowMobileNav(false)}
                text={translation["gallery_title"]}
                route="/gallery"
              />
              <NavURL
                onClick={() => setShowMobileNav(false)}
                text={translation["about_title"]}
                route="/"
              />
              <NavURL
                onClick={() => setShowMobileNav(false)}
                text={translation["sti_day"]}
                route="/demos"
              />
            </animated.div>
          )
      )}
      <FlagMenu />
    </nav>
  );
}

export default Navbar;
