require_relative '../spec_helper.rb'

describe LRU do
  it "Should be able to create a cache." do
    cache = LRU.new(3)
    expect(cache.class.to_s).to eq('LRU')
  end

  it "Should raise an error if size is not positive." do
    expect { LRU.new(0) }.to raise_error(ArgumentError)
  end

  it "Should be able to set and get values." do
    cache = LRU.new(3)
    cache.set("a", 1)
    cache.set("b", 2)
    cache.set("c", 3)
    expect(cache.get("a")).to eq(1)
    expect(cache.get("b")).to eq(2)
    expect(cache.get("c")).to eq(3)
  end

  it "Should evict the least recently used item when the cache is full." do
    cache = LRU.new(3)
    cache.set("a", 1)
    cache.set("b", 2)
    cache.set("c", 3)
    cache.get("a") # Access 'a' to make it recently used
    cache.set("d", 4) # This should evict 'b'
    expect(cache.get("b")).to eq(nil) # 'b' should be evicted
    expect(cache.get("a")).to eq(1) # 'a' should still be present
    expect(cache.get("c")).to eq(3) # 'c' should still be present
    expect(cache.get("d")).to eq(4) # 'd' should be present
  end
end