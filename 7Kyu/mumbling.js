//The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My solution:
function accum(s) {
    const res = [];
    for (let i = 0; i < s.length; i++) {
      let row = s[i].toUpperCase();
      for (let j = 1; j <= i; j++) {
        row += s[i].toLowerCase();
      }
      res.push(row);
    }
    return res.join('-');
}