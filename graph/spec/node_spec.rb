require_relative '../spec_helper.rb'

describe Node do
  it "Is a graph" do
    a = Node.new
    expect(a.class.to_s).to eq('Node')
  end
end
