import React, { useEffect } from 'react';
import { Gallery, PhotoProps, ConfigurationProps } from 'react-ikusi';
import FlickrAPI from '../services/FlickrAPI';
import { EXTRAS } from '../services/constants';

const { small320: def, large1024: big } = EXTRAS;
const urlsBySize = `${def.url},${big.url}`;

interface PhotoLoaderProps {
  photosetId: string;
  photos?: PhotoProps[];
  setPhotos: (photosetId: string, p:any[]) => void
  configurations?: ConfigurationProps[],
}

const transformResult = (result:any[]):any => result.map((r) => ({
  src: r[def.url],
  width: r[def.width],
  height: r[def.height],
  bigSrc: r[big.url],
}));

export const PhotoLoader = ({
  photosetId,
  photos,
  setPhotos,
  configurations,
}:PhotoLoaderProps) => {
  useEffect(() => {
    if (!photos || !photos.length) {
      FlickrAPI.getPhotos(photosetId, urlsBySize).then(
        (result) => setPhotos(photosetId, transformResult(result)),
        (error) => console.log(`error =${error}`),
      );
    }
  });

  return <Gallery photos={photos || []} configurations={configurations} />;
};
