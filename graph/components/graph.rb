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
    list = start.adjacent
    list.each do |node|
      node.visit
    end

    while !list.empty?
      current = list.shift
      next if current.status > 1
      return true if current == fin
      current.leave
      current.adjacent.each do |node|
        list.push(node) if node.status == 0
      end
    end
    return false
  end

  def two_link(start, fin)

  end
end
