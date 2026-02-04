import React from "react";

import img1 from "../assets/gallery/gallery1.jpeg";
import img2 from "../assets/gallery/gallery2.jpeg";
import img3 from "../assets/gallery/gallery3.jpeg";
import img4 from "../assets/gallery/gallery4.jpeg";
import img5 from "../assets/gallery/gallery5.jpeg";
import img6 from "../assets/gallery/gallery6.jpeg";
import img7 from "../assets/gallery/gallery7.jpeg";
import img8 from "../assets/gallery/gallery8.jpeg";
import img9 from "../assets/gallery/gallery9.jpeg";
import img10 from "../assets/gallery/gallery10.jpeg";

function Gallery() {
  return (
    <div className="page">
      <h1>Gallery</h1>
      <p>Photos from temple festivals, poojas, and sacred events.</p>

      <div className="gallery-grid">
        <img src={img1} alt="Temple event 1" />
        <img src={img2} alt="Temple event 2" />
        <img src={img3} alt="Temple event 3" />
        <img src={img4} alt="Temple event 4" />
        <img src={img5} alt="Temple event 5" />
        <img src={img6} alt="Temple event 6" />
        <img src={img7} alt="Temple event 7" />
        <img src={img8} alt="Temple event 8" />
        <img src={img9} alt="Temple event 9" />
        <img src={img10} alt="Temple event 10" />
      </div>
    </div>
  );
}

export default Gallery;
