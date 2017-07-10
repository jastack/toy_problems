# Given an array of integers, finds the highest product you can get
# from three of the integers.
#
# Brute force would be to go through and try every combination of 3
# integers and return the largest. This is really slow.
#
# Other thoughts:
#  Find the three greatest integers. Only problem here -- might have
# negative integers.
#
# Case 1:
# arr = [1, 2, 3, 4, 5, 11]
# return 4*5*11 (which is 220)
#
# Case 2
# arr = [-5, 3, 7, 1, 11]
# return 3*7*11 (231)
#
# Case 3
# arr = [-11, -5, 3, 7, 11]
# return -11*-5*11 (which is 605)
#
# Case 4
# arr = [-5, -4, -2, -1, -9]
# return = -4*-2*-1 (which is -8)
#
# Some thoughts. If all positive or only one negative, just find top three max
# If mix of positive and negative, must check a bunch of stuff.
# If all negative, still find max three.
# Is there a way to walk through the array and keep track of the highest
# product so far?
#
# Pseudocode:
# function highest_product_of_3(arr)
#  if arr length < 3:
#  return "Arr must be longer than three elements!"
#  We start at the 3rd item (index 2), so we pre-populate highest and
# lowests based on the first two items.
#  highest = max(arr[0], arr[1])
#  lowest = min(arr[0], arr[1])
#
#  highest_product_of_two = arr[0] * arr[1]
#  lowest_product_of_two = arr[0] * arr[1]
#
#  highest_product_of_three = arr[0] * arr[1] * arr[2]
# walk through arr starting at index 2
#  do we have a new highest product of 3?
#  it's either the current highest,
#  or the current times the highest product of two
#  or the current times the lowest product of two
#
#  highest_product_of_three = max(highest_product_of_three,
# current*highest_product_of_two, current*lowest_product_of_two)
#
#  highest_product_of_two = max(highest_product_of_two, current*highest
# , current*lowest)
#
#  lowest_product_of_two = min(lowest_product_of_two, current * highest,
# current* lowest)
#
# highest = max(highest, current)
# lowest = min(lowest, current)
#
# return highest product of three

# Pseudocode:
def highest_product_of_3(arr)

  if arr.length < 3
    raise "Array must be longer than three elements"
  end

  highest = [arr[0], arr[1]].max
  lowest = [arr[0], arr[1]].min

  highest_product_of_two = arr[0] * arr[1]
  lowest_product_of_two = arr[0] * arr[1]

  highest_product_of_three = arr[0] * arr[1] * arr[2]

  i = 2
  while i < arr.length
    highest_product_of_three = [highest_product_of_three,
                                arr[i] * highest_product_of_two,
                                arr[i] * lowest_product_of_two].max

    highest_product_of_two = [highest_product_of_two,
                              arr[i] * highest,
                              arr[i] * lowest].max

    lowest_product_of_two = [lowest_product_of_two,
                             arr[i] * highest,
                             arr[i] * lowest].min

    highest = [highest, arr[i]].max
    lowest = [lowest, arr[i]].min

    i += 1
  end

  highest_product_of_three
end

arr1 = [1, 2, 3, 4, 5, 11]
arr2 = [-5, 3, 7, 1, 11]
arr3 = [-11, -5, 3, 7, 11]
arr4 = [-5, -4, -2, -1, -9]

p highest_product_of_3(arr1) == 220
p highest_product_of_3(arr2) == 231
p highest_product_of_3(arr3) ==  605
p highest_product_of_3(arr4) ==  -8
