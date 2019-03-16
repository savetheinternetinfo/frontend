import React from "react";
import parse from "html-react-parser";

import { useStateValue } from "../contexts/StateContext";

function AboutUs() {
  const [{ translation }] = useStateValue();

  return (
    <div className="container mx-auto -mt-10 px-6 py-8">
      <h1>{translation.about_us_heading}</h1>

      <h3>{translation.about_us_1_heading}</h3>

      <p>{parse(translation.about_us_1_text)}</p>

      <h3>{translation.about_us_2_heading}</h3>
      <p>{parse(translation.about_us_2_text)}</p>

      <h3>{translation.about_us_3_heading}</h3>
      <p>{parse(translation.about_us_3_text)}</p>

      <h3>{translation.about_us_4_heading}</h3>
      <p>{parse(translation.about_us_4_text)}</p>

      <h3>{translation.about_us_5_heading}</h3>
      <p>{parse(translation.about_us_5_text)}</p>

      <h3>{translation.about_us_6_heading}</h3>
      <p>{parse(translation.about_us_6_text)}</p>

      <h3>{translation.about_us_7_heading}</h3>
      <p>{parse(translation.about_us_7_text)}</p>
    </div>
  );
}

export default AboutUs;
