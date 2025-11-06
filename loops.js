//
function searchElement(arr, element){

    for(i=0;i<arr.length;i++){

        if(arr[i]=== element){
            return i;   
        }
    }
    return -1;
}
console.log('Search Element Tests:');
console.log(searchElement([3,4,6,2,9],9));
console.log(searchElement([3,4,6,2,9],5));
console.log(searchElement(['a','b','c','d'],'c'));
console.log(searchElement(['a','b','c','d'],'e'));
console.log(searchElement([true, false, true], false));

//Count number of negatives
function countNegatives(arr){
    let count=0;

    for(i=0;i<arr.length;i++){

        if(arr[i] < 0){
            count++;
        }
        }
        return count;
    }
console.log('\nCount Negatives Tests:');
console.log(countNegatives([2,-3,4,-1,-5]));
console.log(countNegatives([-1,-2,-3,-4]));
console.log(countNegatives([1,2,3,4]));

//Find largest element
function largestElement(arr){
    let largest = arr[0];

    for(i=1;i<arr.length;i++){

        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log('\nLargest Element Tests:');
console.log(largestElement([3,5,2,9,1]));
console.log(largestElement([-3,-1,-7,-4]));
console.log(largestElement([10,20,30,40,50]));

//Find smallest element
function smallestElement(arr){
    let smallest = arr[0];

    for(i=1;i<arr.length;i++){

        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log('\n Smallest Element Tests:');
console.log(smallestElement([3,5,2,9,1]));
console.log(smallestElement([-3,-1,-7,-4]));
console.log(smallestElement([10,20,30,40,50]));

//second largest element
function secondLargestElement(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(i=0;i<arr.length;i++){

        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log('\n Second Largest Element Tests:');
console.log(secondLargestElement([3,5,2,9,1]));
console.log(secondLargestElement([-3,-1,-7,-4]));
console.log(secondLargestElement([10,20,30,40,50]));