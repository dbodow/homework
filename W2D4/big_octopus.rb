FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
TILES_ARRAY = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
TILES_HASH = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}
# def bubble_sort(arr)
#   made_swap = true
#   while made_swap
#     made_swap = false
#     (0...arr.length).each do |end_i|
#       if arr[end_i - 1] > arr[end_i]
#         arr[end_i - 1], arr[end_i] = arr[end_i], arr[end_i - 1]
#         made_swap = true
#       end
#     end
#   end
#   arr
# end

# worst case: O(n^2)
# average case: O(n^2)
# best case: O(n^2)
def sluggish_eat(arr)
  captured = ''
  (0...arr.length).each do |i|
    captured = arr[i] if arr[i].length > captured.length
    (0...i).each do |j|
      # I guess this octopus double checks to see if it left a good fish behind?
      captured = arr[j] if arr[j].length > captured.length
    end
  end
  captured
end

# Worst case: O(n log(n))
# Ave case: O(n log(n))
# Best case: O(n)
# recall that reject is linear
def dominant_eat(arr)
  until arr.all? { |fish| fish.length == arr[0].length }
    arr.reject! { |fish| fish.length < arr[0].length }
    arr.rotate!
  end
  arr[0]
end
# Worst case: O(n)
# Ave case: O(n)
# Best case: O(n)
def clever_eat(arr)
  captured = ''
  (0...arr.length).each do |i|
    captured = arr[i] if arr[i].length > captured.length
  end
  captured
end

def slow_dance(direction, array)
  (0...array.length).each do |i|
    return i if array[i] == direction
  end
end

def fast_dance(direction, hash)
  hash[direction]
end

# QUESTION: Do abstract data structures also ensure a particular speed?
# For e.g., hashes are amortized constant lookup time, but our previous
# homework implementing a hash was clearly linear time lookup (using an array)
# Do we really need to go make a hash funciton that outputs a memory block pointer
# to get a true hash with constant lookup time?
