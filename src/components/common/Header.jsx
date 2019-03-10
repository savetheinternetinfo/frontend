import React from "react";
import Typed from "react-typed";

import config from "../../config.json";

import Button from "./Button";
import SocialButton from "./SocialButton";

import heroVideo from "../../assets/hero.mp4";
import Navbar from "./Navbar.jsx";

function Header(props) {
  const { links } = config;
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <div className="relative tilt text-3xl sm:text-5xl bg-white mt-16 p-4">
        <div className="untilt">
          <a
            className="text-blue hover:text-blue font-bold no-underline"
            href="/"
          >
            Save{" "}
            <Typed
              className="font-hairline -mr-1"
              strings={["the", "your", "our", "her", "his", "their"]}
              typeSpeed={130}
              backSpeed={80}
              loop={true}
              smartBackspace={false}
              shuffle={true}
              backDelay={1400}
            />{" "}
            Internet
          </a>
        </div>
      </div>
      <p className="text-xl mt-6 text-center text-white">
        The Internet is in danger and you can save it!
      </p>
      {props.social !== false && <div className="flex flex-row mt-6 mb-6">
        <SocialButton icon="Facebook" link={links.facebook} />
        <SocialButton icon="Twitter" link={links.twitter} />
        <SocialButton icon="Instagram" link={links.instagram} />
        <SocialButton icon="Youtube" link={links.youtube} />
      </div>}
      {props.petition !== false && <Button text={"Sign the petition"} href={links.petition} />}
      <div className="absolute z-video pin-t pin-l h-full w-full overflow-hidden">
        <video
          className="min-h-full min-w-full relative center-video-fix"
          autoPlay
          loop
          muted
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="relative w-full h-24" />
    </div>
  );
}

export default Header;