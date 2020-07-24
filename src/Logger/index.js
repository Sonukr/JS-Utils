/* eslint-disable no-console */
const styles =
  'font-size: 14px;' +
  'border-radius: 5px; color: #ffffff;'+
  'padding: 4px 16px 4px 8px; line-height: 30px;';


/**
 * Logs a message and object on console, use this instead of console.log
 * @param message
 * @param data
 */
export function log (message, data) {
  if (data) {

    console.log(
      `%c ${message} `, `${styles} background: #5a6268;`, data
    );
  } else {

    console.log(
      `%c ${message} `, `${styles} background: #5a6268;`
    );
  }
}

/**
 * Logs error on console, use this instead of console.log
 * @param message
 * @param error
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
 * @param message
 * @param hard {boolean} - should this be a strong warning?
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