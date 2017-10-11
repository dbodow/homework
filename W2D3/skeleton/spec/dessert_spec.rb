require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) { Dessert.new("cake", 3, chef) }
  let(:chef) { double("chef", name: "John") }
  let(:second_dessert) { Dessert.new("cake", 3, chef) }

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq("cake")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(3)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cake", 2.5, :chef) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient('a little bit of magic')
      expect(dessert.ingredients).to include('a little bit of magic')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      9.times { |time| dessert.add_ingredient(time) }
      9.times { |time| second_dessert.add_ingredient(time) }
      dessert.mix!
      expect(dessert.ingredients).to_not eq(second_dessert.ingredients)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do

    end

    it "raises an error if the amount is greater than the quantity" do
      expect { dessert.eat(4) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize) { "Chef John the Great Baker" }
      expect(dessert.serve).to eq("Chef John the Great Baker has made 3 cakes!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      allow(chef).to receive(:bake).with(dessert)
      dessert.make_more
      expect(chef).to have_received(:bake).with(dessert)
    end
  end
end
