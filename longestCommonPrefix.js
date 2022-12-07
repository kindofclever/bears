/*
That´s the problem:

________

Given a string, find the longest common prefix among all strings in the array.

For example, if the array is ["flower", "flow", "flight"], the longest common prefix is "fl".
________

Here you can find the in detail problem: https://leetcode.com/problems/longest-common-prefix/

This is a very good resource to the problem https://www.youtube.com/watch?v=gJOgI8TpSgc&list=PLZlA0Gpn_vH8ShxSPO48q8u0SeQBuCdnN&index=2

Below you find the solution to the LeetCode problem.
*/

const longestCommonPrefix = (strs) => {
  let prefix = '';
  if (strs.length === 0) return prefix;
  for (i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};
