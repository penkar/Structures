class Array
  def selectionsort
    len = self.length;
    return self if len < 2
    for i in 0..(self.length) do 
      low = self[i]
      lowindex = i
      subarray = self[i..-1]
      subarray.each_with_index do |item,index| 
        low, lowindex = item, index if item < low
      end
      self[i], self[lowindex + i] = self[lowindex + i], self[i] if i != lowindex;
    end
    return self
  end
end
