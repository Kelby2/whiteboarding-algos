require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = []
    @start_idx = 0
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, val)
    @store[index] = val
  end

  # O(1)
  def pop
    check_index
    @length -= 1
    @store.pop
  end

  # O(1) ammortized
  def push(val)
    resize! if @length == @capacity
    @store.push(val)
    @length += 1
  end

  # O(1)
  def shift
    check_index
    @length -= 1
    @store.shift
  end

  # O(1) ammortized
  def unshift(val)
    resize! if @length == @capacity
    @store.unshift(val)
    @length += 1
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index = 0)
    if @length == 0 || index >= length
      raise "index out of bounds"
    end
  end

  def resize!
    @capacity *= 2
  end
end
