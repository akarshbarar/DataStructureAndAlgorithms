// 6 decimal number system 
// 110 binary system  0 1
// 2   output

// 110 while

// 6/2=3     rem=0   bin=0+rem*1=0
// 3/2=1     rem=1   bin=0+1*10=10
// 1/2=0     rem=1   bin+10+1*100=110
// 0 terminate 
// log(n)
var n=10
var bin=0
var i=1
var count=0
while(n>0){
    var rem=n%2
    if(rem===1){
        count++
    }
    console.log("rem=",rem)
    n=Math.floor(n/2)
    bin+=(rem*i)
    i*=10
}
console.log(bin,count)

var num=10 //1010

var c=0
while(num!=0){
    console
    c++;
    num>>=1
}
console.log(c)
