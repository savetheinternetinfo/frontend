import React from "react";
import { Link } from "react-router-dom";
import FootIcon from "./common/FootIcon";
function Footer() {
  return (
    <div className="w-full bg-blue-dark">
      <div className="bg-blue w-full p-4 text-center text-orange">
        Wir fordern jeden auf, nur die von uns freigegebenen Werbemittel an
        gestatteten Orten zu nutzen und zu verbreiten. Wir distanzieren uns von
        jeglichen fremden Werbemitteln und deren Anbringung an rechtswidrigen
        Flächen. Zusätzlich übernehmen wir keinerlei Haftung für dadurch
        entstandene Schäden.{" "}
      </div>
      <div className="w-3/4 px-4 py-8 flex mx-auto">
        <div className="w-1/3 pl-16">
          <h3 className="text-orange mb-4">Links</h3>
          <Link
            className="text-orange hover:text-white no-underline block"
            to="/infos"
          >
            Informationen
          </Link>
          <Link
            className="text-orange hover:text-white no-underline block mt-4"
            to="/about"
          >
            Über Uns
          </Link>
          <Link
            className="text-orange hover:text-white no-underline block mt-4"
            to="/gallery"
          >
            Galerie
          </Link>
          <Link
            className="text-orange hover:text-white no-underline block mt-4"
            to="/contact"
          >
            Kontakt
          </Link>
        </div>
        <div className="w-1/3 pl-16">
          <h3 className="text-orange mb-4">Rechtlich</h3>
          <Link
            className="text-orange hover:text-white no-underline block"
            to="/imprint"
          >
            Impressum
          </Link>
          <Link
            className="text-orange hover:text-white no-underline block mt-4"
            to="/privacy"
          >
            Datenschutz
          </Link>
        </div>
        <div className="w-1/3 pl-16">
          <h3 className="mx-4 text-orange mb-4">Social</h3>
          <FootIcon size={18} icon="Facebook" route="/" />
          <FootIcon size={18} icon="Twitter" route="/" />
          <br />
          <br />
          <FootIcon size={18} icon="Instagram" route="/" />
          <FootIcon size={18} icon="Youtube" route="/" />
          <br />
          <br />
          <FootIcon size={18} icon="GitHub" route="/" />
        </div>
      </div>
      <div className="w-full p-2 bg-blue-dark text-orange text-center border-t border-blue">
        © 2019 - savetheinternet.info - CC BY-NC-ND
      </div>
    </div>
  );
}

export default Footer;
