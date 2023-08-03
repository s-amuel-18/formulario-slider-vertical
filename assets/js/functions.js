function isValidZipCode(zipCode) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
}

function isEmail(email = null) {
  const emailRegExp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return email ? emailRegExp.test(email) : false;
}
