import { log, logError, logDeprecation } from './Logger';
import { isArray } from './Array';
import { isObject, sliceObjectKeys, removeObjFromArray, renameObjKeys } from './Object';
import { getFileName, getFileSize, getFileType } from './File';
import { detectDeviceType } from './Browser';
import { sortCharactersInString, decapitalize } from './String';
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
  sortCharactersInString,
  decapitalize
};