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



export {
  detectDeviceType
};