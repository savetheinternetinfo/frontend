import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { CSSTransition } from "react-transition-group";
import { useStateValue } from "../../contexts/StateContext";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import NavURL from "./NavURL";
import NavIcon from "./NavIcon";
import FlagMenu from "./FlagMenu";

function Navbar() {
  const [{ translation }] = useStateValue();
  const [showNav, setShowNav] = useState(false);
  const [scrolledBelowVideo, setScrolledBelowVideo] = useState(false);
  const width = useWindowWidth();

  function isDesktop() {
    // md-width https://tailwindcss.com/docs/container/#app
    return width >= 768 ? true : false;
  }

  function handleNavUrlClick(e) {
    setShowNav(isDesktop);
  }

  useEffect(() => {
    setShowNav(isDesktop());
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", function(event) {
      // 490 is when bottom border of navbar matches with video height
      const scrolledPastVideo = window.scrollY > 490 ? true : false;
      setScrolledBelowVideo(scrolledPastVideo);
    });
    return () => {
      window.removeEventListener("scroll", function(event) {
        const scrolledPastVideo = window.scrollY > 490 ? true : false;
        setScrolledBelowVideo(scrolledPastVideo);
      });
    };
  });

  return (
    <CSSTransition
      in={scrolledBelowVideo}
      timeout={300}
      classNames="bezier navbg"
    >
      <nav className="z-50 flex flex-row h-12 w-full fixed pin-t bg-blue-dark md:bg-transparent">
        {console.log(scrolledBelowVideo)}
        <NavIcon
          className="z-50 md:hidden justify-start"
          icon="Menu"
          onClick={() => setShowNav(!showNav)}
        />
        <div className="flex-grow" />
        <NavIcon className="z-50" icon="Home" route="/" />

        <CSSTransition
          in={showNav}
          timeout={300}
          classNames="bezier mobilenav"
          unmountOnExit
        >
          <div
            className={
              "flex-col absolute pt-1 md:pt-0 md:relative md:flex md:flex-row w-full overflow-hidden bg-blue-dark md:bg-transparent flex"
            }
          >
            <NavURL
              onClick={handleNavUrlClick}
              text={translation["about_us_heading"]}
              route="/aboutus"
            />
            <NavURL
              onClick={handleNavUrlClick}
              text={translation["gallery_title"]}
              route="/gallery"
            />
            <NavURL
              onClick={handleNavUrlClick}
              text={translation["about_title"]}
              route="/about"
            />
            <NavURL
              onClick={handleNavUrlClick}
              text={translation["sti_day"]}
              route="/demos"
            />
          </div>
        </CSSTransition>

        <FlagMenu />
      </nav>
    </CSSTransition>
  );
}

export default Navbar;
