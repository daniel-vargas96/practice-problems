function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return '';
  return reverse(str.substr(1)) + str.charAt(0);
}

// reverse('awesome') // 'emosewa'
