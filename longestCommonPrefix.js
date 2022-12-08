/*
That´s the problem:

________

Given a string, find the longest common prefix among all strings in the array.

For example, if the array is ["flower", "flow", "flight"], the longest common prefix is "fl".
________

Here you can find the in detail problem: https://leetcode.com/problems/longest-common-prefix/

This is a very good resource to the problem https://www.youtube.com/watch?v=gJOgI8TpSgc&list=PLZlA0Gpn_vH8ShxSPO48q8u0SeQBuCdnN&index=2

Below you find the solution to the LeetCode problem.
And below that you find the solution with comments to explain my steps.
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

// ______________________________________________________________________________________

// Longest common prefix solution with comments:

const longestCommonPrefixWithComments = (arrayOfStrings) => {
  // Guarding clause:Return early on empty input
  if (!arrayOfStrings.length) return '';

  // In this solution, I initially loop through the characters of the first string.
  // I'm using a for loop because it produces the fastest outcome which seems to be
  // important on LeetCode. I think in frontend code id go for a forEach for more redability.

  for (let i = 0; i <= arrayOfStrings[0].length; i++) {
    // Than I check if this character is present in the same position of every string
    // I do so with JS built in every Array method.

    // The every method returns true if the callback function returns true
    // for every element in the array.

    if (!arrayOfStrings.every((string) => string[i] === arrayOfStrings[0][i])) {
      // If not, return the string up to and including the previous character,
      // so that only the similar characters are returned within the arrayOfStrings array.

      return arrayOfStrings[0].slice(0, i);
    }
  }
  // If the character is present the loop runs again until the characters don´t match anymore.
  return arrayOfStrings[0];
};
