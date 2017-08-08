class TempTracker

  def initialize()
    @max = nil
    @min = nil
    @sum = 0
    @mode = nil
    @num = 0
  end

  def insert(temp)
    @sum += temp
    @num += 1
    if @max == nil || temp > @max
      @max = temp
    end

    if @min == nil || temp < @min
      @min = temp
    end
  end

  def get_max
    @max
  end

  def get_min
    @min
  end

  def get_mean
    @sum / @num
  end

end
