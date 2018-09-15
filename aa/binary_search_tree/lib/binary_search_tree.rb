# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require_relative "bst_node"

class BinarySearchTree

  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value, current_node = @root)
    if @root.nil?
      @root = BSTNode.new(value)
      return @root
    end

    if value <= current_node.value
      if current_node.left
        insert(value, current_node.left)
      else
        new_node = BSTNode.new(value)
        new_node.parent = current_node
        current_node.left = new_node
      end
    else
      if current_node.right
        insert(value, current_node.right)
      else
        new_node = BSTNode.new(value)
        new_node.parent = current_node
        current_node.right = new_node
      end
    end

  end

  def find(value, current_node = @root)
    # if we encounter nil, we were unable to find the target
    return nil if current_node == nil

    if value == current_node.value
      # current node is the target, return node
      return current_node
    elsif value <= current_node.value
      # search the left branch
      return find(value, current_node.left)
    else
      # search right branch
      return find(value, current_node.right)
    end
  end

  def delete(value)

  end

  # helper method for #delete:
  def maximum(current_node = @root)

  end

  def depth(current_node = @root)
    # calculating depth using an iterative approach with a queue
    # we check the current level of nodes for children, and if there are additional children nodes added, we increase our depth by 1
    # after we check the node, we shift it off the queue
    nodes_queue = [current_node]
    depth = 0

    while nodes_queue.any?
      number_of_nodes = nodes_queue.length
      number_of_nodes.times do
        node = nodes_queue.shift
        nodes_queue << node.left if node.left
        nodes_queue << node.right if node.right
      end

      depth += 1 if nodes_queue.any?
    end

    depth
  end

  def depth(current_node = @root)
    # calculating depth using a recursive approach
    # if current node has no children return
    if current_node.left.nil? && current_node.right.nil?
      return 0
    end

    left_branch_depth = 0
    right_branch_depth = 0

    # if children nodes exist, add 1 to the depth and repeat the process to get the depth their children nodes
    if current_node.left
      left_branch_depth += 1 + depth(current_node.left)
    end

    if current_node.right
      right_branch_depth += 1 + depth(current_node.right)
    end

    # return the greater branch depth (one side may end early)
    return [left_branch_depth, right_branch_depth].max
  end

  def is_balanced?(current_node = @root)
  end

  def in_order_traversal(current_node = @root, arr = [])
  end


  private
  # optional helper methods go here:

end
