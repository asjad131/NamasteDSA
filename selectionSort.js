function selectionSort(arr){

    let n=arr.length;

    for(i=0;i<n-1;i++){
        //find min
        min=i;

        for(j=i+1;j<n;j++){

            if(arr[j] < arr[min]){
                min=j
            }
        }
        if (min != i){
        let temp =arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        }
    }
    return arr;
}
//tests
console.log(selectionSort([5, 1, 4, 2, 8]));
console.log(selectionSort([10, 2, 3, 1, 5]));
console.log(selectionSort([1, 2, 3, 4, 5]));