require_relative '../spec_helper.rb'

describe LLNode do
  it "Should know what it is." do
    a = LLNode.new
    expect(a.class.to_s).to eq("LLNode")
  end

  it "Should be able to carry a name and value" do
    a = LLNode.new(100, "Name")
    expect(a.value).to eq(100)
    expect(a.name).to eq("Name")
  end

  it "Should initialize with nil name and value" do
    a = LLNode.new
    expect(a.value).to eq(nil)
    expect(a.name).to eq(nil)
  end
end
