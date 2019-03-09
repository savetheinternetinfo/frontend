import React from "react";
import FlagIcon from "../../utils/FlagIcon.js";

function FlagMenu() {
  return (
    <div>
      <FlagIcon
        className="text-center px-2 py-2 m-2 no-underline select-none"
        code={"de"}
        size={"1x"}
      />
    </div>
  );
}

export default FlagMenu;
