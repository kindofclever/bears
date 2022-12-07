/*
That´s the problem:

________

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

________

Here you can find the in detail problem: https://leetcode.com/problems/validate-binary-search-tree/

This is a very good resource to the problem https://www.youtube.com/watch?v=s6ATEkipzow

Below you find the solution to the LeetCode problem.
*/

const isValidBST = (root) => {
  let prev = null;
  let now = root;
  let stack = [];

  while (now || stack.length) {
    while (now) {
      stack.push(now);
      now = now.left;
    }

    now = stack.pop();

    if (prev && prev.val >= now.val) return false;

    prev = now;
    now = now.right;
  }

  return true;
};
