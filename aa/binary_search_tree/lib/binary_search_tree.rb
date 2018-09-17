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

  def delete(target, start = @root)
    return nil if find(target, start).nil?
    replacement = nil
    node = find(target, start)

    case has_children?(node)
    when -1 # no children
      if !node.parent
        return @root = nil
      end

      if is_left_child?(node)
        node.parent.left = nil
      else
        node.parent.right = nil
      end

    when 0 # only 1 child
      return only_child(node) if !node.parent
      if is_left_child?(node)
        node.parent.left = only_child(node)
      else
        node.parent.right = only_child(node)
      end
    when 1 # node that we're deleting has 2 children
      next_greatest = maximum(node.left)
      if !node.parent
      elsif is_left_child?(node)
        node.parent.left = next_greatest
      else
        node.parent.right = next_greatest
      end

      delete(next_greatest.value, next_greatest)
      next_greatest.left = node.left
      next_greatest.right = node.right
    end

  end

  # helper method for #delete:
  def maximum(current_node = @root)
    if current_node.right.nil?
      return current_node
    end

    maximum(current_node.right)
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
    return 0 if current_node.nil? || has_children?(current_node) == -1

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

    left_depth = depth(current_node.left)
    right_depth = depth(current_node.right)

    if (left_depth - right_depth).abs < 1
      case has_children?(current_node)
      when -1
        return true
      when 0
        return is_balanced?(only_child(current_node))
      when 1
        return is_balanced?(current_node.left) && is_balanced?(current_node.right)
      end
    else
      return false
    end
  end

  def in_order_traversal(current_node = @root, arr = [])
      return [] if current_node.nil?
      return in_order_traversal(current_node.left) + [current_node.value] + in_order_traversal(current_node.right)
  end


  private
  # optional helper methods go here:

  def is_left_child?(node)
    # return 1 if this node was the left child of it's parent
    # return 2 if this node was the right child of it's parent
    return false if !node.parent
    node.value <= node.parent.value
  end

  def has_children?(node)
    # return -1 if this node has no children
    # return 0 if this node has only has 1 child
    # return 1 if this node has both children
    if node.left.nil? && node.right.nil?
      return -1
    elsif node.left && node.right
      return 1
    else
      return 0
    end
  end

  def only_child(node)
    # only used if node has only 1 child
    # returns the only child of the node
    node.left || node.right
  end

end
