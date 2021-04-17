# In this we will reverse a array
# Input :  arr[] = {4, 5, 1, 2}
# Output : arr[] = {2, 1, 5, 4}

# Just swap fir and last element and increase and decrease tha counter repectivly
arr=[1,2,3,4,5,6,7,8,9]
start=0
end=len(arr)-1
while start < end:
    arr[start],arr[end]=arr[end],arr[start]
    start=start+1
    end=end-1

print(arr)