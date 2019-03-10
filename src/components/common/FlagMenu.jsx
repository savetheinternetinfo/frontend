import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { FlagIcon } from "react-flag-kit";
import { LanguageContext } from "../../contexts/LanguageContext";

import config from "../../config.json";
import { switchLanguageSet } from "../../utils/switchLanguageSet";

const flagIconClasses =
  "no-underline select-none cursor-pointer text-center ml-2 mr-4";
const flagIconStyle = { marginTop: "0.68rem" };
const flagIconSize = 26;

function FlagMenu() {
  const [showLangMenu, setLangMenuToggle] = useState(false);
  const ctx = useContext(LanguageContext);
  const [userAgentLang] = config.languages.filter(element =>
    ctx.language.includes(element.id)
  );
  const otherLanguages = config.languages.filter(
    element => !ctx.language.includes(element.id)
  );

  return (
    <div className="language-picker mr-2">
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
                      ctx.language = lang.id;
                      switchLanguageSet(ctx, lang.id);
                      setLangMenuToggle(!showLangMenu);
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
