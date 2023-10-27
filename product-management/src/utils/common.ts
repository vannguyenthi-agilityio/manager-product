/**
 *
 * @param {number} pxValue - the number of px for converting to rem
 * @returns "1rem" - with pxValue is 16px
 */
export const convertPxToRem = (pxValue: number) => {
  const baseSize = window
    .getComputedStyle(document.getElementsByTagName('html')[0])
    .getPropertyValue('font-size')
    .slice(0, 2);
  return `${pxValue / Number(baseSize)}rem`;
};

/**
 * Checks if a value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 *    isEmpty({key1: undefined, key2: ''}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */

export const isEmpty = (value: any): value is null | undefined | '' => {
  return (
    value === null || // check for null
    value === undefined || // check for undefined
    value === '' || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === 'object' && Object.keys(value).length == 0) || // check for empty object
    Object.values(value).every((e) => !e) // check for object having all empty values
  );
};

/**
 * Convert string to capitalize
 * @param {string} value string to convert
 * @returns {string} string converted to capitalize
 */
export const convertStringToCapitalize = (value: string) => {
  const words = value.split(' ');
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join(' ');
};
