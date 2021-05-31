var n=6
var bits=parseInt(0);
while(n>=0){

var r=parseInt(n%2)
bits=parseInt(bits*10)+r
console.log(typeof bits)
n=n/2
console.log(r,bits,n)
}
console.log(bits)
