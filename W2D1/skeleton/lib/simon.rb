# require 'byebug'
# require 'colorize'

# The Simon color repeating game
class Simon
  COLORS = %w[red blue green yellow].freeze

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    reset_game
  end

  def play
    take_turn until @game_over
    round_success_message unless @game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message unless @game_over
  end

  def show_sequence
    add_random_color
    sync_sequence_length
    puts 'The sequence is:'
    # @seq.each { |color| puts color.colorize(color.to_sym) }
    @seq.each { |color| puts color }
  end

  def require_sequence
    puts 'Now repeat it!'
    @seq.each do |color|
      begin
        user_input = gets.chomp.downcase
        raise "#{user_input} is not valid!" unless COLORS.include?(user_input)
      rescue
        "#{user_input} is not valid! Try again with one of #{COLORS}"
        retry
      end
      @game_over = true if user_input != color
      break if @game_over
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def game_over_message
    puts "Game over! You lost on round #{@sequence_length}."
  end

  def round_success_message
    puts "You passed round #{@sequence_length}"
  end

  def sync_sequence_length
    @sequence_length = @seq.length + 1
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
