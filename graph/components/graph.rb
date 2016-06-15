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
    start.leave
    list = start.adjacent
    start.leave
    list.each {|node| node.visit }
    while !list.empty?
      current = list.shift
      next if current.status > 1
      return true if current == fin
      current.leave
      current.adjacent.each do |node|
        if node.status == 0
          list.push(node)
          node.visit
        end
      end
    end
    return false
  end

  def two_link(start, fin)

  end
end
