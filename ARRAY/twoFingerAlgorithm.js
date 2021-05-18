var arr=[0,1,2,3,4,5];
var x=5
// Pre: arr should be sorted
//  i     j 
// [1 2 3 4 5 ]
// while i < j:
//     a[i]+a[j]==x
//     print (i,j)
//     break
//     a[i]+a[j] < x    6 < 9
//     i++

//     a[i]+a[j] > x   6 > 5
//     j--


var left=0
var right=arr.length-1
//  O(n)
while( left < right){
    if(arr[left]+arr[right] == x){
        console.log(arr[left],arr[right]);
        break;
    }
    if(arr[left]+arr[right] < x){
        left++
    }
    if(arr[left]+arr[right] > x){
        right--
    }

}