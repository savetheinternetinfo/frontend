import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FlagIcon } from "react-flag-kit";
import { useStateValue } from "../../contexts/StateContext";

const flagIconClasses =
  "bezier grey-filter no-underline select-none focus:outline-none cursor-pointer text-center ml-2 mr-4";
const flagIconStyle = { marginTop: "0.68rem" };
const flagIconSize = 26;

function FlagMenu() {
  const [{ language, langData }, dispatch] = useStateValue();
  const [showLangMenu, setLangMenuToggle] = useState(false);

  const otherLanguages = Object.keys(langData).filter(
    element => !element.includes(language)
  );

  return (
    <div className="language-picker z-50 mr-2">
      <FlagIcon
        className={flagIconClasses}
        style={flagIconStyle}
        code={language.slice(3)}
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
          <ul className="flex flex-wrap justify-end w-full bg-blue-dark md:bg-transparent list-reset">
            {otherLanguages.map(lang => {
              return (
                <li className={"mb-2 md:mr-1 mr-2"} key={`key-${lang}`}>
                  <FlagIcon
                    className={`${flagIconClasses} display-block`}
                    style={flagIconStyle}
                    code={lang.slice(3)}
                    size={flagIconSize}
                    onClick={() => {
                      setLangMenuToggle(!showLangMenu);
                      dispatch({
                        type: "changeLanguage",
                        newLanguage: lang
                      });
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
