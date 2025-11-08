function bubbleSort(arr){
    let n=arr.length;
    
    for(i=0;i<n-1;i++){
        let isSwapped = false;
        for(j=0;j<n-1-i;j++){

            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
//tests
console.log(bubbleSort([5, 1, 4, 2, 8]));
console.log(bubbleSort([10, 2, 3, 1, 5]));
console.log(bubbleSort([1, 2, 3, 4, 5]));