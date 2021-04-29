/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    if(nums[0]>=target){
        return 0;
    }
    if(nums[nums.length-1]==target)
        {
            return nums.length-1
        }
    if(nums[nums.length-1]<target)
        {
            return nums.length
        }
    
    
    for(var i=1;i<nums.length;i++)
        {
            if(nums[i]==target){

                return i;
                
            }
            if(target>nums[i-1] && target<nums[i]){
                return i;
                
            }
        }
    
};