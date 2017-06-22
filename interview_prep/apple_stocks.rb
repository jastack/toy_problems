# Find biggest difference between two values in an array. Condition:
# second value must come from higher index in array.
# Case 1:
# arr = [1, 3, 4, 2, 7, 10]
# result => arr[5] - arr[0] = 9
#
# Case 2:
# arr = [10, 8, 5, 3, 2, 0]
# Multiple indices give max value
# result => arr[4] - arr[3] = -1
#
# Case 3:
# arr = [10, 9, 5, 7, 11]
# result => arr[4] - arr[2] = 6
#
# Approach 1:
# Naive brute force approach: compare every potential two points
# This would be O(n^2) because for every n, it has to essentially check
# every other n.
#
# Pseudocode:
# function(arr)
#   set current max to nil
#   iterate though each element
#     within loop add second loop starting with next element, check difference
#     if difference greater that max (or max nil) update max
#   return max

def max_diff(arr)
  max = nil
  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      profit = arr[j] - arr[i]
      if max == nil || profit > max
        max = profit
      end
      j += 1
    end
    i += 1
  end
  max
end

arr1 = [1, 3, 4, 2, 7, 10]
arr2 = [10, 8, 5, 3, 2, 0]
arr3 = [10, 9, 5, 7, 11]
arr4 = [5, 5, 5, 5, 5]

p max_diff(arr1) == 9
p max_diff(arr2) == -1
p max_diff(arr3) == 6
p max_diff(arr4) == 0


# Approach 2:
# Can we get it to be O(n)? Keep track of min price, continuously check
# max profit at each value.
#
# Pseudocode:
# function(arr)
#   set min value to first element
#   set max profit to nil
#   start moving through array (at second element)
#     if element minus min greater than max, reset max
#     if element smaller than min, reset min
#   return max
#
#  walk through:
# arr = [10, 8, 5, 3, 2, 0, 5]
#                           ^
# min = 0
# max = 5
# hmm...this kind of works.

def max_diff_fast(arr)
  min = arr[0]
  max = nil
  i = 1
  while i < arr.length
    profit = arr[i] - min
    if max == nil || profit > max
      max = profit
    end

    if arr[i] < min
      min = arr[i]
    end

    i += 1
  end

  max
end

p max_diff_fast(arr1) == 9
p max_diff_fast(arr2) == -1
p max_diff_fast(arr3) == 6
p max_diff_fast(arr4) == 0
