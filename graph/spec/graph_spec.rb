require_relative '../spec_helper.rb'

describe Graph do
  a = Graph.new
  it "Is a graph" do
    expect(a.class.to_s).to eq('Graph')
  end

  it "Should have an empty array for nodes." do
    expect(a.nodes).to eq([])
  end

  it "Should be able to add nodes." do
    a.nodes = [1,2,3,4]
    expect(a.nodes).to eq([1,2,3,4])
    expect(a.nodes.length).to eq(4)
  end
end
