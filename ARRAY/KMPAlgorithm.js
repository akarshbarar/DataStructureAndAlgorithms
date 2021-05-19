// KMP Alorithm
// Knuth-Morris-Pratt Algorithm
// String Matching Algorithm
// O(n+m)

var text="ABABDABACDABABCABAB"//N
var pattern="ABABCABAB"//M
var N=text.length
var M=pattern.length

var lps=new Array(M).fill(0)
var l=0
var i=1
while(i < M){
    if(pattern[i] == pattern[l]){
        l++;
        lps[i]=l
        i++
    }
    else{
        if( l !=0){
            l=lps[l-1]
        }
        else{
            lps[i]=l
            i++
        }
    }
}

console.log(lps)

i=0
var j=0;
while(i < N){

    if(pattern[j]==text[i]){
        j++;
        i++;
    }
    if(j == M){
        console.log("Found at ",(i-j))
        j=lps[j-1]
        break; 
    }
    if( i < N && pattern[j] != text[i]){
        if(j !=0){
            j=lps[j-1]
        }
        else{
            i++
        }
    }
}