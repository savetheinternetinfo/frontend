import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
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

  function determineBackgroundColor() {
    if (isDesktop() && scrolledBelowVideo) {
      return "rgba(14, 32, 54, 1)";
    } else if (isDesktop() && !scrolledBelowVideo) {
      return "rgba(14, 32, 54, 0)";
    } else {
      return "rgba(14, 32, 54, 1)";
    }
  }

  function handleNavUrlClick(e) {
    setShowNav(isDesktop);
  }

  const navScrollSpring = useSpring({
    backgroundColor: determineBackgroundColor()
  });

  const navMobileSpring = useSpring({ opacity: showNav ? 1 : 0 });

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
    <animated.nav
      style={navScrollSpring}
      className="z-50 flex flex-row h-12 w-full fixed pin-t"
    >
      <NavIcon
        className="z-50 md:hidden justify-start"
        icon="Menu"
        onClick={() => setShowNav(!showNav)}
      />
      <div className="flex-grow" />
      <NavIcon className="z-50" icon="Home" route="/" />
      <animated.div
        style={navMobileSpring}
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
      </animated.div>
      <FlagMenu />
    </animated.nav>
  );
}

export default Navbar;
