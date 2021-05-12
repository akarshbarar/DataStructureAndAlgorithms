// Move All Negative Numbers to One Side

let arr = [ 1, 2, -7, 4, 5, 6, -1, -2, 1 ];

let l=arr.length;
let j=0;
for(let i=0;i<l;i++){
    if(arr[i]<0){
        if(i != j){
            let t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        }
        j++;
    }
}
console.log(arr)