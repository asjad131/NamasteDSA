//Fibonacci number of n
function fibonacciRecursion(n){
    
    if(n <=1) return n;

    return (fibonacci(n-2) + fibonacci(n-1))
}
console.log(`fibonacci of 0 is ${fibonacciRecursion(0)}`)
console.log(`fibonacci of 1 is ${fibonacciRecursion(1)}`)
console.log(`fibonacci of 5 is ${fibonacciRecursion(5)}`)
console.log(`fibonacci of 10 is ${fibonacciRecursion(10)}`)
console.log(`fibonacci of 15 is ${fibonacciRecursion(15)}`)
//fibonacci without recursion
 function fibonacci(n){

    if (n <= 1) return n;
      let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let next = a + b;
            a = b;
            b = next;
  }
  return b;

 }

console.log(`fibonacci of 0 is ${fibonacci(0)}`)
console.log(`fibonacci of 1 is ${fibonacci(1)}`)
console.log(`fibonacci of 5 is ${fibonacci(5)}`)
console.log(`fibonacci of 10 is ${fibonacci(10)}`)
console.log(`fibonacci of 15 is ${fibonacci(15)}`)