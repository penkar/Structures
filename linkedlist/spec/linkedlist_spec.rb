require_relative '../spec_helper.rb'

describe LinkedList do
  it "Is a LinkedList" do
    ll = LinkedList.new
    expect(ll.class.to_s).to eq('LinkedList')
  end
end
