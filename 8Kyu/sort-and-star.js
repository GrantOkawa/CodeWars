// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//My solution:
function twoSort(s) {
    const last = s.sort(
      (a, b) => a < b ? -1 : 1
    )[0];
    let res = last[0];
    
    for(let i = 1; i < last.length; i++) {
      res += "***" + last[i];
    }
    
    return res;
  }