# Ok, this question comes from pramp
# Given an array arr of unique nonnegative integers, implement a function
#get_different_number that finds the smallest nonnegative integer that is NOT in the array.
# solve first for case when not allowed to modify the input arr, then when
# you can.
#
# Other notes:
#  Not ordered
#
# Case 1:
# arr = [0, 1, 2, 3]
# result => 4
#
# Case 2:
# arr = [0, 2, 3, 4]
# result => 1
#
# Case 3:
# arr = [6, 3, 9, 0]
# result => 1
#
# Approach 1: Brute force / naive
#  sort the arr, in O(nlog(n)) time, then iterate through and return
# first value that does not match index. If all match, return next value.
# If length of arr is 2^31 - 1, return undefined (extreme edge case).
#
# Approach 2: Use a set
#  Convert the arr to set. Starting at 0, check if each number is in the
# set. As soon as one isn't, return that number. Time complexity O(n).
#
# Pseudocode:
#  function(arr)
#   create new set from arr values
#   starting at 0, check if each number until length of arr is in set
#   if is not, return that number
#   After it gets through it all and hasn't returned, check if length of
#   arr is 2^31 - 1. If so, return undefined. If not, return length of array

#  function(arr)
# in ruby must require set
require 'set'
def get_different_number(arr)
  set = Set.new(arr)

  i = 0
  while i < arr.length
    if !set.include?(i)
      return i
    end

    i += 1
  end

  if arr.length == 2**31 - 1
    return undefined
  else
    return arr.length
  end
end

arr1 = [0, 1, 2, 3]
arr2 = [0, 2, 3, 4]
arr3 = [6, 3, 9, 0]

p get_different_number(arr1) == 4
p get_different_number(arr2) == 1
p get_different_number(arr3) == 1

# This question had a quasi - bonus part: the in-place solution
#
# Pseudocode:
#  function get_different_number(arr) => [0, 3, 2, 3]
#                                               ^
#   set variable n equal to arr length => n = 4
#   set variable temp equal to zero => temp = 0
#  set variable i equal to zero => i = 0
#  while i less than n => i = 2
#   set temp equal to arr at i => temp = 2
#   while temp less than n and arr at temp does not equal temp
#    swap temp and arr at temp
#   now increment i again from zero and check if in array
#
require 'byebug'
def get_different_number_in_place(arr)
  n = arr.length
  temp = 0

  index = 0

  while index < n
    temp = arr[index]
    while (temp < n) && (arr[temp] != temp)
      temp, arr[temp] = arr[temp], temp
      p arr
    end
    index += 1
  end
  arr

end

arr4 = [0, 2, 3, 4]
p get_different_number_in_place(arr4)
