// KMP Alorithm
// Knuth-Morris-Pratt Algorithm
// String Matching Algorithm
// O(n+m)

var text="ABABDABACDABABCABAB"
var pattern="ABABCABAB"

var lps=new Array(pattern.length).fill(0);
var M=pattern.length
var N=text.length
var i=1;
var l=0;

while(i < M){
    if(pattern[i]==pattern[l]){
        l++
        lps[i]=l
        i++
    }
    else{
        if(l !=0){
            l=lps[l-1]
        }
        else{
            lps[i]=l
            i++
        }
    }
}

console.log(lps)
var i=0;
var j=0
while( i < N){
    if(pattern[j]==text[i]){
        i++
        j++
    }
    if(j == M){
        console.log("Found pattern at ",(i-j))
        j=lps[j-1]
        break;
    }

    if(i < N && pattern[j] != text[i]){
        if( j != 0){
            j=lps[j-1]
        }
        else{
            i++
        }
    }
}
