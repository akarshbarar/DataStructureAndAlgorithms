# Kth min max in an array


arr=[7, 10, 4, 3, 20, 15]
k=3

# sort the array first
arr.sort()


print("Kth Min value",arr[k-1])
print("Kth Max value",arr[len(arr)-k-1])