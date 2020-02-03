import React, { useEffect } from "react";
import FlickrAPI from "../services/FlickrAPI";
import { EXTRAS } from "../constants/constants";
import Gallery from "./Gallery";

const { small320: def, large1024: big } = EXTRAS;
const photoInfos = {
  default: def.url,
  big: big.url,
  width: def.width,
  height: def.height
};
const urlsBySize = `${def.url},${big.url}`;

const PhotoLoader = ({
  photosetId,
  photos = [],
  setPhotos,
  configurations
}) => {
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(photosetId, urlsBySize).then(
        result => setPhotos(photosetId, result),
        error => console.log("error =" + error)
      );
    }
  });

  return (
    <Gallery
      photos={photos}
      photoInfos={photoInfos}
      configurations={configurations}
    />
  );
};

export default PhotoLoader;
