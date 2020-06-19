function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length === 5 && !isNaN(zipToValidate) && !zipToValidate.includes(' ')) {
      return true;
    } else {
      return false;
    }
}
