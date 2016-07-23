require_relative '../spec_helper.rb'

describe Graph do
  it "Is a graph" do
    graph = Graph.new
    expect(graph.class.to_s).to eq('Graph')
  end

  it "Should have an empty array for nodes." do
    graph = Graph.new
    expect(graph.nodes).to eq([])
  end

  it "Should be able to add nodes." do
    graph = Graph.new
    graph.nodes = [1,2,3,4]
    expect(graph.nodes).to eq([1,2,3,4])
    expect(graph.nodes.length).to eq(4)
  end

  it "should be able to determine there is a link between 2 nodes in one way." do
    graph = Graph.new
    a = GraphNode.new("valueA")
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    d = GraphNode.new("valueD")
    e = GraphNode.new("valueE")
    f = GraphNode.new("valueF")
    g = GraphNode.new("valueG")
    h = GraphNode.new("valueH")
    i = GraphNode.new("valueI")
    a.add_adjacent(b, c)
    b.add_adjacent(a)
    c.add_adjacent(d,e,b,a)
    d.add_adjacent(c)
    e.add_adjacent(c,f,g)
    f.add_adjacent(f)
    g.add_adjacent(e)
    value = graph.link_exist?(a, g)
    expect(value).to eq(true)
  end

  it "should understand if the start equals the finish" do
    graph = Graph.new
    a = GraphNode.new("valueA")
    value = graph.link_exist?(a,a)
    expect(value).to eq(true)
  end

  it "should correctly be able to determine there is a link between 2 nodes in one way." do
    graph = Graph.new
    a = GraphNode.new("valueA")
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    d = GraphNode.new("valueD")
    e = GraphNode.new("valueE")
    f = GraphNode.new("valueF")
    g = GraphNode.new("valueG")
    h = GraphNode.new("valueH")
    i = GraphNode.new("valueI")
    a.add_adjacent(b, c)
    b.add_adjacent(a)
    c.add_adjacent(d,e,b,a)
    d.add_adjacent(c)
    e.add_adjacent(c,f,g)
    f.add_adjacent(f)
    g.add_adjacent(e)
    value = graph.link_exist?(a, i)
    expect(value).to eq(false)
  end

  it "should be about to perform a bi directional search" do
    graph = Graph.new
    a = GraphNode.new("valueA")
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    d = GraphNode.new("valueD")
    e = GraphNode.new("valueE")
    f = GraphNode.new("valueF")
    g = GraphNode.new("valueG")
    h = GraphNode.new("valueH")
    i = GraphNode.new("valueI")
    a.add_adjacent(b, c)
    b.add_adjacent(a)
    c.add_adjacent(d,e,b,a)
    d.add_adjacent(c)
    e.add_adjacent(c,f,g)
    f.add_adjacent(f)
    g.add_adjacent(e)
    value = graph.link_exist?(a,e,2)
    expect(value).to eq(true)
  end

  it "should be about to perform a bi directional search" do
    graph = Graph.new
    a = GraphNode.new("valueA")
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    d = GraphNode.new("valueD")
    e = GraphNode.new("valueE")
    f = GraphNode.new("valueF")
    g = GraphNode.new("valueG")
    h = GraphNode.new("valueH")
    i = GraphNode.new("valueI")
    a.add_adjacent(b, c)
    b.add_adjacent(a)
    c.add_adjacent(d,e,b,a)
    d.add_adjacent(c)
    e.add_adjacent(c,f,g)
    f.add_adjacent(f)
    g.add_adjacent(e)
    value = graph.link_exist?(a,i,2)
    expect(value).to eq(false)
  end
end
