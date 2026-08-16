class MRU
  def initialize(size)
    raise ArgumentError, 'size must be positive' unless size.positive?

    @size = size
    @cache = {}
  end

  def get(key)
    return nil unless @cache.key?(key)
    
    value = @cache.delete(key)
    @cache[key] = value
    value
  end

  def set(key, value)
    if @cache.key?(key)
      @cache.delete(key)
    elsif @cache.size >= @size
      @cache.delete(@cache.keys.last)
    end
    @cache[key] = value
  end
end