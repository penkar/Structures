class Graph
  attr_accessor :nodes, :count
  def initialize
    @queue = []
    @nodes = Array.new
    @count = 1
  end

  def link_exist?(start, fin, paths = 1)
    return true if start == fin
    if paths == 1
      ans = one_link(start, fin)
    else
      ans = two_link(start, fin)
    end
    self.reset
    ans
  end

  def reset
    @nodes.each {|node| node.reset}
    @nodes = Array.new
    @count = 1
  end


  private

  def one_link(start, fin)
    start.leave
    @queue = start.adjacent
    @nodes.push(start)
    start.leave

    @queue.each do |node|
      @nodes.push(node);
      node.visit
    end

    while !@queue.empty?
      current = @queue.shift
      next if current.status > 1
      return true if current == fin
      @count += 1
      current.leave
      current.adjacent.each { |node| process_current(node) }
    end

    return false
  end

  def process_current(node)
    if node.status == 0
      @nodes.push(node)
      @queue.push(node)
      node.visit
    end
  end

  def two_link(start, fin)

  end
end
