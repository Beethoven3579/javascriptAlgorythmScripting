/* Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

*/

// For Loop Solution

function diffArray(arr1, arr2) {
    var result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        result.push(arr1[i]);
      }
    }
  
    for (let j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) === -1) {
        result.push(arr2[j]); 
      }
    }
    return result;
  }
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  // Filter solution

  function diffArray(arr1, arr2) {
    var combo = arr1.concat(arr2);
  
  
    return combo.filter(function(num) {
      if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
        return num;
      }
    });
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// New solution using ES7 musch more concise!

function diffArray(arr1, arr2) {

let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));

  return difference;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
