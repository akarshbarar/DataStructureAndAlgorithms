/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * O(n)
 */
 var nextPermutation = function(nums) {
   var i =nums.length-2;
  console.log(i)
   while(i >=0 && nums[i+1]<=nums[i]){
     i--;
   }
   console.log(i)

   if(i >=0){
     console.log("i>0")
     var j=nums.length-1;
     while(j >=0 && nums[j] <= nums[i]){
       j--;
      }
      swaps(nums,i,j);
    }
    reverse(nums,i+1)
console.log("result",nums)
}

function swaps(nums,i,j){
  console.log("swap")
  var temp=nums[i]
  nums[i]=nums[j]
  nums[j]=temp
}

function reverse(nums,start){
  console.log(nums,start)
  var i=start;
  var j=nums.length-1;

  while(i <j){
    swaps(nums,i,j)
    i++;
    j--;
  }
}
// Number is in form of array
nextPermutation([1,4,3,2])