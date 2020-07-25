import { log, logError, logDeprecation } from './Logger';
import { isArray } from './Array';
import { isObject, sliceObjectKeys, removeObjFromArray } from './Object';
import { getFileName, getFileSize, getFileType } from './File';


module.exports = {
  getFileName,
  getFileSize,
  getFileType,
  isArray,
  isObject,
  sliceObjectKeys,
  removeObjFromArray,
  log,
  logError,
  logDeprecation
};