import { PhotoProps } from 'react-ikusi';
import { SizeKeys } from '../services/constants';

const urlKey = (key:string) => `url${key}`;
const widthKey = (key:string) => `width${key}`;
const heightKey = (key: string) => `height${key}`;
const urls: string[] = [];
const sizes: string[] = [];
Object.values(SizeKeys).forEach((k: string) => {
  urls.push(urlKey(k));
  sizes.push(widthKey(k));
  sizes.push(heightKey(k));
});

type FlickrResult = { [K in typeof urls[number]]: string }
  & { [K in typeof sizes[number]]: number }
  & {
    id: string;
    tags?: string;
  };

export const transformResult = (result: FlickrResult[], def: SizeKeys, big: SizeKeys):PhotoProps[] => {
  const urlAttribute = urlKey(def);
  const widthAttribute = widthKey(def);
  const heightAttribute = heightKey(def);
  const bigUrlAttribute = urlKey(big);
  return result.map((r) => ({
    src: r[urlAttribute],
    width: r[widthAttribute],
    height: r[heightAttribute],
    bigSrc: r[bigUrlAttribute],
    id: r.id,
  }));
};
