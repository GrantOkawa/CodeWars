// Given a non-empty array of integers, return the result of multiplying the values together in order.

//My solution:
function grow(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
  }