// Binary Search
// array and a number
// array should be sorted


var arr=[1,2,3,4,5,6,7,8,9]
var x=8
var left=0
var right=arr.length-1
while(left <= right){
    var mid=parseInt((left+right)/2);
    console.log(left,right,mid,arr[mid],x)
    if(arr[mid]==x)
    {
        console.log("element present at ",mid)
        return true;
    }
    if(arr[mid] <x)
        left=mid+1
    if(arr[mid]>x)
        right=mid-1
}
