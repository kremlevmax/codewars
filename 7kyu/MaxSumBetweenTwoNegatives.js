/*
Task
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, Nothing for Haskell, None for Rust.

Example 1
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

Example 2
[4, -1, -2] -> 0
     ^   ^
There is nothing between -1 and -2, so return 0.
*/

function maxSumBetweenTwoNegatives(a) {
  let toStartSum = false;
  let result = 0;
  let sum = 0;
  let numberOfNegatives = 0;
  
  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
     
    if (a[i] < 0 &&  toStartSum == true) {
      toStartSum = false;
      numberOfNegatives++;

      if (result < sum) {
         result = sum;
         sum = 0;
       }
    }
    
    if (toStartSum == true && a[i] >= 0) {
      sum += a[i];
    }
    
    if (a[i] < 0) {
      toStartSum = true;
      numberOfNegatives++;
      sum = 0;
    } 
  }
  
   if (numberOfNegatives <= 1) {
     return -1;
   }
  
  return result;
}