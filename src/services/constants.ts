export enum SizeKeys {
  small = '_n',
  original = '_o',
  medium500 = '_m',
  medium800 = '_c',
  large='_l'
}

export const CONFIGURATIONS = [
  { minWidth: 1024, cols: 7, margin: 5 },
  {
    minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
  },
  { maxWidth: 479, cols: 4, margin: 1 },
];

// Google Analytics
export const googleTrackId = 'UA-179302321-2';

/**
 * returns the union of the types of each value inside
 * an object type.
 * Similar to the `keyof` keyword but extracts the values.
 */
export type ValueOf<T> = T extends readonly unknown[] ? T[number] : T[keyof T];

export const LOCALES = [
  'EU' as const,
  'ES' as const,
  'EN' as const,
  'FR' as const,
  'CA' as const,
];
export type LocaleType = ValueOf<typeof LOCALES>;
export const LANGUAGES:Record<LocaleType, string> = {
  EU: 'euskara',
  ES: 'castellano',
  EN: 'english',
  FR: 'français',
  CA: 'català',
};
