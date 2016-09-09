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
    carr, alen, blen = Array.new, aarr.length, barr.length
    a, b = 0, 0
    # while !aarr.empty? && !barr.empty?
    while (a < alen) && (b < blen)
      if aarr[a] > barr[b]
        carr.push(barr[b])
        b += 1
      else
        carr.push(aarr[a])
        a += 1
      end
    end

    carr = carr.concat(aarr.slice(a,alen) || [])
    carr = carr.concat(barr.slice(b,blen) || [])

    return carr
  end
end
