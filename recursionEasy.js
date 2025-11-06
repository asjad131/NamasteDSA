//Sum of n numbers using recursion
function sumOfNNumbers(n) {
    // Base case: if n is 1, return 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: sum of n numbers is n plus sum of (n-1) numbers
    return n + sumOfNNumbers(n - 1);
}

// Example usage:
const n = 10;
console.log(`The sum of the first ${n} numbers is: ${sumOfNNumbers(n)}`); // Output: 15

//sum of all elements in an array using recursion
function sumOfArray(arr, index = 0) {
    // Base case: if index reaches the length of the array, return 0
    if (index === arr.length) {
        return 0;
    }
    // Recursive case: sum of array is current element plus sum of the rest
    return arr[index] + sumOfArray(arr, index + 1);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(`The sum of the array elements is: ${sumOfArray(array)}`); // Output: 15

//Factorial of n numbers
function fact(n){

    if (n == 0 || n == 1){return 1};

    return n * fact(n-1);
}
//Tests for factorial
console.log(`factorial of 5 is : ${fact(5)}`);
console.log(`factorial of 7 is : ${fact(7)}`);
console.log(`factorial of 10 is : ${fact(10)}`);

// power of 2 using recursion
function powerOfTwo(n){

    if (n == 0){return 1};
    return 2 * powerOfTwo(n-1);

}

//Tests for power2
console.log(`2 to the power of 5 is : ${powerOfTwo(5)}`);
console.log(`2 to the power of 7 is : ${powerOfTwo(7)}`);
console.log(`2 to the power of 10 is : ${powerOfTwo(10)}`);

//Check if number is power of 2

var isPowerOfTwo = function (n) {

    if (n == 1)return true;
    else if(n%2 !=0 || n < 1){return false};
    return isPowerOfTwo(n/2);

};
//tests
console.log(isPowerOfTwo(16));  // true  (2^4)
console.log(isPowerOfTwo(32));  // true  (2^5)
console.log(isPowerOfTwo(3));   // false
console.log(isPowerOfTwo(12));  // false
console.log(isPowerOfTwo(0));   // false
console.log(isPowerOfTwo(-8));  // false
console.log(isPowerOfTwo(1024)); // true (2^10)