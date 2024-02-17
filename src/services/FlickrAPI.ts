import { FLICKR } from './secret.constants';

export const getPhotos = async (photoSetId: string, sizes: string[]) => {
  const sizesParam = sizes.join(',');
  const getPhotosUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR.apiKey}&extras=${sizesParam}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photoSetId}&user_id=${FLICKR.userId}`;
  const response = await fetch(getPhotosUrl);
  return response && response.ok
    ? (await response.json()).photoset.photo
    : `Error while reading photoset=${photoSetId}`;
};
