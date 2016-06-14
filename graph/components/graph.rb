class Graph
  attr_accessor :nodes
  def initialize
    @nodes = Array.new
  end

  def link_exist?(start, fin, paths = 1)
    if paths == 1
      one_link(start, fin)
    else
      two_link(start, fin)
    end
  end

  private
  def one_link(start, fin)

  end

  def two_link(start, fin)

  end
end
