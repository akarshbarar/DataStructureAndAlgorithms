// MERGE SORT
function merge(arr,left,mid,right){

    var N=mid-left+1
    var M=right-mid
    var L=[]
    var R=[]
    for(var i=0;i<N;i++){
        L[i]=arr[left+i]
    }
    for(var j=0;j<M;j++){
        R[j]=arr[mid+i+j]
    }

    i=j=0;
    var k=left;
    while(i<N && j<M){
        if(L[i]<=R[j]){
            arr[left]=L[i]
            i++
        }
        else{
            arr[k]=R[j]
            j++
        }
        k++
    }
    while(i<N){
        arr[k]=L[i]
        i++
        k++
    }
    while(j<M){
        arr[k]=R[j]
        j++;
        k++
    }
}
function mergeSort(arr,left,right){
    
    if(left<right){
        var mid=left+(right-left)/2;
        mergeSort(arr,left,mid)
        mergeSort(arr,mid+1,right)
        merge(arr,left,mid,right)
    }

}



var arr=[12,11,13,5,6,7]
mergeSort(arr,0,arr.length)
console.log(arr)