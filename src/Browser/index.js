/**
 @module Browser
 */
/**
 * @description It will return the device type
 * @param {}
 * @returns {string} Returns the devide type.
 * @example
 * const device = detectDeviceType()
 * // return 'Mobile' on mobile and 'Desktop' on desktop
 */
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)? 'Mobile': 'Desktop';

/**
 * @module BrowserStorage
 * @description Util to access storage API
 */
const browserStorage = (storageType = 'sessionStorage') => ({
  /**
   * @function setItem
   * @private
   * @memberof module:BrowserStorage
   * @param {string} key sessionStorage/localStorage key name, default is sessionStorage.
   * @param {*} value data to be stored in the key
   */
  setItem: (key, value) => window[storageType].setItem(key, JSON.stringify(value)),

  /**
   * @function getItem
   * @private
   * @memberof module:BrowserStorage
   * @param {string} key sessionStorage/localStorage key name
   */
  getItem: key => {
    const data = window[storageType].getItem(key);

    return data ? JSON.parse(data) : '';
  },
  /**
   * @function removeItem
   * @private
   * @memberof module:BrowserStorage
   * @param {string} key sessionStorage/localStorage key name
   */
  removeItem: key => window[storageType].removeItem(key),
  /**
   * @function clear
   * @private
   * @memberof module:BrowserStorage
   */
  clear: () => window[storageType].clear()
});

/**
 * @method sessionStorage
 * @description Util to access local storage API
 */
const sessionStorage = browserStorage('sessionStorage');

/**
 * @method localStorage
 * @description Util to access local storage API
 */
const localStorage = browserStorage('localStorage');

export {
  detectDeviceType,
  localStorage,
  sessionStorage
};
