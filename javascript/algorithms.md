### Sliding window algorithm

This function takes a string, and returns the lengh of the longest substring with no repeated characters

It uses the "sliding window" algorithm, which is as follows:

- Infinite loop with `i` incrementer
  - Expand the window forward (the window is the subsection of the string we're considering)
  - While the new char is repeated in the window
    - contract the window forwards (increment window start index, decrement window length)
  - if new window length > longest, set new longest
  - if window touches end of string, break the loop

time complexity - O(n)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let windowStart = 0;
  let windowLength = 0;
  let window = null;
  let longest = 0;
  let i = 0;

  while (true) {
    // expand window forwards
    windowLength++;
    window = s.substring(windowStart, windowLength + windowStart - 1);
    // if new char is in window, contract window forward until it isn't
    while (window.includes(s[i])) {
      // forward contract window
      windowLength--;
      windowStart++;
      window = s.substring(windowStart, windowLength + windowStart - 1);
    }
    // update longest
    if (longest < windowLength) {
      longest = windowLength;
    }
    // if window has reached end of string, then break
    if (windowStart + windowLength >= s.length) {
      break;
    }
    i++;
  }

  return longest;
};
```
