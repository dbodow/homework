require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups = Array.new(14) { Array.new(4, :stone) }
    @cups[6], @cups[13] = [], []
  end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' if [6, 13].include?(start_pos)
    raise 'Invalid starting cup' unless start_pos.between?(1, 13)
  end

  def make_move(start_pos, current_player_name)
    @current_player_name = current_player_name
    cup_index = start_pos
    case current_player_name
    when @player1
      wrong_cup_index = 13
    when @player2
      wrong_cup_index = 6
    end

    stones = @cups[cup_index].length
    @cups[cup_index] = []

    i = 0
    while i < stones
      cup_index = (cup_index + 1) % 14
      unless cup_index == wrong_cup_index
        @cups[cup_index] << :stone
        i += 1
      end
    end
    render
    next_turn(cup_index)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if @current_player_name == @player2 && ending_cup_idx == 13
      :prompt
    elsif @current_player_name == @player1 && ending_cup_idx == 6
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
    false
  end

  def winner
    case @cups[6] <=> @cups[13]
    when -1
      @player2
    when 0
      :draw
    when 1
      @player1
    end
  end
end
