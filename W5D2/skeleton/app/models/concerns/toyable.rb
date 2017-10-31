module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as: :toyable
  end

  # This method should first find or create a toy whose name matches the argument.
  # Next it should add this toy to self's toys. For both steps, you may wish to
  # use the ActiveRecord #find_or_create_by method.
  def receive_toy(name)
    Toy.find_or_create_by(name: name, toyable_type: self.class.to_s, toyable_id: self.id)
  end
end
