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

  def visit
    @status = 1
  end

  def leave
    @status = 2
  end

  def add_adjacent(*adjacent)
    @adjacent.concat([*adjacent])
    @adjacent.uniq!
  end

  def remove_adjacent(*adjacent)
    [*adjacent].each do |x|
			@adjacent.slice!(@adjacent.index(x)) if @adjacent.index(x)
		end
  end
end
