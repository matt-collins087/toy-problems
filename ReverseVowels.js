// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

const reverseVowels = (s) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = s.split('');
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (vowels.indexOf(result[start].toLowerCase()) === -1) {
      start++;
      continue;
    }

    if (vowels.indexOf(result[end].toLowerCase()) === -1) {
      end--;
      continue;
    }

    let temp = result[start];
    result[start] = result[end];
    result[end] = temp;
    start++;
    end--;
  }

  return result.join('')
}
