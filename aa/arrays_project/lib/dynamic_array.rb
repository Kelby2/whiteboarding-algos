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
    popped = self[@length - 1]
    @length -= 1
    # reset that space in memory to nil
    self[@length] = nil

    # pop returns the element that was popped
    popped
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length == @capacity
    self[@length] = val
    @length += 1

    # return a copy of the current store (protect against tampering)
    @store.dup
  end

  # O(n): has to shift over all the elements.
  def shift
    check_index
    shifted = self[0]
    @length.times do |n|
      self[n] = @store[n + 1]
    end
    @length -= 1

    shifted
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @length == @capacity
    # @length..1, copying from the back of the array to the front
    @length.downto(1) do |n|
      self[n] = self[n - 1]
    end

    self[0] = val
    @length += 1

    # return a copy of the current store (protect against tampering)
    @store.dup
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

    # 0...length, copy the elements over to the new_store
    @length.times do |n|
      new_store[n] = self[n]
    end

    @store = new_store
  end
end
