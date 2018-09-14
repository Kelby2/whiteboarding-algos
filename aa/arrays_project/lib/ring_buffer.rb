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
    # should raise an error if trying to access past the length of the array
    raise "index out of bounds" if index >= @length

    # if index < start_idx, we're looking at the back section of the ring buffer (@store), so the index we're looking for will be at the 'end' of the array
    if index < @start_idx
      # @capacity - @start_idx is equal to the true start position
      @store[@capacity - @start_idx + index]
    else
      # we take the difference of the @start_idx from index to get the proper position (looking at front of the @store)
      @store[index - @start_idx]
    end
  end

  # O(1)
  def []=(index, val)

    # if index < start_idx, we're looking at the back section of the ring buffer (@store), so the index we're looking for will be at the 'end' of the array
    if index < @start_idx
      # @capacity - @start_idx is equal to the true start position
      @store[@capacity - @start_idx + index] = val
    else
      # we take the difference of the @start_idx from index to get the proper position (looking at front of the @store)
      @store[index - @start_idx] = val
    end

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
    @start_idx -= 1
    shifted
  end

  # O(1) ammortized
  def unshift(val)
    resize! if @length == @capacity

    # the starting index is the buffer (shows how many spaces we're taking from the 'back' of the array)
    @start_idx += 1
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
      # when resizing to the new array, the new array should start with all the elements in the proper index
      new_store[n] = @store[(n + @start_idx) % @length]
    end

    @start_idx = 0
    @store = new_store
  end
end
