import React, { useState, useEffect } from "react";
import FlickrAPI from "../services/FlickrAPI";
import data from "../data/data.json";
import Gallery from "../components/Gallery";
import { EXTRAS } from "../constants/constants";

const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

const Xeheki = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    FlickrAPI.getPhotos(data.xeheki, urlsBySize).then(
      result => setPhotos(result),
      error => console.log("error =" + error)
    );
  }, []);
  return <Gallery photos={photos} size={def.url} lightboxSize={big.url} />;
};
export default Xeheki;
