import React from "react";
import Typed from "react-typed";

import Button from "./Button";
import SocialButton from "./SocialButton";

import heroVideo from "../../assets/hero.mp4";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center  mb-5">
      <video className="-mt-32 z-video fixed min-w-full " autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="tilt text-5xl bg-white mt-20 p-4">
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
      <p className="text-xl px-2 m-4 text-center text-white">
        The Internet is in danger and you can save it!
      </p>
      <div className="flex flex-row mt-2 mb-4">
        <SocialButton icon="Facebook" link="https://savetheinternet.info/" />
        <SocialButton icon="Twitter" link="https://savetheinternet.info/" />
        <SocialButton icon="Instagram" link="https://savetheinternet.info/" />
        <SocialButton icon="Youtube" link="https://savetheinternet.info/" />
      </div>
      <Button
        text={"Sign the petition"}
        onClick={() => {
          window.location.href =
            "https://www.change.org/p/european-parliament-stop-the-censorship-machinery-save-the-internet";
        }}
      />
    </div>
  );
}

export default Banner;
