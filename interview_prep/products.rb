# Write a function that takes in an array and returns an array
# where each value is the product of all the rest of the numbers
# in the array, except the one from the current index.
#
# Can be done in O(n) time and O(n) space.
#
# Things to look out for: arrays with 0s (can't use division)
#
# Case 1:
# arr = [1, 7, 3, 4]
# return => [84, 12, 28, 21]
#
# Case 2:
# arr = [0, 4, 5, 10]
# return => [200, 0, 0, 0]
#
# Approach 1: Brute force / naive solution
# Loop through the array, and for each element do another loop, skipping
# the current element to find the product. This would be O(n^2) time,
# so not ideal.
#
# Approach 2
#  *hmm...the instructions mentioned space complexity as O(n), so that means
# I should potentially create another array of length n.
#
# Testing...
# arr = [1, 7, 3, 4]
#        ^
# return => [7*3*4, 1*3*4, 1*7*4, 1*7*3]
# front = [1, 1*7, 1*7*3, 1*7*3*4]
# back = [4, 3*4, 7*3*4, 1*7*3*4]
#
# First element: back[2]
# Second element: front[0] * back[1]
# Third element: front[1] * back[0]
# Fourth element: front[2]
#
# Test Trial 2:
# arr = [1, 7, 3, 4, 5, 9]
#
# return => [7*3*4*5*9, 1*3*4*5*9, 1*7*4*5*9, 1*7*3*5*9, 1*7*3*4*9, 1*7*3*4*5]
# front = [1, 1*7, 1*7*3, 1*7*3*4, 1*7*3*4*5, 1*7*3*4*5*9]
# back = [9, 5*9, 4*5*9, 3*4*5*9, 7*3*4*5*9, 1*7*3*4*5*9]
# First element: back[4]
# Second element: front[0]*back[3]
# Third element: front[1]*back[2]
# Fourth element: front[2]*back[1]
# Fifth element: front[3]*back[0]
# Sixth element: front[4]
#
# Pseudocode:
#
# function(arr)
#  create new front_products array
#  create new back_products array
#  create front_product variable, set equal to 1
#  walk through arr, every time multiply current item with product,
#   push product into array
#  create new back_product variable, set equal to 1
#  walk throuh arr again, this time starting at the end
#  now create products array
#  create final_index variable = length of array - 2
#  start loop at index = 0
#  if index == 0 push back[final_index] onto products array
#  otherwise push front[index] * back[final_index - el] onto products array
#  increment index
#  stick on front[final_index] at the end
#  return products array

def get_products(arr)
  front_products_arr = [] # => [1, 1*7, 1*7*3, 1*7*3*4]
  back_products_arr = [] # => [4, 3*4, 7*3*4, 1*7*3*4]
  front_product = 1

  arr.each do |el|
    front_product *= el
    front_products_arr << front_product
  end

  back_product = 1
  (arr.length - 1).downto(0) do |el|
    back_product *= arr[el]
    back_products_arr << back_product
  end

  final_products = [] # => [7*3*4, 1*3*4, 1*7*4, 1*7*3]
  final_index = arr.length - 2 # => 2
  0.upto(final_index) do |el| # upto 2
    if el == 0
      final_products << back_products_arr[final_index]
    else
      final_products << front_products_arr[el - 1] * back_products_arr[final_index - el]
    end
  end
  final_products << front_products_arr[final_index]

  final_products
end

arr1 = [1, 7, 3, 4]
arr2 = [1, 7, 3, 4, 5, 9]
arr3 = [0, 4, 5, 10]
p get_products(arr1) == [84, 12, 28, 21]
p get_products(arr2) == [3780, 540, 1260, 945, 756, 420]
p get_products(arr3) == [200, 0, 0, 0]

# Ok this works, and is essentially O(n), but it could be cleaner and a little
# bit more effecient. Instead of creating two arrays, (front and back)
# I want to just create one, and then add to it by walking backwards through
# the original array
#
# Pseudocode:
#
# function(arr)
#  create product_array, size of arr
#  create variable product, set equal to 1
#
#  iterate through array, starting on index = 0, and on each pass:
#   set product_array[index] = product
#   set product = product * arr[index]
#
#  reset product to 1
#  starting on the last element, iterate down through array, and on each pass:
#    set product_array[index] *= product
#    set product = product * arr[index]
#
#   return product_array
def get_products_improved(arr)
  product_array = Array.new(arr.length)
  product = 1

  i = 0
  while i < arr.length
    product_array[i] = product
    product *= arr[i]
    i += 1
  end

  product = 1
  i = arr.length - 1
  while i >= 0
    product_array[i] *= product
    product *= arr[i]
    i -= 1
  end

  product_array

end

arr1 = [1, 7, 3, 4]
arr2 = [1, 7, 3, 4, 5, 9]
arr3 = [0, 4, 5, 10]
p get_products_improved(arr1) == [84, 12, 28, 21]
p get_products_improved(arr2) == [3780, 540, 1260, 945, 756, 420]
p get_products_improved(arr3) == [200, 0, 0, 0]
