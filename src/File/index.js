
import { ONE, TWO, FILE_SIZE_KB, FILE_SIZE_MB,
  FILE_SIZE_GB
} from '../Constant/constant';

/**
 * @description Get actual file name from a system file url
 * @param {string} url
 * @returns {string} A string with actual file name
 * @example
 * const fileName = "/Users/sonu/Work/Private/JS-Utils/src/index.js";
 *
 * getFileName(fileName)
 * // return "index.js"
 */
export function getFileName (url) {
  return url.substr(url.lastIndexOf('/')+ONE);
}

/**
 *
 * @description Get File type extension
 * @param {string} url
 * @returns {string} Type of file
 * @example
 * const fileName = "/Users/sonu/Work/Private/JS-Utils/src/index.js";
 *
 * getFileType(fileName)
 * // return "js"
 */
export function getFileType (url) {
  return (url.substr(url.lastIndexOf('.')+ONE)).toLowerCase();
}

/**
 * @description Get File Size in GB,MB, KB and bytes
 * @param {number} size
 * @returns {string}  file size in GB, MB, KB, bytes and byte
 * @example
 * getFileSize(230000)
 * // return "224.61 KB"
 *
 * getFileSize(2300000)
 * // return "2.19 MB"
 *
 * getFileSize(2300000000)
 * // return "2.14 GB"
 */
export function getFileSize (size) {
  let fileSize ='';
  if(size>=FILE_SIZE_GB) {
    fileSize=(size/FILE_SIZE_GB).toFixed(TWO)+' GB';
  } else if (size>=FILE_SIZE_MB) {
    fileSize=(size/FILE_SIZE_MB).toFixed(TWO)+' MB';
  } else if (size>=FILE_SIZE_KB) {
    fileSize=(size/FILE_SIZE_KB).toFixed(TWO)+' KB';
  } else if (size>ONE) {
    fileSize=size+' bytes';
  } else if (size===ONE) {
    fileSize=size+' byte';
  } else {
    fileSize='0 byte';
  }
  return fileSize;
}