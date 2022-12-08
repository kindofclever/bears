// Longest common prefix solution with comments:

const longestCommonPrefix = (arrayOfStrings) => {
  // Return early on empty input
  if (!arrayOfStrings.length) return '';

  // Loop through the letters of the first word
  for (let i = 0; i <= arrayOfStrings[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!arrayOfStrings.every((string) => string[i] === arrayOfStrings[0][i])) {
      // If not, return the string up to and including the previous character
      return arrayOfStrings[0].slice(0, i);
    }
  }

  return arrayOfStrings[0];
};
