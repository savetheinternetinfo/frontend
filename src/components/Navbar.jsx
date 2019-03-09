/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavLink from "./common/NavLink";

function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6" />
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <NavLink text="About us" route="/" />
          <NavLink text="Gallery" route="/" />
          <NavLink text="Memes" route="/" />
          <NavLink text="About" route="/" />
          <NavLink text="Demos" route="/" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
