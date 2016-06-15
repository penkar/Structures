class LLNode
  attr_accessor :next, :previous, :value, :name
  def initialize(value = nil, name = nil)
    @value = value
    @name = name
  end

  
end
