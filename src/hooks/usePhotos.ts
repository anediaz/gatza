import { useEffect, useState } from 'react';
import { PhotoProps } from 'react-ikusi';
import { SizeKeys } from '../services/constants';
import { getPhotos } from '../services/FlickrAPI';
import { transformResult } from '../helpers/transformResult';

const defDefault = SizeKeys.small;
const bigDefault = SizeKeys.large;

interface usePhotosProps {
  photosetId:string,
  def?:SizeKeys,
  big?: SizeKeys,
  shouldFetch?: boolean,
}

export const usePhotos = ({
  photosetId, def = defDefault, big = bigDefault, shouldFetch = true,
}:usePhotosProps) => {
  const [photosState, setPhotosState] = useState({ isPhotosFailed: false, photos: <PhotoProps[]>[] });
  useEffect(() => {
    // method that fetches and transforms photos to the right format
    const loadPhotos = async (id: string) => {
      const params = [
        `url${defDefault}`,
        `url${bigDefault}`,
      ];
      const result = await getPhotos(id, params);
      if (typeof result === 'string') {
        setPhotosState({ isPhotosFailed: true, photos: [] });
      } else {
        const transformed = transformResult(result, def, big);
        setPhotosState({ isPhotosFailed: false, photos: transformed });
      }
    };
    if (shouldFetch) {
      loadPhotos(photosetId);
    }
  }, [photosetId, def, big, shouldFetch]);

  return photosState;
};
