import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return typeof props.link === "undefined" ? (
    <button
      className="px-4 py-3 rounded bg-orange shadow m-2 font hover:bg-orange-lighter"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  ) : (
    <Link to={props.link}>
      <button
        className="px-4 py-3 rounded bg-orange shadow m-2 font hover:bg-orange-lighter"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
