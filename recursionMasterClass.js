//Fibonacci number of n
function fibonacci(n){
    
    if(n <=1) return n;

    return (fibonacci(n-2) + fibonacci(n-1))
}
console.log(`fibonacci of 0 is ${fibonacci(0)}`)
console.log(`fibonacci of 1 is ${fibonacci(1)}`)
console.log(`fibonacci of 5 is ${fibonacci(5)}`)
console.log(`fibonacci of 10 is ${fibonacci(10)}`)
console.log(`fibonacci of 15 is ${fibonacci(15)}`)