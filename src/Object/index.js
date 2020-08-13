import { FIRST_INDEX } from '../Constant';
import { log } from '../Logger/index';

/** @module Object */
/**
 * @description Check if passed data is an valid Object
 * @function isObject
 * @example
 * // Calls the `isObject` function to validate data
 *
 * isObject([1,2,3])
 * // return false
 *
 * isObject('This is a string')
 *  // return false
 *
 * isObject({name: Array})
 * // return true
 *
 * isObject(null)
 * // return false
 *
 * isObject(undefined)
 * // return false
 * @param data {any} Data to be validate
 * @returns {boolean} true | false
 */
function isObject (data) {
  return (typeof data === 'object' && !Array.isArray(data) && data !== null);
}

/**
 * @description Get Key name of a value from Object
 * @param {Object} obj
 * @param {string | number} value
 * @returns {string} Object key name based on passed value
 * @example
 * getKeyNameByValue({name: "Person", age: 30}, 30);
 * // return age
 *
 * getKeyNameByValue({name: "Person", age: 30}, 'Person');
 * // return name
 *
 * getKeyNameByValue({name: "Person", age: 30}, 'age');
 * // return null
 */
function getKeyNameByValue ( obj, value) {
  for( const prop in obj ) {
    if( obj.hasOwnProperty( prop ) ) {
      if( obj[ prop ] === value ) {
        return prop;
      }
    }
  }
  return null;
}

/**
 *
 * @description Remove an object from array based on id
 * @param {Arra<Object>} arrOfObj
 * @param {string | number} id
 * @returns {Array} New Array with updated Objects
 * @example
 * const arr = [{name: "Test", Loc: "Anywhere", id: 1, area: "Delhi"},
 * {id: 2, name: "User", location: "Delhi"}];
 *
 * removeObjFromArray(arr, 1);
 * // return [{id: 2, name: "User", location: "Delhi"}]
 */
function removeObjFromArray (arrOfObj, id) {
  try{
    const toDelete = new Set([id]);
    return arrOfObj.filter(obj => !toDelete.has(obj.id));
  } catch (e) {
    log('Error in removeObjFromArray :: ', e);
  }
  return arrOfObj;
}


/**
 * @description Get trimmed Object based on Keys
 * @param {Object} object
 * @param {Array<string>} keys
 * @returns {Object} New object with passed keys
 * @example
 * const Obj = {name: "Test", Loc: "Anywhere", id: 1, area: "Delhi"}
 *
 * sliceObjectKeys(Obj, ['Loc'])
 * // return {Loc: "Anywhere"}
 *
 * sliceObjectKeys(Obj, ['Loc', "id", "name"])
 * // return {name: "Test", Loc: "Anywhere", id: 1}
 */
function sliceObjectKeys (object, keys) {
  return Object.keys(object)
    .filter(function (key) {
      return keys.indexOf(key) >= FIRST_INDEX;
    })
    .reduce(function (acc, key) {
      acc[key] = object[key];
      return acc;
    }, {});
}

/**
 * @description Replaces the names of multiple object keys
 * with the values provided
 * @param {Object} keysMap
 * @param {Object} obj
 * @returns {Object} New object with updated key names
 * @example
 * const obj = { name: 'John', job: 'Front-End Master', shoeSize: 100 };
 * renameObjKeys({ name: 'firstName', job: 'passion' }, obj);
 * // return { firstName: 'John', passion: 'Front-End Master', shoeSize: 100 }
 */
function renameObjKeys (keysMap, obj) {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
}

export {
  isObject,
  getKeyNameByValue,
  removeObjFromArray,
  sliceObjectKeys,
  renameObjKeys
};