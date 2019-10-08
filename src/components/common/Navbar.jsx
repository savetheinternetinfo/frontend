import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { animateScroll as scroll, scroller } from "react-scroll";
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

  function handleHomeButtonClick() {
    scroll.scrollToTop({ duration: 500 });
  }

  function handleNavUrlClick() {
    scroller.scrollTo("content", { smooth: true, duration: 500 });
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
    <nav
      className={
        "z-50 flex flex-row h-12 w-full fixed pin-t bg-blue-dark animate-all-fast " +
        (scrolledBelowVideo ? "md:bg-blue-darker" : "md:bg-transparent")
      }
    >
      <NavIcon
        className="z-50 md:hidden justify-start"
        icon="Menu"
        onClick={() => setShowNav(!showNav)}
      />
      <div className="flex-grow" />
      <NavIcon
        className="z-50"
        icon="Home"
        route="/"
        onClick={handleHomeButtonClick}
      />

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
          <NavURL
            onClick={handleNavUrlClick}
            text={translation["open_letter"]}
            route="/open-letter"
          />
        </div>
      </CSSTransition>
      <FlagMenu />
    </nav>
  );
}

export default Navbar;
