# Print the min and max element in the array

arr=[1,2,33,4,-10,6,7,8,9,10]

minValue=arr[0]
maxValue=arr[0]

for i in range(len(arr)):
    if arr[i]>maxValue:
        maxValue=arr[i]
    if arr[i]<minValue:
        minValue=arr[i]

print("Min value",minValue)
print("Max Value",maxValue)

#Alternate method in python

minValue=min(arr)
maxValue=max(arr)
print("Min value",minValue)
print("Max Value",maxValue)

