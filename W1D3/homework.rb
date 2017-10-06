def sum_to(n)
  return nil if n < 1
  return 1 if n == 1
  sum_to(n - 1) + n
end

def add_numbers(nums_array)
  return nil if nums_array.empty?
  return nums_array.first if nums_array[1].nil?
  nums_array.pop + add_numbers(nums_array)
end

def gamma_fnc(n)
  return nil if n < 1 # a crude approximation
  return 1 if n == 1
  gamma_fnc(n - 1) * (n - 1)
end

def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  return true if flavors.first == favorite
  ice_cream_shop(flavors.drop(1), favorite)
end

def reverse(string)
  # longer, but more human readable
  tail = string[-1]
  remaining = string[0...-1]
  return '' if tail.nil?
  tail + reverse(remaining)
end
