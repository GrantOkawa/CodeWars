// Given an array of integers your solution should find the smallest integer.

//My solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
    let temp  ;
   
      for (let i=0;i<args.length;i++){
          if(args[i]<=args[0]){
              args[0]  = args[i];    
              temp = args[i];
          }
        }
      return temp;
    }
  }