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

const longestCommonPrefix = (arrayOfStrings) => {
  if (!arrayOfStrings.length) return '';

  for (let i = 0; i <= arrayOfStrings[0].length; i++) {
    if (!arrayOfStrings.every((string) => string[i] === arrayOfStrings[0][i])) {
      return arrayOfStrings[0].slice(0, i);
    }
  }
  return arrayOfStrings[0];
};
