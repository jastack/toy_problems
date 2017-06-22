def get_different_number(arr)
  n = arr.length
  temp = 0

  i = 0
  while i < n
    temp = arr[i]
    while temp < n && arr[temp] != temp
      arr[i], arr[temp] = arr[temp], arr[i]
    end
    i += 1
  end

  p arr

  j = 0
  while j < n
    if arr[j] != i
      return i
    end
    j += 1
  end

  n
end

arr = [0, 1, 3, 4, 7, 10]
p get_different_number(arr)
