class Graph
  attr_accessor :nodes, :count
  def initialize
    @nodes = Array.new
    @count = 1
  end

  def link_exist?(start, fin, paths = 1)
    if paths == 1
      one_link(start, fin)
    else
      two_link(start, fin)
    end
  end

  def reset
    puts @count
    puts @count
    puts @count
    puts @count
    @nodes.each {|node| node.reset}
    @nodes = Array.new
    @count = 1
  end

  private

  def one_link(start, fin)
    start.leave
    list = start.adjacent
    @nodes.push(start)
    start.leave

    list.each do |node|
      @nodes.push(node);
      node.visit
    end

    while !list.empty?
      current = list.shift
      next if current.status > 1
      return true if current == fin
      @count += 1
      current.leave
      current.adjacent.each do |node|
        if node.status == 0
          @nodes.push(node)
          list.push(node)
          node.visit
        end
      end
    end
    self.reset
    return false
  end

  def two_link(start, fin)

  end
end
