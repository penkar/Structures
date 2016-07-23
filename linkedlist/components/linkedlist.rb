class LinkedList
  attr_accessor :head, :tail, :length
  def initialize
    @length = 0
    @head = nil
    @tail = nil
  end

  def add(value=nil, name=nil)
    node = LLNode.new(value, name)
    if !@head
      @head = node
      @tail = node
    else
      cur = @tail
      @tail.next = node
      @tail = node
      @tail.previous = cur
    end
    @length += 1
  end

  def add_head(value=nil, name=nil)
    node = LLNode.new(value, name)
    node.next = @head
    iterate
    @head.previous = node
    @head = node
  end

  def remove_index(index)
    return false if @length < index
    current = @head
    (index - 1).times do
      current = current.next
    end
    current.previous.next = current.next if current.previous
    current.next.previous = current.previous if current.next
    iterate(false)
  end

  def remove
    iterate(false)
    current = @head.next
    current.previous = nil
    @head = current
  end

  def remove_tail
    prev = @tail.previous
    prev.next = nil
    @tail = prev
    iterate(false)
  end

  private
  def iterate(un = true)
    @length += un ? 1 : -1
  end
end
