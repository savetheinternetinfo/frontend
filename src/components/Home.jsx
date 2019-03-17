import React from "react";
import config from "../config.json";
import { useStateValue } from "../contexts/StateContext";
import Button from "./common/Button";
import SocialButton from "./common/SocialButton";

function Home() {
  const [{ translation }] = useStateValue();
  const { links } = config;

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="my-16">
          <h1>Why is the internet in danger?</h1>
          <p>EU Plant neues Copyrightgesetz usw. usw.</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            There are multiple problematic articles, the worst two are the
            following, though.
          </p>
        </div>
      </div>
      <div className="bg-white text-blue-dark text-center">
        <div className="container mx-auto flex my-16">
          <div className="h-full pr-12 border-r border-blue-dark">
            <h2>Article 11</h2>
            <p>summary of article 11</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p>
              <a className="text-blue-dark" href="#">
                more...
              </a>
            </p>
          </div>
          <div className="h-full pl-12 ">
            <h2>Article 13</h2>
            <p>summary of article 13</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p>
              <a className="text-blue-dark" href="#">
                more...
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto my-16">
          <h2>What you can do</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex text-center mt-16">
            <div className="h-full pr-12 border-r border-blue">
              <h2>Sign the petition</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <div className="my-8">
                <Button text="Petition" />
              </div>
            </div>
            <div className="h-full px-12 border-r border-blue">
              <h2>Go to a demonstration</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
              </p>
              <div className="my-8">
                <Button text="Demos" />
              </div>
            </div>
            <div className="h-full pl-12 ">
              <h2>Spread the word</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <div className="flex flex-row mt-4 justify-center">
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
      </div>
      <div className="bg-white text-blue-dark">
        <div className="container mx-auto my-16">
          <div className="my-16">
            <h1>What happened so far?</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <h1>Article </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
