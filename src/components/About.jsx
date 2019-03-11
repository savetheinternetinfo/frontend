import React from "react";
import {useStateValue} from '../contexts/StateContext';

function About() {
  const [{translation}] = useStateValue();

  return (
    <div className="container mx-auto py-16">
      <h1>{translation.about_us_heading}</h1>
      
      <h3>{translation.about_us_1_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_1_text}}></p>
      
      <h3>{translation.about_us_2_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_2_text}}></p>
      
      <h3>{translation.about_us_3_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_3_text}}></p>
      
      <h3>{translation.about_us_4_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_4_text}}></p>
      
      <h3>{translation.about_us_5_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_5_text}}></p>
      
      <h3>{translation.about_us_6_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_6_text}}></p>
      
      <h3>{translation.about_us_7_heading}</h3>
      <p dangerouslySetInnerHTML={{__html: translation.about_us_7_text}}></p>
    </div>
  );
}

export default About;
