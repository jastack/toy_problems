# Given an array of overlapping ranges, return array of continuous ranges.
# Example:
#  arr = [(0,1), (3,5), (4, 8), (10, 12), (9, 10)]
                    #                          ^
# return => [(0,1), (3,8), (9, 12)]
# Things this has to check:
#  Sort
#  If overlaps
# Pseudocode:
# function(arr)
#  final_arr = []
#  start = 0
#  end = 1
#  loop through array
#  if start time is greater than end time,
# push [start, end] into final arr and set start = el start and
# end = el end.
# if start time less than end time, set end time = el end and move on to
# next piece.
# Pseudocode:
# function(arr)
def hi_cal(arr)
  final_arr = []
  sorted = arr.sort
  start = sorted[0][0]
  stop = sorted[0][1]
  i = 1
  while i < arr.length

    if sorted[i][0] > stop + 1
      final_arr << [start, stop]
      start = sorted[i][0]
      stop = sorted[i][1]
    elsif sorted[i][1] > stop
      stop = sorted[i][1]
    end

    i += 1
  end

  final_arr << [start, stop]
  final_arr
end

arr1 = [[0,1], [3,5], [4, 8], [10, 12], [9, 10]]
arr2 = [[0,1], [2,3]]
arr3 = [[1,5], [2,3]]
arr4 = [[1,10], [2,6], [3, 5], [7, 9], [9, 10]]

p hi_cal(arr1)
p hi_cal(arr2)
p hi_cal(arr3)
p hi_cal(arr4)
