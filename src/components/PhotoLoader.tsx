import React, { useEffect } from 'react';
import { Gallery, PhotoProps, ConfigurationProps } from 'react-ikusi';
import { usePhotos } from '../hooks/usePhotos';

interface PhotoLoaderProps {
  photosetId: string;
  configurations?: ConfigurationProps[];
  photos: PhotoProps[];
  setPhotos: (photos: PhotoProps[]) => void;
}

export const PhotoLoader = ({
  photosetId,
  configurations,
  photos,
  setPhotos,
}: PhotoLoaderProps) => {
  const { photos: fetchPhotos } = usePhotos({ photosetId, shouldFetch: !photos.length });

  useEffect(() => {
    if (!photos.length && fetchPhotos.length) {
      setPhotos(fetchPhotos);
    }
  }, [photos, fetchPhotos]);

  return <Gallery photos={photos} configurations={configurations} />;
};
