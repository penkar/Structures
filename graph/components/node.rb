class Node
  attr_accessor :adjacent, :value, :status
  def init(value, adjacent)
    @value = value
    @adjacent = adjacent
    @status = 0
  end
end
