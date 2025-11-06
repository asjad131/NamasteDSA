//Count number of digits
function countDigits(num){
    let count=0;
    if(num===0) return 1;
    
    if(num<0){
        num = Math.abs(num);
    }   
    while(num >0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
//Count Digits Tests
console.log('Count Digits Tests:');
console.log(countDigits(12345));
console.log(countDigits(0));
console.log(countDigits(-9876));

//is PalindromeNumber
function isPalindrome(num){
    let originalNum = num;
    if(num<0) return false;
    let rev = 0;

    while(num>0){
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num/10);
    }
    if(rev === originalNum){
        return true;
    }else{
        return false;
    }
}
 //is PalindromeNumber Tests
console.log('is PalindromeNumber Tests:');
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1012));
console.log(isPalindrome(12321));  

//Reverse Integer
function reverseInteger(num){
    let rev = 0;
    let isNegative = false;

    if(num<0){
        isNegative = true;
        num = Math.abs(num);
    }

    while(num>0){
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num/10);
    }

    if(isNegative){
        rev = -rev;
    }
    return rev;
}
//Reverse Integer Tests
console.log('Reverse Integer Tests:');
console.log(reverseInteger(12345));
console.log(reverseInteger(-6789));
console.log(reverseInteger(0));