import React from "react";
import * as Feather from "react-feather";

function SocialButton({ icon, link }) {
  const IconComponent = Feather[icon];
  const classes = "-tr-45 focus:outline-none text-center select-none";

  return (
    <a href={link}>
      <div
        className="m-3 tr-45 bezier border border-1 rounded-sm text-white cursor-pointer hover:text-blue hover:bg-orange-lighter hover:border-orange-lighter"
        style={{
          height: "2.25rem",
          width: "2.25rem"
        }}
      >
        <IconComponent
          className={classes}
          style={{
            "margin-left": "0.5rem",
            "margin-top": "0.5rem"
          }}
          size={18}
        />
      </div>
    </a>
  );
}

export default SocialButton;
