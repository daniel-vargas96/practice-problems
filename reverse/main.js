function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return '';
  return reverse(str.substr(1)) + str.charAt(0);
}

// reverse('awesome') // 'emosewa'

function isPalindrome(str) {
  let reverseWord = reverse(str);

  if (reverseWord === str) {
    return true;
  } else return false;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('anna'));
