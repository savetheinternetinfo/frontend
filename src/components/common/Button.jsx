import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const classNames =
    "bezier px-4 py-3 border border-1 rounded-sm border-orange-lighter bg-transparent shadow m-2 text-orange-lighter hover:bg-orange-lighter hover:text-blue cursor-pointer focus:outline-none select-none";
  return typeof props.link === "undefined" ? (
    <a className={`${classNames} no-underline`} href={props.href}>
      {props.text}
    </a>
  ) : (
    <Link to={props.link}>
      <button className={classNames} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
