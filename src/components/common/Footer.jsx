import config from "../../config.json";

import React from "react";
import { useStateValue } from "../../contexts/StateContext";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
function Footer() {
  const [{ translation }] = useStateValue();
  const { links } = config;
  return (
    <div className="w-full bg-blue mt-auto">
      <div className="bg-blue-dark w-full p-4 text-center text-orange">
        {translation["footer_notice"]}
      </div>
      <div className="pt-4 pb-2 flex justify-around mx-auto">
        <div className="ml-8 text-center lg:text-left">
          <h3 className="text-orange mb-4">Links</h3>
          <Link
            className="bezier text-white hover:text-orange no-underline block"
            to="/infos"
          >
            {translation["about_title"]}
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/about"
          >
            {translation["imprint_link"]}
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/gallery"
          >
            {translation["gallery_title"]}
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/contact"
          />
        </div>
        <div className="ml-4 text-center lg:text-left">
          <h3 className="text-orange mb-4">Legal</h3>
          <Link
            className="bezier text-white hover:text-orange no-underline block"
            to="/imprint"
          >
            {translation["imprint_link"]}
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/privacy"
          >
            {translation["privacy_link"]}
          </Link>
        </div>
        <div className="mr-8 text-center lg:text-left">
          <h3 className="text-orange mb-4">Social</h3>
          <div className="lg:-ml-4">
            <NavIcon size={18} icon="Facebook" url={links.facebook} />
            <NavIcon size={18} icon="Twitter" url={links.twitter} />
            <br />
            <br />
            <NavIcon size={18} icon="Instagram" url={links.instagram} />
            <NavIcon size={18} icon="Youtube" url={links.youtube} />
            <br />
            <br />
            <NavIcon size={18} icon="GitHub" url={links.github} />
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-blue text-orange text-center">
        © 2019 - savetheinternet.info - CC BY-NC-ND
      </div>
    </div>
  );
}

export default Footer;
