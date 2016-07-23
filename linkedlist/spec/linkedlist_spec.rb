require_relative '../spec_helper.rb'

describe LinkedList do
  it "Is a LinkedList" do
    ll = LinkedList.new
    expect(ll.class.to_s).to eq('LinkedList')
    expect(ll.head).to eq(nil)
    expect(ll.tail).to eq(nil)
    expect(ll.length).to eq(0)
  end

  it "Should be able to add a node" do
    ll = LinkedList.new
    ll.add(1,'name1')
    expect(ll.length).to eq(1)
    ll.add(2,'name2')
    expect(ll.length).to eq(2)
    expect(ll.head.value).to eq(1)
    expect(ll.tail.value).to eq(2)
  end

  it "Should be able to add a node to the head if wanted." do
    ll = LinkedList.new
    ll.add(1,'name1')
    expect(ll.length).to eq(1)
    ll.add_head(2,'name2')
    expect(ll.length).to eq(2)
    expect(ll.head.value).to eq(2)
    expect(ll.tail.value).to eq(1)
  end

  it "Should be able to remove the tail of the LinkedList" do
    ll = LinkedList.new
    ll.add(1,'name1')
    ll.add(2,'name2')
    ll.add(3,'name3')
    expect(ll.length).to eq(3)
    expect(ll.tail.value).to eq(3)
    ll.remove_tail
    expect(ll.length).to eq(2)
    expect(ll.tail.value).to eq(2)
  end

  it "Should be able to remove the first node form the LinkedList" do
    ll = LinkedList.new
    ll.add(1, 'name1')
    ll.add(2, 'name2')
    ll.remove
    expect(ll.length).to eq(1)
    expect(ll.head.value).to eq(2)
  end

  it "Should be able to remove nodes within the linked list" do
    ll = LinkedList.new
    ll.add(1, 'name1')
    ll.add(2, 'name2')
    ll.add(3, 'name3')
    ll.remove_index(2)
    expect(ll.length).to eq(2)
    expect(ll.head.value).to eq(1)
    expect(ll.tail.value).to eq(3)
  end
end
