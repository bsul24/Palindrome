function palindrome(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    let checker = /[A-Za-z0-9]/;
    let filt = arr.filter(letter => checker.test(letter));
    let onlyLetters = filt.join("");
    let reverse = "";
    for (let i = onlyLetters.length - 1; i >= 0; i--) {
      reverse += onlyLetters[i];
    }
    if (onlyLetters.toUpperCase() == reverse.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }