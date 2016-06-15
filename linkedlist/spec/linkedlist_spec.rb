require_relative '../spec_helper.rb'

describe LinkedList do
  it "Is a LinkedList" do
    ll = LinkedList.new
    expect(ll.class.to_s).to eq('LinkedList')
    expect(ll.head).to eq(nil)
    expect(ll.tail).to eq(nil)
    expect(ll.length).to eq(0)
  end
end
