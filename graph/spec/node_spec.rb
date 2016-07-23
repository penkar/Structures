require_relative '../spec_helper.rb'

describe GraphNode do
  it "Is a node" do
    a = GraphNode.new
    expect(a.class.to_s).to eq('GraphNode')
  end

  it "Should be able to visit a node." do
    a = GraphNode.new
    a.visit
    expect(a.status).to eq(1)
  end

  it "Should be able to leave a node." do
    a = GraphNode.new
    a.leave
    expect(a.status).to eq(2)
  end

  it "Should be able to reset a node." do
    a = GraphNode.new
    a.reset
    expect(a.status).to eq(0)
  end

  it "Should default to nil value." do
    a = GraphNode.new
    expect(a.value).to eq(nil)
  end

  it "Should be able to reset a node." do
    b = GraphNode.new("valueB")
    expect(b.value).to eq('valueB')
  end

  it "Should start with no adjacent nodes." do
    e = GraphNode.new
    expect(e.adjacent).to eq([])
  end

  it "Should start with no adjacent nodes." do
    a = GraphNode.new
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    a.add_adjacent(b,c)
    expect(b.adjacent).to eq([])
    expect(a.adjacent).to eq([b,c])
  end

  it "Should be able to remove nodes." do
    a = GraphNode.new
    b = GraphNode.new("valueB")
    c = GraphNode.new("valueC")
    a.add_adjacent(b,c)
    a.remove_adjacent(b)
    expect(b.adjacent).to eq([])
    expect(a.adjacent).to eq([c])
  end
end
