require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @length = 0
    @capacity = 8
  end

  # O(1)
  def [](index)
    check_index
    raise "index out of bounds" if index >= @length
    @store[index]
  end

  # O(1)
  def []=(index, value)
    @store[index] = value
  end

  # O(1)
  def pop
    check_index
    @length -= 1
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length == @capacity
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    check_index
    @length.times do |n|
      @store[n] = @store[n + 1]
    end

    @length -= 1
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    @length.downto(1) do |n|
      @store[n] = @store[n - 1]
    end

    @store[0] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index
    raise "index out of bounds" if @length == 0
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
    new_store = StaticArray.new(@capacity)
    @length.times do |n|
      new_store[n] = @store[n]
    end

    @store = new_store
  end
end
