# Binary Search
# This alogrithm takes in a sorted array and a target val
# and return the index of the target value in the arr if it is in
# the array, and -1 if it is not. Binary search is O(log(n))
#
#  Case 1:
# arr = [0, 3, 5, 7, 9, 11]
# target = 3
# binary_search(arr, target) => 1
#
# My first attempt at this is going to be iterative, then I want to do
# the recursive way.
#
# The idea is, start in the middle. Check if the value of the array in
# the middle is equal to the target. If target is smaller check between the
# start of the array and the middle. If target bigger, check between middle
# and end. Check until nothing left to check and return -1 if not found.
#
#
# Pseudocode:
# binary_search(arr, target)
#  set start = 0
#  set end = length of array - 1
#  set middle = (start + end) / 2
#  while start <= end
#   if arr at middle index is equal to target, return middle index
#   else if arr at middle index is greater than target
#    set start to start + 1
#    set end to middle - 1
#   else
#    set start to middle + 1
#    set end to end - 1
#   return -1 at the end
#
def binary_search(arr, target)
  start = 0
  stop = arr.length - 1
  while start <= stop
    middle = (start + stop) / 2
    if arr[middle] == target
      return middle
    elsif arr[middle] > target
      stop = middle - 1
    else
      start = middle + 1
    end
  end
  -1
end

arr1 = [0, 3, 5, 7, 9, 11]
arr2 = [-5, 1, 2, 15, 19, 20]
arr3 = [0, 2, 5, 11, 25, 31]

p binary_search(arr1, 3) == 1
p binary_search(arr2, 19) == 4
p binary_search(arr3, 4) == -1

# Ok now the recursive version.
# Pseudocode
# binary_search(arr, target)
#  base case: if arr length is 0, return -1
#  set middle = arr length / 2
#  if arr at middle is greater than target
#    binary_search, but with arr from start to middle
#  if arr at middle equals target
#    return middle
#  if arr at middle less than target
#    binary_search, but with arr from middle to end
#    must keep track of index in this case

def binary_search_rec(arr, target)
  return nil if arr.empty?
  middle = arr.length / 2

  if arr[middle] > target
    binary_search_rec(arr[0...middle], target)
  elsif arr[middle] == target
    return middle
  else
    sub_answer = binary_search_rec(arr[middle + 1..-1], target)
    sub_answer.nil? ? nil : (middle + 1) + sub_answer
  end
end

p binary_search_rec(arr1, 3) == 1
p binary_search_rec(arr2, 19) == 4
p binary_search_rec(arr3, 4) == nil
