require_relative 'binary_search_tree'

def kth_largest(tree_node, k)
  # Time Complexity O(n)
  # Space Complexity O(n)

  # This approach requires traversing the entire BST and gathering all nodes into an array, ordered from greatest -> lowest
  # Then you can access the array at (k-1)th index to get the answer
  count = 0
  nodes_in_desc_order = traverse_tree(tree_node)
  return nodes_in_desc_order[k-1]
end

def traverse_tree(node)
  return [] if node.nil?
  return traverse_tree(node.right) + [node] + traverse_tree(node.left)
end




def kth_largest(tree_node, k)
  # Time Complexity O(n)
  # Space Complexity O(1)

  # Because Ruby passes variables by value, this solution incorporates global variables so we can keep track of the count. We recursively check the nodes and count the children (right side first). When our count matches k, we log $result and return it at the end

  # For languages where you are able to pass by reference, we could pass count along in the traverse method

  $count = 0
  $result = nil

  traverse(tree_node, k)
  $result
end

def traverse(node, k)
  return if node.nil?

  traverse(node.right, k)
  $count = $count + 1

  if $count == k
    $result = node
  end

  traverse(node.left, k)
end
