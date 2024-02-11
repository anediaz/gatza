import React, { useState, Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { MENU_DATA, PHOTOSET_IDS, WEBSITE_INFO } from '../services/data';
import { PhotoLoader } from '../components/PhotoLoader';
import './page.css';

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

export const Page = () => {
  const [photosets, setPhotosets] = useState({ home: [], makingof: [] });

  const setPhotos = (photosetId:string, photos:any[]) => {
    setPhotosets({ ...photosets, [photosetId]: photos });
  };
  const configurations = [
    { minWidth: 1024, cols: 7, margin: 5 },
    {
      minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
    },
    { maxWidth: 479, cols: 4, margin: 1 },
  ];

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
                  setPhotos={setPhotos}
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
                  setPhotos={setPhotos}
                  configurations={configurations}
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
