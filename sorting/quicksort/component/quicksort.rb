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

  # private
  # def partition(arr, left, right)
  #
  # end
end


# function quicksort(array)
#     less, equal, greater := three empty arrays
#     if length(array) > 1
#         pivot := select any element of array
#         for each x in array
#             if x < pivot then add x to less
#             if x = pivot then add x to equal
#             if x > pivot then add x to greater
#         quicksort(less)
#         quicksort(greater)
#         array := concatenate(less, equal, greater)
