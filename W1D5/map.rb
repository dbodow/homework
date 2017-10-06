# A Map is a Hash-like data structure
# it can #assign(key, value), #lookup(key), #remove(key), and #show
class MyMap
  def initialize
    # create ivar to store stack here!
    @mymap = []
  end

  def lookup(key)
    @mymap.each do |el|
      return el[1] if el[0] == key
    end
  end

  def remove(key)
    @mymap.reject! { |el| el[0] == key }
  end

  def assign(key, value)
    @mymap.each_with_index do |pair, i|
      if pair[0] == key
        @mymap[i][1] = value
        return value
      end
    end
    @mymap << [key, value]
    value
  end

  def show
    @mymap
  end
end
