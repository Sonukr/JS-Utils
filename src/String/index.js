/** @module String */
/**
 * @description Alphabetically sorts the characters in a string.
 * @param {String} str
 * @returns {String} Alphabetically sorted string.
 * @example
 * sortCharactersInString('cabbage');
 * // return 'aabbceg'
 */
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

/**
 * @description Decapitalizes the first letter of a string.
 * @param {String} String
 * @param {Boolean} upperRest
 * @example
 * decapitalize('FooBar');
 * // return'fooBar'
 *
 * decapitalize('FooBar', true);
 * // return 'fOOBAR'
 */
const decapitalize = ([first, ...rest], upperRest = false) => first.toLowerCase() +
(upperRest ? rest.join('').toUpperCase() : rest.join(''));

export {
  sortCharactersInString,
  decapitalize
};