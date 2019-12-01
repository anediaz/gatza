import { FLICKR } from "../constants/constants.js";

const getUrl = (photoSetId, sizes) =>
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR.api_key}&photoset_id=${photoSetId}&extras=${sizes}&format=json&nojsoncallback=true`;

async function getPhotos(photoSetId, size) {
  const response = await fetch(getUrl(photoSetId, size));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
}

export default {
  getPhotos
};
