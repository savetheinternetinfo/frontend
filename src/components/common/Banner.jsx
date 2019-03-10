import React from "react";
import Typed from "react-typed";

import config from "../../config.json";

import Button from "./Button";
import SocialButton from "./SocialButton";

import heroVideo from "../../assets/hero.mp4";

function Banner() {
  const { links } = config;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative tilt text-5xl bg-white mt-16 p-4">
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
      <div className="flex flex-row mt-6 mb-6">
        <SocialButton icon="Facebook" link={links.facebook} />
        <SocialButton icon="Twitter" link={links.twitter} />
        <SocialButton icon="Instagram" link={links.instagram} />
        <SocialButton icon="Youtube" link={links.youtube} />
      </div>
      <Button text={"Sign the petition"} href={links.petition} />
      <video
        className="absolute z-video pin-t pin-l min-w-full "
        autoPlay
        loop
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Banner;
