require_relative '../spec_helper.rb'

describe Array do
  it "should create an array normally." do
    expect(Array.new.class.to_s).to eq("Array")
  end

  it "Should sort an array correctly" do
    expect([5,4,3,2,1,6].bubblesort).to eq([1,2,3,4,5,6])
  end

  it "Should sort an array correctly" do
    expect(["z","y","x","w","v","u"].bubblesort).to eq(["u", "v", "w", "x", "y", "z"])
  end

  it "Should sort an array correctly" do
    expect((1..100).to_a.reverse.bubblesort).to eq((1..100).to_a)
  end

  it "Should sort an array correctly" do
    arr = Array.new
    100.times {arr.push(rand(1000))}
    expect(arr.bubblesort).to eq(arr.sort)
  end
end
