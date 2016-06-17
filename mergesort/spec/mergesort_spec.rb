require_relative '../spec_helper.rb'

describe Array do
  it "should create an array normally." do
    expect(Array.new.class.to_s).to eq("Array")
  end
  # puts Array.new.methods.sort
end
