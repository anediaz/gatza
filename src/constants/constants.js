const url =
  "https://api.flickr.com/services/rest/" +
  "?api_key=45cb4d81ed65f5a656f10046b761cc48" +
  "&extras=url_o%2Curl_m%2Curl_c%2Curl_l&format=json" +
  "&method=flickr.photosets.getPhotos&photoset_id=72157670317433475&user_id=114481456%40N05";

export const FLICKR = {
  url2: "https://api.flickr.com/services/rest/",
  url: url,
  api_key: "45cb4d81ed65f5a656f10046b761cc48",
  user_id: "114481456@N05"
};

export const EXTRAS = {
  small320: {
    url: "url_n",
    width: "width_n",
    height: "height_n"
  },
  original: { url: "url_o", width: "width_o", height: "height_o" },
  medium500: { url: "url_m", width: "width_m", height: "height_m" },
  medium800: { url: "url_c", width: "width_c", height: "height_c" },
  large1024: { url: "url_l", width: "width_l", height: "height_l" }
};

export const ERROR_TYPES = {
  flickrLoading: "Photo loading from Flickr"
};
