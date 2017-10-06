require_relative 'homework.rb'

# sum_to Test Cases
puts sum_to(5)  == 15
puts sum_to(1)  == 1
puts sum_to(9)  == 45
puts sum_to(-8) == nil

# add_numbers Test Cases
puts add_numbers([1,2,3,4]) == 10
puts add_numbers([3]) == 3
puts add_numbers([-80,34,7]) == -39
# More easily made polymorphic if == 0 (add. ident.) instead below...
puts add_numbers([]) == nil

# gamma_fnc Test Cases
puts gamma_fnc(0)  == nil
puts gamma_fnc(1)  == 1
puts gamma_fnc(4)  == 6
puts gamma_fnc(8)  == 5040

# ice_cream_shop Test Cases
puts ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  == false
puts ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  == true
puts ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  == false
puts ice_cream_shop(['moose tracks'], 'moose tracks')  == true
puts ice_cream_shop([], 'honey lavender')  == false

# reverse Test Cases
puts reverse("house") == "esuoh"
puts reverse("dog") == "god"
puts reverse("atom") == "mota"
puts reverse("q") == "q"
puts reverse("id") == "di"
puts reverse("") == ""
