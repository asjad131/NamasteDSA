//remove duplicates from an array
function removeDuplicates(arr) {
    
 let k=0;

 for(let i=0;i<arr.length;i++){

    if(arr[i] > arr[k]){
        k++;
        arr[k]=arr[i];
    }   
 }
  return arr;
} 
//remove Duplicates Tests
console.log('Remove Duplicates Tests:');
console.log(removeDuplicates([1,1,2,2,3,4,4,5])); 
console.log(removeDuplicates([0,1,2,2,3,3,4,4,4])); 

//Remove specific element from array
function removeElement(arr, val) {
    let k=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i] !== val){
            arr[k]=arr[i];
            k++;
        }
    }
    return arr.slice(0,k);
} 
//Remove Element Tests
console.log('\nRemove Element Tests:');
console.log(removeElement([1,2,4,3], 3)); 
console.log(removeElement([0,1,2,2,3,0,4,5], 2));
console.log(removeElement([0,1,2,2,3,0,4,5], 0));

//reverse a string
function reverseString(s) {

    for(let i=0;i<Math.floor(s.length/2);i++){

        let temp=s[i];
        s[i]=s[s.length-1-i];
        s[s.length-1-i]=temp;
    }
    return s;
}
//Reverse String Tests
console.log('\nReverse String Tests:');
console.log(reverseString(["h","e","l","l","o"])); 
console.log(reverseString(["H","a","n","n","a","h"]));
console.log(reverseString(["A","B","C","D","E","F","G"]));

// max profit from stock prices
function maxProfit(prices) {

    let minPrice=prices[0];
    let maxProfit=0;

    for(let i=1;i<prices.length;i++){ 

        if(prices[i]-minPrice > maxProfit){
            maxProfit=prices[i]-minPrice;
        }
        if(prices[i]<minPrice){
            minPrice=prices[i];
        }

    }
    return maxProfit;
} 
//Max Profit Tests
console.log('\nMax Profit Tests:');
console.log(maxProfit([7,1,5,3,8,4])); 
console.log(maxProfit([6,6,4,3,1])); 
console.log(maxProfit([1,2,3,4,5]));

//merge two sorted arrays
function merge(nums1, m, nums2, n) {

    let p1=0;
    let p2=0;
    let nums1Copy=nums1.slice(0,m);

    for(i=0;i<m+n;i++){

        if(p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])){
            nums1[i]=nums1Copy[p1];
            p1++;
        } else {
            nums1[i]=nums2[p2];
            p2++;
        }
    }       
    return nums1;
}
//Merge Tests
console.log('\nMerge Tests:');
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); 
console.log(merge([1], 1, [], 0)); 
console.log(merge([0], 0, [1], 1));

//Move Zeros to end
function moveZeroes(nums) {

    let k=0;

    for(let i=0;i<nums.length;i++){

        if(nums[i] !== 0){
            nums[k]=nums[i];
            k++;
        }
    }
    //fill remaining elements with 0s
    for(let i=k;i<nums.length;i++){
        nums[i]=0;
    }

    return nums;
} 
//Move Zeroes Tests
console.log('\nMove Zeroes Tests:');
console.log(moveZeroes([0,1,0,3,12])); 
console.log(moveZeroes([0,0,1])); 
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));

//Count max consecutive ones
function findMaxConsecutiveOnes(nums) {

    let maxCount=0;
    let currentCount=0;

    for(let i=0;i<nums.length;i++){

        if(nums[i] === 1){
            currentCount++;

        } else {
            
            maxCount=Math.max(maxCount, currentCount);
            currentCount=0;
        }
    }
    return Math.max(maxCount, currentCount);
} 
//Max Consecutive Ones Tests
console.log('\nMax Consecutive Ones Tests:');
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,1,0,1])); 
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); 
console.log(findMaxConsecutiveOnes([0,0,0]));
//return missing number from array
function missingNumber(nums) {

    let n=nums.length;
    let expectedSum=n*(n+1)/2;
    let actualSum=0;

    for(let i=0;i<nums.length;i++){
        actualSum+=nums[i];
    }

    return expectedSum - actualSum;
} 
//Missing Number Tests
console.log('\nMissing Number Tests:');
console.log(missingNumber([3,0,1])); 
console.log(missingNumber([0,1])); 
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
//return single number from array
function singleNumber(nums) {

    let result=0;

    for(let i=0;i<nums.length;i++){
        result ^= nums[i];
    }

    return result;
} 
//Single Number Tests
console.log('\nSingle Number Tests:');
console.log(singleNumber([2,2,1])); 
console.log(singleNumber([4,1,2,1,2])); 
console.log(singleNumber([1]));