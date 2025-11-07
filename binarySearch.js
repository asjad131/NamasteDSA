//Binary search ispossible in case of sorted array
function binarySearch(nums, target){

  let left =0;
  let right= (nums.length)-1;

  while(right >= left ){
    
    let middle = Math.floor((left+right)/2);

    if(target == nums[middle]){
        return middle;
    }else if( target < nums[middle]){
         right=middle-1;
    }else{
        left=middle+1;
    }

  }
return -1;

}
console.log(binarySearch([1,2,8,9,10],10));
console.log(binarySearch([1,4,8,9,6],4));
console.log(binarySearch([0,2,6,9,23],27));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([0,2,4,6,8,10,12,14,16,18,20],100));