# Implement a queue with #enqueue and #dequeue, as well as a #max API,
# a method which returns the maximum element still in the queue. This
# is trivial to do by spending O(n) time upon dequeuing.
# Can you do it in O(1) amortized? Maybe use an auxiliary storage structure?

# Use your RingBuffer to achieve optimal shifts! Write any additional
# methods you need.

require_relative 'ring_buffer'

class QueueWithMax
  attr_accessor :store

  def initialize
    @store = RingBuffer.new
    @max_storage = RingBuffer.new
  end

  def enqueue(val)
    @store.push(val)
    # changes enqueue to an O(n) operation as we would have to iterate through the max_storage and pop along the way to remove smaller nums
    while @max_storage.length != 0 && @max_storage[@max_storage.length - 1] < val
      @max_storage.pop
    end

    @max_storage.push(val)
  end

  def dequeue
    shifted = @store.shift

    if shifted == @max_storage[0]
      @max_storage.shift
    end

    shifted
  end

  def max
    @max_storage[0]
  end

  def length
    @store.length
  end

end
