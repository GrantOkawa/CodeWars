// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//My solution:
function between(a, b) {
    return Array(b - a + 1).fill().map((_, idx) => a + idx)
  }