// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


const longestCommonPrefix = (strs) => {
  let result = '';
  let on = true;
  let count = 0;
  if (strs[0].length === 0) {
    return '';
  }

  while (on) {
    let current = strs[0][count];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][count] !== current) {
        on = false;
        return result;
      }
    }
    result += current;
    count++

    if (result.length === strs[0].length) {
      return result;
    }
  }
}


console.log(longestCommonPrefix(["dog", "racecar", "car"]))