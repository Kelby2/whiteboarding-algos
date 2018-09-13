require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    # defaults
    @store = StaticArray.new(8)
    @length = 0
    @capacity = 8
    @start_idx = 0
  end

  # O(1)
  def [](index)
    check_index
    # should not be able to see past the length of the array
    raise "index out of bounds" if index >= @length
    @store[index + @start_idx]
  end

  # O(1)
  def []=(index, val)
    @store[index + @start_idx] = val
  end

  # O(1)
  def pop
    check_index

    popped = self[@length - 1]
    @length -= 1
    self[@length] = nil
    popped
  end

  # O(1) ammortized
  def push(val)
    resize! if @length == @capacity
    self[@length] = val
    @length += 1
  end

  # O(1)
  def shift
    check_index
    shifted = self[0]
    @length -= 1
    @start_idx += 1
    shifted
  end

  # O(1) ammortized
  def unshift(val)
    resize! if @length == @capacity

    # the starting index moves back one space
    @start_idx -= 1
    self[@capacity] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index
    raise "index out of bounds" if @length == 0
  end

  def resize!
    @capacity *= 2
    new_store = StaticArray.new(@capacity)

    @length.times do |n|
      new_store[n] = self[n]
    end

    @start_idx = 0
    @store = new_store
  end
end
