// Longest common prefix solution with comments:

const longestCommonPrefix = (arrayOfStrings) => {
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
