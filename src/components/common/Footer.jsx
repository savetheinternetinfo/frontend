import React from "react";
import { useStateValue } from "../../contexts/StateContext";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
function Footer() {
  const [{ translation }] = useStateValue();
  return (
    <div className="w-full bg-blue-dark mt-auto">
      <div className="bg-blue w-full p-4 text-center text-orange">
        {translation["footer_notice"]}
      </div>
      <div className="w-3/4 px-4 pt-8 pb-2 flex mx-auto">
        <div className="w-1/3 pl-16">
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
        <div className="w-1/3 pl-16">
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
        <div className="w-1/3 pl-16">
          <h3 className="mx-4 text-orange mb-4">Social</h3>
          <NavIcon size={18} icon="Facebook" route="/" />
          <NavIcon size={18} icon="Twitter" route="/" />
          <br />
          <br />
          <NavIcon size={18} icon="Instagram" route="/" />
          <NavIcon size={18} icon="Youtube" route="/" />
          <br />
          <br />
          <NavIcon size={18} icon="GitHub" route="/" />
        </div>
      </div>
      <div className="w-full p-4 bg-blue-dark text-orange text-center">
        © 2019 - savetheinternet.info - CC BY-NC-ND
      </div>
    </div>
  );
}

export default Footer;
