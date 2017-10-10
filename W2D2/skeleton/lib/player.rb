class Player
  attr_reader :name, :side

  def initialize(name, side)
    @name = name
    @side = side
  end

  # Player#prompt: NilClass => Fixnum

  # When called, prompts the player for input which returns the index of the
  # cup they wish to use to start their move (as a Fixnum)
  def prompt
    puts "#{@name}, please enter which cup you would like to start from: "
    start_pos = gets.chomp.to_i
    if (start_pos.between?(1,6) && @side != 1 ||
        start_pos.between?(7,12) && @side != 2)
      raise "Not your side!"
    else
      start_pos
    end
  end
end
