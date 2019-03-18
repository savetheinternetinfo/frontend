import React from "react";
import parse from "html-react-parser";

import { useStateValue } from "../contexts/StateContext";

function About() {
  const [{ language, translation }] = useStateValue();
  return (
    <div className="container mx-auto -mt-10 px-6 py-8">
      <h1>{translation.about_title}</h1>
      {(language === "de_DE" ||
        language === "en_GB" ||
        language === "es_ES" ||
        language === "it_IT") && (
        <React.Fragment>
          <h2>{translation.about_summary_title}</h2>
          <div className="mb-16 text-sm">
            <p>{parse(translation.about_summary)}</p>
          </div>
        </React.Fragment>
      )}
      {language === "de_DE" ? (
        <React.Fragment>
          <div className="mb-16">
            <h2>{translation.about_sub_title5}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://www.youtube.com/watch?v=SpUoLn0k5v4"
            >
              {translation.about_link_video}{" "}
            </a>
            <br />
            <iframe
              title="video"
              width="560"
              height="315"
              className="mt-4"
              src="https://www.youtube-nocookie.com/embed/SpUoLn0k5v4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title6}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="http://www.europarl.europa.eu/news/de/press-room/20180906IPR12103/parlament-legt-position-zur-urheberrechtsreform-fur-das-internetzeitalter-fest"
            >
              {translation.about_link_text}
            </a>
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title3}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://netzpolitik.org/2018/das-eu-parlament-legt-einen-schleier-ueber-das-internet-votum-fuer-upload-filter-und-leistungsschutzrecht/"
            >
              {translation.about_link_text}
            </a>
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title2}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://www.heise.de/ct/ausgabe/2018-21-EU-Verbrauchern-drohen-Upload-Filter-4172829.html"
            >
              {translation.about_link_text}
            </a>
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title4}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://juliareda.eu/2018/10/geheime-verhandlungen-urheberrechtsreform/"
            >
              {translation.about_link_text}
            </a>
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title1}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://www.heise.de/newsticker/meldung/YouTube-Chefin-Neues-EU-Copyright-fuer-Plattformen-zu-riskant-4198811.html"
            >
              {translation.about_link_text}
            </a>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="mb-16">
            <h2>{translation.about_sub_title5}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://www.youtube.com/watch?v=SpUoLn0k5v4"
            >
              {translation.about_link_video}{" "}
            </a>
            <br />
            <iframe
              title="video"
              width="560"
              height="315"
              className="mt-4"
              src="https://www.youtube-nocookie.com/embed/SpUoLn0k5v4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title7}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://www.theguardian.com/commentisfree/2018/sep/13/tech-giants-eu-internet-searches-copyright-law"
            >
              {translation.about_link_text}
            </a>
          </div>
          <div className="mb-16">
            <h2>{translation.about_sub_title8}</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl"
              href="https://juliareda.eu/2018/10/where-eu-member-states-stand-on-upload-filters-and-the-link-tax/"
            >
              {translation.about_link_text}
            </a>
          </div>
        </React.Fragment>
      )}
      <div className="mb-16">
        <p className="italic">
          <i className="text-orange">#savetheinternet </i>
          <i className="text-orange">#saveourinternet </i>
          <i className="text-orange">#fckart13 </i>
        </p>
      </div>
    </div>
  );
}

export default About;
