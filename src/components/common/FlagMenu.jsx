import config from "../../config.json";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FlagIcon } from "react-flag-kit";

import { useStateValue } from "../../contexts/StateContext";

const flagIconClasses =
  "bezier grey-filter no-underline select-none cursor-pointer text-center ml-2 mr-4";
const flagIconStyle = { marginTop: "0.68rem" };
const flagIconSize = 26;

function FlagMenu() {
  const [{ language }, dispatch] = useStateValue();

  const [showLangMenu, setLangMenuToggle] = useState(false);
  const [userAgentLang] = config.languages.filter(element =>
    language.includes(element.id)
  );
  const otherLanguages = config.languages.filter(
    element => !language.includes(element.id)
  );

  return (
    <div className="language-picker z-50 mr-2">
      <FlagIcon
        className={flagIconClasses}
        style={flagIconStyle}
        code={userAgentLang.flag}
        size={flagIconSize}
        onClick={() => {
          setLangMenuToggle(!showLangMenu);
        }}
      />
      <CSSTransition
        in={showLangMenu}
        timeout={300}
        classNames="langmenu"
        unmountOnExit
      >
        <menu className="absolute w-full m-0 p-0 pin-l">
          <ul className="flex flex-wrap justify-end w-full list-reset">
            {otherLanguages.map(lang => {
              return (
                <li className={"mb-2 mr-2"} key={`key-${lang.id}`}>
                  <FlagIcon
                    className={`${flagIconClasses} display-block`}
                    style={flagIconStyle}
                    code={lang.flag}
                    size={flagIconSize}
                    onClick={() => {
                      setLangMenuToggle(!showLangMenu);
                      // Set a small timeout so the user does not see the flags rearranging
                      setTimeout(function() {
                        dispatch({
                          type: "changeLanguage",
                          newLanguage: lang.id
                        });
                      }, 200);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </menu>
      </CSSTransition>
    </div>
  );
}

export default FlagMenu;
