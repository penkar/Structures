# require_relative '../../../linkedlist/component.rb'

class Array
  def bucketsort
    bucket = Hash.new(0)
    tallest = self.first
    smallest = self.first
    self.each do |x|
      bucket[x] += 1
      tallest = x if x > tallest
      smallest = x if x < smallest
    end
    arr = Array.new
    smallest.upto(tallest) do |x|
      bucket[x].times {|y| arr.push(x)}
    end
    return arr
  end
end
