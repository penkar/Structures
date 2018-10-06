require_relative '../spec_helper.rb'

describe Array do
  it "should create an array normally." do
    expect(Array.new.class.to_s).to eq("Array")
    # puts Array.new.methods.sort
  end

  it "Should sort an array correctly" do
    expect([5,4,3,2,1,6].selectionsort).to eq([1,2,3,4,5,6])
  end

  it "Should sort an array correctly" do
    arr = Array.new
    100.times {arr.push(rand(1000))}
    expect(arr.selectionsort).to eq(arr.sort)
  end

  it "Should sort an array correctly" do
    expect((1..100).to_a.reverse.selectionsort).to eq((1..100).to_a)
  end
end
