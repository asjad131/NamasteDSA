function searchElement(array,target){

    for(i=0;i<array.length;i++){

        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
//Tests
console.log(searchElement([1,2,8,9,10],10));
console.log(searchElement([1,4,8,9,6],4));
console.log(searchElement([0,2,6,9,23],27));
console.log(searchElement([1,2,3,4,5],3));
console.log(searchElement([0,2,4,6,8,10,12,14,16,18,20],100));