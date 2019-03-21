import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  let classNames =
    "bezier px-4 py-3 border border-1 rounded-sm border-orange bg-transparent shadow m-2 text-orange hover:bg-orange hover:text-blue-dark cursor-pointer focus:outline-none select-none";
  if (props.className) classNames += " " + props.className;
  return typeof props.link === "undefined" ? (
    <a className={`${classNames} no-underline`} href={props.href}>
      {props.text}
    </a>
  ) : (
    <Link to={props.link}>
      {console.log("hi")}
      <button className={classNames} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
