const API_KEY = "45cb4d81ed65f5a656f10046b761cc48";
const USER_ID = "114481456@N05";
export const fetchUrl = (photosetId, extras) =>
  `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&extras=${extras}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photosetId}&user_id=${USER_ID}`;
export const EXTRAS = {
  small320: {
    url: "url_n",
    width: "width_n",
    height: "height_n",
  },
  original: { url: "url_o", width: "width_o", height: "height_o" },
  medium500: { url: "url_m", width: "width_m", height: "height_m" },
  medium800: { url: "url_c", width: "width_c", height: "height_c" },
  large1024: { url: "url_l", width: "width_l", height: "height_l" },
};

export const ERROR_TYPES = {
  flickrLoading: "Photo loading from Flickr",
};

// Google Analytics
export const googleTrackId = "UA-179302321-2";
