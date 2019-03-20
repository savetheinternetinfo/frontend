import React, { useState, useEffect } from "react";

import Masonry from "react-masonry-component";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import axios from "axios";

import config from "../config";

const masonryOptions = {
  //columnWidth: '.gallery-sizer',
  elementSelector: ".gallery-item",
  percentPosition: true
};

function Gallery() {
  const [images, setImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const ct = axios.CancelToken.source();
    axios
      .get(config.api.gallery, {
        cancelToken: ct.token
      })
      .then(res => {
        setImages(res.data.gallery);
      });
    return ct.cancel;
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-auto py-4">
        <div className="gallery-sizer w-1/5" />
        <Masonry options={masonryOptions}>
          {images.map((i, idx) => (
            <div
              key={idx}
              lang={i.language}
              className="gallery-item p-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              onClick={() => {
                setLightboxIndex(idx);
                setLightboxOpen(true);
              }}
            >
              <img
                className="block w-full cursor-pointer"
                src={i.thumbnail}
                alt=""
              />
            </div>
          ))}
        </Masonry>
        {lightboxOpen && (
          <Lightbox
            mainSrc={images[lightboxIndex].image}
            mainSrcThumbnail={images[lightboxIndex].thumbnail}
            nextSrc={images[(lightboxIndex + 1) % images.length].image}
            nextSrcThumbnail={
              images[(lightboxIndex + 1) % images.length].thumbnail
            }
            prevSrc={
              images[(lightboxIndex + images.length - 1) % images.length].image
            }
            prevSrcThumbnail={
              images[(lightboxIndex + images.length - 1) % images.length]
                .thumbnail
            }
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex(
                (lightboxIndex + images.length - 1) % images.length
              )
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default Gallery;
