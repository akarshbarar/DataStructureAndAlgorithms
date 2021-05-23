var n=3
var result=[]
//  [((())),()()(),(()())]
// BACKTRACKING RECUSRION
function DFS(str,open,close){

        if(open == n && close == n){
            result.push(str);
        }

        if( open +1 <= n){
            DFS(str+'(',open+1,close)
        }
        if(close+1 <=open){
            DFS(str+')',open,close+1)
        }
}

DFS('(',1,0);
console.log(result)