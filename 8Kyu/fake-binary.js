// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My solution:
function fakeBin(x) {
  
    x = x.split('');
    
    let toBin = x => {
      if (x < 5)
        return 0;
      else return 1
    }
    
    return x.map(toBin).join('');
  }