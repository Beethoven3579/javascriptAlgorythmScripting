/*Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in 
the destroyer function), followed by one or more arguments. Remove 
all elements from the initial array that are of the same value as these 
arguments.

Note
You have to use the arguments object. */

// Solution 1  

function destroyer(arr) {

    const args = Array.from(arguments);
    args.splice(0,1);
    const targets = args;
    const result = [];
    
    for (let num of arr) {
      if (targets.indexOf(num) === -1) {
        result.push(num);
      }
    }
    
      return result;
    }
    
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

    // Solution 2 filter ()

    function destroyer(arr) {

        const args = Array.from(arguments);
        args.splice(0,1);
        const targets = args;
        
        return arr.filter(function(num) {
          return targets.indexOf(num) === -1;
        })
        
        }
        
        console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));