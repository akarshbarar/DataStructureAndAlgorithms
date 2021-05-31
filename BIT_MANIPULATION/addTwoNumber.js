// Add two numbers without using + operator
// Bit Manuplication
// AND OR XOR
// var a=1 
// var b=2
// ` 1`
//  124
// +456
// ----
//   580
// decimal binary 01 
// 1   0001
// 3   0011
// --------
// 4   0100

// OR 
// AND 
// XOR 

// 011     <- carrry
// 0001
// 0011
// ----
// 0010  (XOR ^)  a
// 0011  (AND &)  b<<1  b!=0
 
// 0011 => 0110 shifting a bit 1
// 1+1=2(10)

// 0100   4

var a=-10
var b=30

while(b!=0){
    var carry=a&b
    a=a^b
    b=carry<<1
}

console.log(a)