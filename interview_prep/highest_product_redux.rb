class MaxMinTwo
  attr_accessor :first, :second, :product

  def initialize(first, second)
    @first = first
    @second = second
    @product = @first * @second
  end

  def update_max(new_num)
    check_first = @first * new_num
    check_second = @second * new_num
    if check_first > @product && check_first > check_second
      @product = check_first
      @second = new_num
    elsif check_second > @product
      @product = check_second
      @first = new_num
    end

  end

  def update_min(new_num)
    check_first = @first * new_num
    check_second = @second * new_num
    if check_first < @product && check_first < check_second
      @product = check_first
      @second = new_num
    elsif check_second < @product
      @product = check_second
      @first = new_num
    end

  end


end


# Cases - All positive, in which case we want highest two
# All negative, in which case we want lowest two
# One positive and one negative

# max_set = MaxMinTwo.new(1,2)
# min_set = MaxMinTwo.new(1,2)
# max_set.update_max(3)
# min_set.update_min(3)
# p max_set.product
# p min_set.product


def highest_product(arr)
  if arr.length < 3
    return "Array not long enough!"
  end

  max_two = MaxMinTwo.new(arr[0], arr[1])
  min_two = MaxMinTwo.new(arr[0], arr[1])

  max_three = nil

  i = 2
  while i < arr.length
    max_check = arr[i] * max_two.product
    min_check = arr[i] * min_two.product
    three_check = max_check > min_check ? max_check : min_check
    if max_three == nil || three_check > max_three
      max_three = three_check
    end

    max_two.update_max(arr[i])
    min_two.update_min(arr[i])


    i += 1
  end

  max_three



end

arr_one = [1, 10, -5, 1, -100]
#                      ^
# max_two = 1*2 => 3*2 => 4*3
# min_two = 1*2
# max_three = 2 * 3 = 6 => 40

# Ok pseudocode time.
arr_two = [1, 2]

p highest_product(arr_one)
# p highest_product(arr_two)
