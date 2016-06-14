require_relative '../spec_helper.rb'

describe Node do
  a = Node.new
  b = Node.new("valueB")
  c = Node.new("valueC")
  d = Node.new("valueD")
  e = Node.new("valueE")

  it "Is a node" do
    expect(a.class.to_s).to eq('Node')
  end

  it "Should be able to visit a node." do
    a.visit
    expect(a.status).to eq(1)
  end

  it "Should be able to leave a node." do
    a.leave
    expect(a.status).to eq(2)
  end

  it "Should be able to reset a node." do
    a.reset
    expect(a.status).to eq(0)
  end

  it "Should default to nil value." do
    expect(a.value).to eq(nil)
  end

  it "Should be able to reset a node." do
    expect(b.value).to eq('valueB')
  end

  it "Should start with no adjacent nodes." do
    expect(e.adjacent).to eq([])
  end

  it "Should start with no adjacent nodes." do
    a.add_adjacent(b,c)
    expect(b.adjacent).to eq([])
    expect(a.adjacent).to eq([b,c])
  end

  it "Should be able to remove nodes." do
    a.remove_adjacent(b)
    expect(b.adjacent).to eq([])
    expect(a.adjacent).to eq([c])
  end
end
