import java.io.*;
// Dynamic Programming
// String 
class LongestCommonSubsequence{
    public static void main(String args[]){
        String s1 = "AGGTAB";
        String s2 = "GXTXAYB";
        // G T A B= 4
        // DP Table
        int M=s1.length();
        int N=s2.length();

        int DP[][]=new int[M+1][N+1];
// O(N*M)
        for(int i=0;i<=M;i++){
            for(int j=0;j<=N;j++){
                if(i==0 || j==0){
                    DP[i][j]=0;
                }
                else{
                    if(s1.charAt(i-1) == s2.charAt(j-1)){
                        DP[i][j]=DP[i-1][j-1]+1;
                    }
                    else{
                        DP[i][j]=Math.max(DP[i-1][j],DP[i][j-1]);
                    }
                }
            }
        }
        System.out.println(DP[M][N]);


    }



}