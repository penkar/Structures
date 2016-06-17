class Array
  def mergesort
    return self if self.length < 2
    len = self.length
    arr1, arr2 = self[0.. (len/2) -1], self[len/2 .. -1]
    arr1, arr2 = arr1.mergesort, arr2.mergesort

    return merge(arr1, arr2)
  end

  private
  def merge(aarr, barr)
    carr = Array.new
    while !aarr.empty? && !barr.empty?
      if aarr[0] > barr[0]
        carr.push(barr.shift)
      else
        carr.push(aarr.shift)
      end
    end

    carr = carr.concat(aarr) if !aarr.empty?
    carr = carr.concat(barr) if !barr.empty?

    return carr
  end
end
