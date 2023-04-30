// Factorial

/*
DESCRIPTION:
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n){
 let result = n;
  
  if (n === 0 || n === 1) 
    return 1; 
  
  while (n > 1) { 
    n--;
    result *= n;
  }
  
  return result;
}