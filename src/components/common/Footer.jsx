import React from "react";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
function Footer() {
  return (
    <div className="w-full bg-blue-dark mt-auto">
      <div className="bg-blue w-full p-4 text-center text-orange">
        Wir fordern jeden auf, nur die von uns freigegebenen Werbemittel an
        gestatteten Orten zu nutzen und zu verbreiten. Wir distanzieren uns von
        jeglichen fremden Werbemitteln und deren Anbringung an rechtswidrigen
        Flächen. Zusätzlich übernehmen wir keinerlei Haftung für dadurch
        entstandene Schäden.{" "}
      </div>
      <div className="w-3/4 px-4 pt-8 pb-2 flex mx-auto">
        <div className="w-1/3 pl-16">
          <h3 className="text-orange mb-4">Links</h3>
          <Link
            className="bezier text-white hover:text-orange no-underline block"
            to="/infos"
          >
            Informationen
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/about"
          >
            Über Uns
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/gallery"
          >
            Galerie
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/contact"
          >
            Kontakt
          </Link>
        </div>
        <div className="w-1/3 pl-16">
          <h3 className="text-orange mb-4">Rechtlich</h3>
          <Link
            className="bezier text-white hover:text-orange no-underline block"
            to="/imprint"
          >
            Impressum
          </Link>
          <Link
            className="bezier text-white hover:text-orange no-underline block mt-4"
            to="/privacy"
          >
            Datenschutz
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
