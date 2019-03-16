import React from "react";

function LoadAnimation() {
  return (
    <div className="loading-container m-auto absolute pin">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </div>
  );
}

export default LoadAnimation;
