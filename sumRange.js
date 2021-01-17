/*Intermediate Algorithm Scripting: 
Sum All Numbers in a RangePassed

We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them. The lowest number
will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the
numbers between 1 and 4 (both inclusive) is 10. */

// Solution

function sumAll(arr) {
    let num1 = Math.min(arr[0], arr[1]);
    let num2 = Math.max(arr[0], arr[1]);
    let total = 0;
    
   for (let i = num1; i <= num2; i ++){
     total += i;
   };
   return total;
   }
   
   sumAll([1, 4]);