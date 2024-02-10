import React from "react";
import './berriak.css';
import { berriak } from "../data/data";

const Berriak = () => {
  const openImg = src => window.open(src, "_blank");

  return (
    <div className="berriak">
      <div className="header" />
      <div className="video-displayer">
        <iframe
          src={berriak.videoUrl}
          frameBorder="0"
          allowFullScreen
          title="videoDisplayer"
          className="content"
        ></iframe>
      </div>
      <div className="clickable-media">
        <div className="content">
          {berriak.albisteak.map((item, index) => (
            <img
              src={`${process.env.PUBLIC_URL}/${item.img}`}
              key={index}
              onClick={() => openImg(item.src)}
              alt={`media-${index}`}
              className="article"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berriak;
