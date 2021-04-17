# This is best solved by Kadens algorithm which helps us to solv eth equation in O(n) time

def largestSumSubarray(arr):
    max__sum=0
    current__sum=0
    start=0
    end=0
    temp=0
    for i in range(len(arr)):
        current__sum+=arr[i]
        if current__sum > max__sum:
            max__sum=current__sum
            start=temp
            end=i
        if current__sum<0:
            current__sum=0
            temp=i+1
    
    print(max__sum)
    print(start)
    print(end)
a = [-2, -3, 4, -1, -2, 1, 5, -3]
largestSumSubarray(a)