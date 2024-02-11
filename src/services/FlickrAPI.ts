import { fetchUrl } from './constants';

async function getPhotos(photoSetId:string, size:string) {
  const response = await fetch(fetchUrl(photoSetId, size));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

export default {
  getPhotos,
};
