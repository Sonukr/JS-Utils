/* eslint-disable no-console */
const styles =
  'font-size: 14px;' +
  'border-radius: 2px; color: #ffffff;'+
  'padding: 3px 5px 3px 5px; line-height: 16px;';
/**
 * Logs a message and object on console, use this instead of console.log
 * @param {string} message
 * @param {any} data
 * @example log('This is an apple', 'iPhone')
 */
export function log (message, data) {
  if (data) {

    console.log(
      `%c ${message} `, `${styles} background: #001628;`, data
    );
  } else {

    console.log(
      `%c ${message} `, `${styles} background: #001628;`
    );
  }
}

/**
 * Logs error on console, use this instead of console.log
 * @param {string} message
 * @param {string} error
 * @example logError('This is an error', '3+2=6')
 */
export function logError (message, error) {
  // always log errors, even in production env
  if (error) {
    console.error(
      `%c ${message} `, `${styles} background: #dc3545;`, error
    );
  } else {
    console.error(
      `%c ${message} `, `${styles} background: #dc3545;`
    );
  }
}

/**
 * Logs a deprecation message
 * @param message {string}
 * @param hard {boolean} - should this be a strong warning?
 * @example
 * logDeprecation('This method is about to deprecate')
 * logDeprecation('This method is about to deprecate', true)
 */
export function logDeprecation (message, hard=false) {
  if (hard) {
    console.error(
      '%c --------DEPRECATION WARNING--------',
      `${styles} background: #dc3545;`, `\n${message}`
    );
  } else {
    console.warn(
      '%c --------DEPRECATION WARNING--------',
      `${styles} background: #ffc107;`, `\n ${message}`
    );
  }
}