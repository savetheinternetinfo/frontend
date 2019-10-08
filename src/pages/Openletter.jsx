import React, { useState, useEffect, useRef } from "react";
import { useStateValue } from "../contexts/StateContext";
import Masonry from "react-masonry-component";
import config from "../config";

import parse from "html-react-parser";
import axios from "axios";

const masonryOptions = {
  //columnWidth: '.gallery-sizer',
  elementSelector: ".gallery-item",
  percentPosition: true
};

function Supporters() {
  const [{ translation, language }] = useStateValue();
  const [supporters, setSupporters] = useState(null);

  useEffect(() => {
    if (supporters === null) {
      axios(config.api.supporters)
        .then(res => {
          setSupporters(
            res.data.supporter.filter(e => typeof e.url === "undefined")
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      {supporters !== null && (
        <div className="container mx-auto px-6 py-8">
          <h2>{translation["supporters_letter"]}</h2>
          <p>
            {translation.supporters_letter_text &&
              parse(translation.supporters_letter_text)}
          </p>
          <Masonry options={masonryOptions} updateOnEachImageLoad>
            {supporters.map((supporter, idx) => (
              <div
                key={idx}
                className="gallery-item w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="w-full text-center mt-4 break-word overflow-x-hidden">
                  {supporter.name}
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
}

export default Supporters;
