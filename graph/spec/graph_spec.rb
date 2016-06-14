require_relative '../spec_helper.rb'

describe Graph do
  graph = Graph.new

  # a = Node.new
  # b = Node.new("valueB")
  # c = Node.new("valueC")
  # d = Node.new("valueD")
  # e = Node.new("valueE")
  # f = Node.new("valueE")
  # g = Node.new("valueE")
  # h = Node.new("valueE")
  # i = Node.new("valueE")
  # a.add_adjacent(b,c)
  # c.add_adjacent(d,e)
  # e.add_adjacent(f,g)

  it "Is a graph" do
    expect(graph.class.to_s).to eq('Graph')
  end

  it "Should have an empty array for nodes." do
    expect(graph.nodes).to eq([])
  end

  it "Should be able to add nodes." do
    graph.nodes = [1,2,3,4]
    expect(graph.nodes).to eq([1,2,3,4])
    expect(graph.nodes.length).to eq(4)
  end

  it "should be able to determine there is a link between 2 nodes in one way." do
    a = Node.new("valueA")
    b = Node.new("valueB")
    c = Node.new("valueC")
    d = Node.new("valueD")
    e = Node.new("valueE")
    f = Node.new("valueE")
    g = Node.new("valueE")
    h = Node.new("valueE")
    i = Node.new("valueE")
    a.add_adjacent(b,c)
    c.add_adjacent(d,e)
    e.add_adjacent(f,g)

    value = graph.link_exist?(a, g)
    expect(value).to eq(true)
  end

  # it "should correctly be able to determine there is a link between 2 nodes in one way." do
  #   value = graph.link_exist?(a, i)
  #   expect(value).to eq(false)
  # end
end
