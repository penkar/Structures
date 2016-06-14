class Node
  attr_accessor :adjacent, :value, :status
  def initialize(value = nil)
    @value = value
    @adjacent = Array.new
    @status = 0
  end

  def reset
    @status = 0
  end

  def add_adjacent(*adjacent)
    @adjacent.push adjacent
    @adjacent.uniq!
  end

  def remove_adjacent(*adjacent)
    [*adjacent].each do |x|
			@arr.slice!(@arr.index(x)) if @arr.index(x)
		end
  end
end
