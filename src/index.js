import { log, logError, logDeprecation } from './Logger';
import { isArray } from './Array';
import { isObject, sliceObjectKeys, removeObjFromArray, renameObjKeys } from './Object';
import { getFileName, getFileSize, getFileType } from './File';
import { detectDeviceType, localStorage, sessionStorage } from './Browser';
import { sortCharactersInString, decapitalize } from './String';
import { getCookies, setCookies } from './Cookies';


module.exports = {
  getFileName,
  getFileSize,
  getFileType,
  isArray,
  isObject,
  sliceObjectKeys,
  removeObjFromArray,
  renameObjKeys,
  log,
  logError,
  logDeprecation,
  detectDeviceType,
  localStorage,
  sessionStorage,
  sortCharactersInString,
  decapitalize,
  getCookies,
  setCookies
};