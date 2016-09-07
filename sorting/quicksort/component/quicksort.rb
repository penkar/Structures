class Array
  def quicksort
    return self if self.length < 2
    less = Array.new
    gret = Array.new
    equal = Array.new
    pivot = (self.first + self.last) / 2
    self.each do |n|
      if n > pivot
        gret.push(n)
      elsif n == pivot
        equal.push(n)
      else
        less.push(n)
      end
    end
    gret = gret.quicksort
    less = less.quicksort
    return less + equal + gret
  end
end
