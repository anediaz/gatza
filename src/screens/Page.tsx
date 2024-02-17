import React, { useState, Suspense, lazy } from 'react';
import { PhotoProps } from 'react-ikusi';
import { HashRouter, Route } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { MENU_DATA, PHOTOSET_IDS, WEBSITE_INFO } from '../services/data';
import { PhotoLoader } from '../components/PhotoLoader';
import './page.css';
import { CONFIGURATIONS } from '../services/constants';

const getFooter = () => {
  const clickableText = (
    <a href={WEBSITE_INFO.url} target="_blank" rel="noopener noreferrer" key={2}>
      {WEBSITE_INFO.author}
    </a>
  );
  const footerText = WEBSITE_INFO.text.split('$author');
  return [
    footerText[0] && <div key={1}>{footerText[0]}</div>,
    clickableText,
    footerText[1] && <div key={3}>{footerText[1]}</div>,
  ];
};

interface PhotosetsProps {
  home: PhotoProps[];
  makingof: PhotoProps[];
}

export const Page = () => {
  const [photosets, setPhotosets] = useState<PhotosetsProps>({ home: [], makingof: [] });

  const setPhotos = React.useCallback((photosetId: 'home' | 'makingof', photos: PhotoProps[]) => {
    if (photos.length && !photosets[photosetId].length) {
      setPhotosets({ ...photosets, [photosetId]: photos });
    }
  }, [photosets, setPhotosets]);

  const {
    home, liburua, makingof, berriak, info,
  } = MENU_DATA;

  const Liburua = lazy(() => import('./Liburua'));
  const Berriak = lazy(() => import('./Berriak'));
  const Info = lazy(() => import('./Info'));

  return (
    <HashRouter>
      <div className="page">
        <div className="header">
          <div className="logo">
            <div className="title" />
          </div>
          <Menu />
        </div>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Route
              exact
              path={home.path}
              render={() => (
                <PhotoLoader
                  photosetId={PHOTOSET_IDS.home}
                  photos={photosets.home}
                  setPhotos={(newPhotos) => setPhotos('home', newPhotos)}
                />
              )}
            />
            <Route path={liburua.path} component={Liburua} />
            <Route
              path={makingof.path}
              render={() => (
                <PhotoLoader
                  photosetId={PHOTOSET_IDS.makingof}
                  photos={photosets.makingof}
                  setPhotos={(newPhotos) => setPhotos('makingof', newPhotos)}
                  configurations={CONFIGURATIONS}
                />
              )}
            />
            <Route path={berriak.path} component={Berriak} />
            <Route path={info.path} component={Info} />
          </Suspense>
        </div>
        <div className="footer">{getFooter()}</div>
      </div>
    </HashRouter>
  );
};
