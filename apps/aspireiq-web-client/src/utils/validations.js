/**
 * validateEmail
 * ------------------------------------------------------------------
 * @description - validates an email from a given string
 * @see - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * @param {string} email
 */
export function emailValidation(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
