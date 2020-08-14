
/**
 * @module Cookie
 * @description Util to access cookie API
 */
const cookie = {
  /**
   * @function setItem
   * @memberof module:Cookies
   * @private
   * @param {string} name sessionStorage key name
   * @param {*} value data to be stored in the key
   * @param {number} exdays days to remove the cookie
   */
  setItem: (name, value, exdays) => {
    const today = new Date();
    today.setTime(today.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires='+today.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  },

  /**
   * @function getItem
   * @private
   * @memberof module:Cookies
   * @param {string} name cookie key name
   */
  getItem: (name) => {
    const key = name + '=';
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
      let currentCookie = cookies[i];
      while (currentCookie.charAt(0) === ' ') {
        currentCookie = currentCookie.substring(1);
      }
      if (currentCookie.indexOf(key) === 0) {
        return currentCookie.substring(key.length, currentCookie.length);
      }
    }
    return '';
  }
};

/**
 * @function setCookie
 * @memberof module:Cookie
 * @param {string} name sessionStorage key name
 * @param {*} value data to be stored in the key
 * @param {number} exdays number of days to remove the cookie from browser
 * @example
 * import { setCookie } from 'js-utils-pack';
 *
 * setCookie('User', 'Sonu', 1)
 * // This will set a user cookie with Sonu as value and one day expiration time
 */
const setCookie = (name, value, exdays) => cookie.setItem(name, value, exdays);

/**
 * @function getCookie
 * @memberof module:Cookie
 * @param {string} name cookie key name
 * @example
 * import { getCookie } from 'js-utils-pack';
 *
 * getCookie('User');
 * // This will return 'Sonu'
 */
const getCookie = (name) => cookie.getItem(name);

export{ setCookie, getCookie };