import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Footer from "./common/Footer";
import Header from "./common/Header";

import Masonry from "react-masonry-component";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

import img1 from "../assets/gallery/de/Artikel13Rolle.png";
import img1thumb from "../assets/gallery/de/thumb_Artikel13Rolle.png";
import img2 from "../assets/gallery/de/Das-Internet-danach.png";
import img2thumb from "../assets/gallery/de/thumb_Das-Internet-danach.png";
import img3 from "../assets/gallery/de/dasinternetdanach2.png";
import img3thumb from "../assets/gallery/de/thumb_dasinternetdanach2.png";
import img4 from "../assets/gallery/de/Facebookbanner1.png";
import img4thumb from "../assets/gallery/de/thumb_Facebookbanner1.png";
import img5 from "../assets/gallery/de/rettungsring2.png";
import img5thumb from "../assets/gallery/de/thumb_rettungsring2.png";

const galleryData = [
  {
    url: img1,
    thumbUrl: img1thumb,
  },
  {
    url: img2,
    thumbUrl: img2thumb,
  },
  {
    url: img3,
    thumbUrl: img3thumb,
  },
  {
    url: img4,
    thumbUrl: img4thumb,
  },
  {
    url: img5,
    thumbUrl: img5thumb,
  },
]

const masonryOptions = {
  //columnWidth: '.gallery-sizer',
  elementSelector: '.gallery-item',
  percentPosition: true,
}

function Gallery() {
  const ctx = useContext(LanguageContext);
  const [images, setImages] = useState(galleryData)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <div className="container mx-auto py-4">
          <div className="gallery-sizer w-1/5"></div>
          <Masonry options={masonryOptions}>
            {galleryData.map((i, idx) => 
              <div key={idx} className="gallery-item w-1/4 p-1" onClick={() => {setLightboxIndex(idx); setLightboxOpen(true)}}>
                <img className="w-full" src={i.thumbUrl}></img>
              </div>
            )}
          </Masonry>
          {lightboxOpen && <Lightbox
            mainSrc={images[lightboxIndex].url}
            mainSrcThumbnail={images[lightboxIndex].thumbUrl}
            nextSrc={images[(lightboxIndex + 1) % images.length].url}
            nextSrcThumbnail={images[(lightboxIndex + 1) % images.length].thumbUrl}
            prevSrc={images[(lightboxIndex + images.length - 1) % images.length].url}
            prevSrcThumbnail={images[(lightboxIndex + images.length - 1) % images.length].thumbUrl}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          />}
        </div>
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default Gallery;
