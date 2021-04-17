// Given an array of integers where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.


function minNumberOfJumps(arr,n){
    if(n<=1)
        return 0
    if(arr[0]==0)
        return -1
    var maxrange=arr[0]
    var jump=1
    var step=arr[0]

    for(var i=1;i<n;i++){
        if(i==arr.length-1)
            return jump
        maxrange=Math.max(maxrange,i+arr[i])
        step--
        if(step==0){
            jump++;
            
        }
    }

}
