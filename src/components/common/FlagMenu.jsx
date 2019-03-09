import React from "react";
import { FlagIcon } from "react-flag-kit";

function FlagMenu() {
  return (
    <div>
      <FlagIcon
        className="text-center px-2 py-2 m-2 no-underline select-none"
        code="DE"
        size={36}
      />
    </div>
  );
}

export default FlagMenu;
