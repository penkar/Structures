class Array
  def bubblesort
    len = self.length
    while true
      bool = true
      0.upto(len - 2) do |x|
        bool, self[x], self[x+1] = false, self[x+1], self[x] if self[x] > self[x+1]
      end
      break if bool
    end
    return self
  end
end
