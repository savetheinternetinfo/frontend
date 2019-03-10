import React from "react";
import { FlagIcon } from "react-flag-kit";

function FlagMenu() {
  return (
    <div>
      <FlagIcon
        className="no-underline select-none cursor-pointer text-center ml-2 mr-4"
        style={{
          marginTop: "0.68rem"
        }}
        code="DE"
        size={26}
      />
    </div>
  );
}

export default FlagMenu;
