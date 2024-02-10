import React, { useState, Suspense, lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import Menu from "../components/Menu";
import { home, makingof, menu, webSiteInfo } from "../data/data.json";
import PhotoLoader from "../components/PhotoLoader";
import './page.css';

const getFooter = () => {
  const clickableText = (
    <a href={webSiteInfo.url} target="_blank" rel="noopener noreferrer" key={2}>
      {webSiteInfo.author}
    </a>
  );
  const footerText = webSiteInfo.text.split("$author");
  return [
    footerText[0] && <div key={1}>{footerText[0]}</div>,
    clickableText,
    footerText[1] && <div key={3}>{footerText[1]}</div>,
  ];
};

const Page = () => {
  const [photosets, setPhotosets] = useState({});

  const setPhotos = (photosetId, photos) => {
    setPhotosets({ ...photosets, [photosetId]: photos });
  };
  const configurations = [
    {minWidth: 1024, cols: 7, margin: 5},
    { minWidth: 480, maxWidth: 1023, cols: 7, margin: 1 },
    { maxWidth: 479, cols: 4, margin: 1 },
  ];

  const Liburua = lazy(() => import("./Liburua"));
  const Berriak = lazy(() => import("./Berriak"));
  const Info = lazy(() => import("./Info"));

  return (
    <HashRouter>
      <div className="page">
        <div className="header">
          <div className="logo">
            <div className="title" />
          </div>
          <Menu items={menu} />
        </div>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Route
              exact
              path={menu[0].path}
              render={() => (
                <PhotoLoader
                  photosetId={home}
                  photos={photosets[home]}
                  setPhotos={setPhotos}
                />
              )}
            />
            <Route path={menu[1].path} component={Liburua} />
            <Route
              path={menu[2].path}
              render={() => (
                <PhotoLoader
                  photosetId={makingof}
                  photos={photosets[makingof]}
                  setPhotos={setPhotos}
                  configurations={configurations}
                />
              )}
            />
            <Route path={menu[3].path} component={Berriak} />
            <Route path={menu[4].path} component={Info} />
          </Suspense>
        </div>
        <div className="footer">{getFooter()}</div>
      </div>
    </HashRouter>
  );
};

export default Page;
