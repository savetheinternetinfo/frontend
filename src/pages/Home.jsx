import React from "react";
import parse from "html-react-parser";

import config from "../config.json";
import { useStateValue } from "../contexts/StateContext";
import Button from "../components/common/Button";
import SocialButton from "../components/common/SocialButton";

function Home() {
  const [{ translation }] = useStateValue();
  const { links } = config;

  return (
    <React.Fragment>
      <div className="container mx-auto -mt-10 px-6 py-8">
        <h1>{translation.home_whyindanger_title}</h1>
        <p>{translation.home_whyindanger_text1}</p>
        <p>{translation.home_whyindanger_text2}</p>
        <p>{translation.home_whyindanger_text3}</p>
      </div>
      <div className="bg-white text-blue-dark md:text-center md:py-10">
        <div className="container mx-auto px-6 md:flex">
          <div className="md:pr-12 md:border-r border-blue-dark flex-1">
            <h2>{translation.home_article11_title}</h2>
            <p>{translation.home_article11_text}</p>
            {/* <p>
              <a className="text-blue-dark" href="#">
                mehr...
              </a>
            </p> */}
          </div>
          <div className="md:pl-12 flex-1 pb-6">
            <h2>{translation.home_article13_title}</h2>
            <p>{translation.home_article13_text}</p>
            {/* <p>
              <a className="text-blue-dark" href="#">
                mehr...
              </a>
            </p> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <h2>{translation.home_whatcanyoudo_title}</h2>
        <p>
          {translation.home_whatcanyoudo_text1 &&
            parse(translation.home_whatcanyoudo_text1)}
        </p>
        <p>
          {translation.home_whatcanyoudo_text2 &&
            parse(translation.home_whatcanyoudo_text2)}
        </p>
        <p>{translation.home_whatcanyoudo_text3}</p>

        <div className="my-10 lg:flex lg:text-center">
          <div className="lg:pr-12 flex-1">
            <h2>{translation.home_signthepetition_title}</h2>
            <p>{translation.home_signthepetition_text}</p>
            <div className="text-center my-10">
              <Button
                text={translation["sign_petition"]}
                href={links.petition}
              />
            </div>
          </div>
          <div className="lg:px-12 lg:border-r lg:border-l border-blue flex-1">
            <h2>{translation.home_gotodemo_title}</h2>
            <p>{translation.home_gotodemo_text}</p>
            <div className="text-center my-10">
              <Button
                className="mt-4"
                text={translation.sti_day}
                link="/demos"
              />
            </div>
          </div>
          <div className="lg:pl-12 flex-1">
            <h2>{translation.home_informeveryone_title}</h2>
            <p>{translation.home_informeveryone_text}</p>
            <div className="flex flex-row my-10 justify-center">
              <SocialButton
                icon="Facebook"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.facebook}
              />
              <SocialButton
                icon="Twitter"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.twitter}
              />
              <SocialButton
                icon="Instagram"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.instagram}
              />
              <SocialButton
                icon="Youtube"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.youtube}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
