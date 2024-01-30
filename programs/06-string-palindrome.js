function isPalindrome(str) {
  let originalStr = str;
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }

  if (originalStr === revStr) {
    return "String is Palindrome";
  } else {
    return "String is not Palindrome";
  }
}

console.log(isPalindrome("abcd"));
console.log(isPalindrome("madam"));
