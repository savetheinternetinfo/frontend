import React from "react";
import * as Feather from "react-feather";

function SocialButton({ icon, link, color, hoverColor, hoverBackground, hoverBorder }) {
  const IconComponent = Feather[icon];
  const classes = "-tr-45 focus:outline-none text-center select-none";
  if (!color) color = 'white';
  if (!hoverColor) hoverColor = 'orange-lighter';
  if (!hoverBackground) hoverBackground = 'blue-dark';
  if (!hoverBorder) hoverBorder = 'blue-dark';

  return (
    <a target="_blank" href={link}>
      <div
        className={`m-3 tr-45 bezier border border-1 border-${color} text-${color} rounded-sm text-white cursor-pointer text-center hover:text-${hoverColor} hover:bg-${hoverBackground} hover:border-${hoverBorder}`}
        style={{
          height: "2.25rem",
          width: "2.25rem"
        }}
      >
        <IconComponent
          className={classes}
          style={{
            marginTop: "0.5rem"
          }}
          size={18}
        />
      </div>
    </a>
  );
}

export default SocialButton;
