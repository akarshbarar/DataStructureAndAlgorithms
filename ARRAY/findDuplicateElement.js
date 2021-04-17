// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.


function findDuplicate(nums){

// BRUTE FORCE METHODS  O(n^2)
for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            console.log(nums[i])
            break;
        }
    }
}
}
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    
    var arr=new Array(nums.length-1).fill(0);
     for(var i=0;i<nums.length;i++){
         arr[nums[i]-1]+=1
     }
    console.log(arr)
    for(i in  arr){
        if(arr[i]>1){
            return parseInt(i)+1
            break
        }
    }
    
};
var  nums = [1,3,4,2,2]
findDuplicate(nums)//2