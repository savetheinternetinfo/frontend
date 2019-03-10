import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const classNames =
    "px-4 py-3 rounded bg-orange shadow m-2 font hover:bg-orange-lighter focus:outline-none select-none";
  return typeof props.link === "undefined" ? (
    <button className={classNames} onClick={props.onClick}>
      {props.text}
    </button>
  ) : (
    <Link to={props.link}>
      <button className={classNames} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
