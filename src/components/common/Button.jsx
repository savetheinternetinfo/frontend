import React from "react";

function Button(props) {
  return (
    <button
      className="px-4 py-3 rounded bg-orange shadow m-4 font hover:bg-orange-lighter"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
