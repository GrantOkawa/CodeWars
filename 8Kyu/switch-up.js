//When provided with a number between 0-9, return it in words

//My solution:
function switchItUp(number){
    //Write your own Code!
      const obj = {
        0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 
      };
      
      return obj[number]
    }