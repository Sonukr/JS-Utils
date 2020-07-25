/**
 * @description Check if passed data is an valid array
 * @function isArray
 * @example
 * // Calls the `isArray` function to validate data
 * isArray([1,2,3]) 
 * // return true
 * isArray('This is a string') 
 * // return false
 * isArray({name: Array}) 
 * // return false
 * isArray(null) 
 * // return false
 * isArray(undefined) 
 * // return false
 * @param array {any} Data to be validate
 * @returns {boolean} True | False
 */
export function isArray (array) {
  if(array) {
    return Array.isArray(array);
  }
  return false;
}
