/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './berriak.css';
import { BERRIAK_DATA } from '../services/data';

const Berriak = () => (
  <div className="berriak">
    <div className="header" />
    <div className="video-displayer">
      <iframe
        src={BERRIAK_DATA.videoUrl}
        frameBorder="0"
        allowFullScreen
        title="videoDisplayer"
        className="content"
      />
    </div>
    <div className="clickable-media">
      <div className="content">
        {BERRIAK_DATA.albisteak.map(({ id, img, src }) => (
          <img
            src={`${process.env.PUBLIC_URL}/${img}`}
            alt={`media-${id}`}
            className="article"
            onClick={() => window.open(src, '_blank')}
            key={id}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Berriak;
