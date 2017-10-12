class LRUCache
  def initialize(size)
    @size = size
    @cached_values = []
  end

  def count
    # returns number of elements currently in cache
    @cached_values.length
  end

  def add(el)
    # adds element to cache according to LRU principle

    # delete any old copies
    (0...@cached_values.length).each do |idx|
      delete_index(idx) if @cached_values[idx] == el
    end

    # add the element in at the end
    @cached_values.push(el)

    # delete els if too big
    @cached_values.shift if count > @size
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @cached_values
  end

  private
  # helper methods go here!
  def delete_index(idx)
    @cached_values = @cached_values[0...idx] + @cached_values[idx+1..-1]
  end
end
