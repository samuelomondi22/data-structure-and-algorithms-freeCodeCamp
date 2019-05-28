//recursion
function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorialize(num - 1));
          /* 
          First Part of the recursion method
          You need to remember that you won’t have just one call, you’ll have several nested calls
          
          Each call: num === "?"        	         num * factorialize(num - 1)
          1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
          2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
          3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
          4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
          5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
          
          Second part of the recursion method
          The method hits the if condition, it returns 1 which num will multiply itself with
          The function will exit with the total value
          
          5th call will return (5 * (5 - 1))     // num = 5 * 4
          4th call will return (20 * (4 - 1))    // num = 20 * 3
          3rd call will return (60 * (3 - 1))    // num = 60 * 2
          2nd call will return (120 * (2 - 1))   // num = 120 * 1
          1st call will return (120)             // num = 120
          
          If we sum up all the calls in one line, we have
          (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
          */
      }
  }
  factorialize(5);

//while loop

function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;
     
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1) 
      return 1; 
   
    // Step 2. Create the WHILE loop 
    while (num > 1) { 
      num--; // decrementation by 1 at each iteration
      result = result * num; // or result *= num; 
      /* 
                      num           num--      var result      result *= num         
      1st iteration:   5             4            5             20 = 5 * 4      
      2nd iteration:   4             3           20             60 = 20 * 3
      3rd iteration:   3             2           60            120 = 60 * 2
      4th iteration:   2             1          120            120 = 120 * 1
      5th iteration:   1             0          120
      End of the WHILE loop 
      */
    }
       
    // Step 3. Return the factorial of the provided integer
    return result; // 120
  }
  factorialize(5);


//for loop 

function factorial(num){
    for (let i = num - 1; i > 1; i--) {
        num*=i
    }
    return num
}
factorial(5)