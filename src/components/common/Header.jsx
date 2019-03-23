import config from "../../config.json";
import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { useStateValue } from "../../contexts/StateContext";
import { Element as ScrollElement } from "react-scroll";

import Button from "./Button";
import SocialButton from "./SocialButton";
import Navbar from "./Navbar";
import heroVideo from "../../assets/hero.mp4";

function Header(props) {
  const [{ translation }] = useStateValue();
  const { links } = config;
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <div className="relative tilt text-3xl sm:text-5xl bg-white mt-32 p-4">
        <div className="untilt">
          <Link
            to={"/"}
            className="text-blue hover:text-blue font-bold no-underline"
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
          </Link>
        </div>
      </div>
      <p className="text-xl mt-6 px-4 text-center text-white">
        {translation["header_tagline"]}
      </p>
      {props.social !== false && (
        <div className="flex flex-row mt-6 mb-6">
          <SocialButton icon="Facebook" link={links.facebook} />
          <SocialButton icon="Twitter" link={links.twitter} />
          <SocialButton icon="Instagram" link={links.instagram} />
          <SocialButton icon="Youtube" link={links.youtube} />
        </div>
      )}
      {props.petition !== false && (

        <Button text={translation["sign_petition"]} href={links.petition} />   
      )}
      <div className="absolute z-video pin-t pin-l h-full w-full overflow-hidden">
        <video
          className="min-h-full min-w-full relative center-video-fix"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="relative w-full h-24" />
      <ScrollElement className="absolute pin-b mb-12" name="content" />
    </div>
  );
}

export default Header;
