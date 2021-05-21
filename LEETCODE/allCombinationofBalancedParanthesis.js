    var n=3;
    const output = [];
    function dfs(str = '(', left = 1, right = 0) {
        if (left === n && right === n) {
            output.push(str);
            console.log("left == right")
            console.log(str,left,right)
        }
        if (left + 1 <= n) {
            console.log("left < = n")
            console.log(str,left,right)
            dfs(str + '(', left + 1, right);
        }
        if (right + 1 <= left) {
            console.log("right < = left ");
            console.log(str,left,right)
            dfs(str + ')', left, right + 1);
        }
    }
    dfs();
    console.log(output)