# Given two rectangle objects, return where they overlap,
# as a rectangle objects

my_rectangle_one = {
  'x' => 3,
  'y' => 1,
  'width' => 3,
  'height' => 3
}

my_rectangle_two = {
  'x' => 1,
  'y' => 0,
  'width' => 3,
  'height' => 2
}

def intersection(rec1, rec2)
  # if they overlap
  x = nil
  y = nil
  width = nil
  height = nil

  rec1_x_1 = rec1['x']
  rec1_x_2 = rec1['x'] + rec1['width']

  rec1_y_1 = rec1['y']
  rec1_y_2 = rec1['y'] + rec1['height']

  rec2_x_1 = rec2['x']
  rec2_x_2 = rec2['x'] + rec2['width']

  rec2_y_1 = rec2['y']
  rec2_y_2 = rec2['y'] + rec2['height']


  # Determine x value
  if rec1_x_1 <= rec2_x_1
    if rec2_x_1 <= rec1_x_2
      x = rec2_x_1
      if rec2_x_2 >= rec1_x_2
        width = rec1_x_2 - rec2_x_1
      else
        width = rec2['width']
      end
    end
  elsif rec2_x_2 >= rec1_x_1
    x = rec1_x_1
    if rec2_x_2 <= rec1_x_2
      width = rec2_x_2 - rec1_x_1
    else
      width = rec1['width']
    end
  end

  # Determine y value
  if rec1_y_1 <= rec2_y_1
    if rec2_y_1 <= rec1_y_2
      y = rec2_y_1
      if rec2_y_2 >= rec1_y_2
        height = rec1_y_2 - rec2_y_1
      else
        height = rec2['height']
      end
    end
  elsif rec2_y_2 >= rec1_y_1
    y = rec1_y_1
    if rec2_y_2 <= rec1_y_2
      height = rec2_y_2 - rec1_y_1
    else
      height = rec1['height']
    end
  end

  info = [x, y, width, height]
  if info.include?(nil)
    return 'There is no overlap'
  else
    return {
      'x' => x,
      'y' => y,
      'width' => width,
      'height' => height
    }

  end

end

p intersection(my_rectangle_one, my_rectangle_two)
