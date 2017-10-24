def largest_product(arr)
  arr.sort!
  case_one = arr[-3..-1].inject(&:*)
  case_two = arr[0]*arr[1]*arr[-1]
  case_one > case_two ? case_one : case_two
end

arr = [-5,-2,3,4,6]
p largest_product(arr)
