//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//My solution:
function XO(str) {
    let xNumber = '';
    let oNumber = '';
    for (let i=0; i<str.length; i++) {
      if (str[i].toLowerCase() === 'x') {
        xNumber += str[i];
        } else if (str[i].toLowerCase() === 'o') {
        oNumber += str[i];
        }
      }
      return xNumber.length === oNumber.length ;
  }