// Bubble Sort
// Max from the array and place that at last

//  j [5,4,3,2,1]-> 4 5 3 2 1->4 3 5 2 1->4 3 2 5 1-> 4 3 2 1 5
//    4 3 2 1 5->3 4 2 1 5=>3 2 4 1 5=>3 2 1 4 5=>3 2 1 4 5   N-1-1
//    N-1-2->N-1-3

// O(n2)

var a=[5,4,3,2,1]
var N=a.length
for(var i=0;i<N;i++){
    for(var j=0;j<N-1-i;j++){
        if(a[j]>a[j+1]){
            var temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
        }
    }
    console.log(a)
}
console.log("Final sort",a)
