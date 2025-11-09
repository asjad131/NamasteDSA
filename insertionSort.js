function insertionSort(arr){

    n = arr.length;

    for(i=1; i<n ; i++){

        let curValue= arr[i];
        let prevIndex = i-1;

        while( arr[prevIndex] > curValue && prevIndex >=0){

            arr[prevIndex+1] = arr[prevIndex];
            prevIndex--;
        }

        arr[prevIndex+1] = curValue;

    }
    return arr;
}
//tests
console.log(insertionSort([5, 1, 4, 2, 8]));
console.log(insertionSort([10, 2, 3, 1, 5]));
console.log(insertionSort([1, 2, 3, 4, 5]));