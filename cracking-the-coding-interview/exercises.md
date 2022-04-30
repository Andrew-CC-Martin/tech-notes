# chapter 1 - arrays and strings

## 1.1) Is Unique

__Implement an algorithm to determine if a string has all unique characters__

Best conceivable runtime: Need to touch every char at least once, so O(n)

Solution 1 - without using additional data structure:
- Sort string O(nlogn)
- Iterate through string and see if current char and next char as same O(n)

Total runtime complexity: O(n + nlogn) = O(nlogn)

Solution 2 - allowed to use additional data structure:
- Initialise hash map O(1)
- Iterate through string O(n)
    - Check if char exists in hashmap O(1)
        - If yes, return false
    - Add each char to hashmap O(1)
- Return true

O(n)

```js
const checkAllCharsUniquePredicate = (string) => {
  const charCounts = {}
  [...string].forEach((char) => {
    if (charCounts[char]) {
      return false
    } else {
      charCounts[char] = true
    }
  })
}
```

O(n)

## 1.2) Check Permutation

__Given two strings, write a method to decide if one is a permutation of the other__

Best conceivable runtime - need to iterate through every item of each string, so O(2n) = O(n)

Solution 1:
- Sort string 1 O(nlogn)
- Sort string 2 O(nlogn)
- Iterate through strings and check if they’re the same length O(n)
 
Total O(2nlogn + n) = O(nlogn)

Solution 2:
- early exit if lengths are not equal O(1)
- Iterate through every item in both string concurrently, and add each to hashmap O(n)
- Iterate through hashmap, and if count !== 2, then return false O(n)
- return true

Total O(2n) = O(n)

```js
const areStringsPermutations = (string1, string2) => {
  // early exit if lengths are not equal O(1)
  if (string1.length !== string2.length) {
    return false
  }

  const charCounts = {}
  // Iterate through every item in both string concurrently, and add each to hashmap O(n)
  for (let i = 0; i < string1.length; i++) {
    const char1 = string1[i]
    const char2 = string2[i]
    if (charCounts[char1]) {
      charCounts[char1]++
    } else {
      charCounts[char1] = 1
    }
    if (charCounts[char2]) {
      charCounts[char2]++
    } else {
      charCounts[char2] = 1
    }
  }

  // Iterate through hashmap, and if count !== 2, then return false O(n)
  return !Object.keys(charCounts).some((key) => (charCounts[key] !== 2))
}
```

## 1.3) URLify

__Write a method to replace all spaces in a string with '%20'.__
You may assume:
- The string has sufficient space to hold the additional characters
- You are given the true length of the string
- Multiple spaces only require a single '%20'

Best conceivable runtime - need to iterate over all chars in the string, so O(n)

Soltution 1:
- Iterate over chars, check if is space O(n)
  - If is space, check if next char is space O(1)
    - If yes, do nothing
    - If not or is last char, append '%20' to return string O(1)?
  - If not is space, append char to return string O(1)?

O(n)

```js
const urlIfy = (string) => (
  // Iterate over chars, check if is space O(n)
  [...string].map((char, i) => {
    // If not is space, append char to return string O(1)?
    if (char !== ' ') {
      return char
    }

    // Check if is last char in string, or if next char is not space O(1)
    if (i + 1 === string.length || string[i + 1] !== ' ') {
      // If yes, append '%20' to return string O(1)?
      return '%20'
    }
  }).join('')
)
```

## 1.4) Palindrome Permutation

Given a string, write a function to check it is a permutation of a palindrome.

- A palindrome is a word or phrase that is the same backwards or forwards

Notes
- we're ignoring whitespace
- palindrome can have either one odd character or not. ie be in form ABCBA or ABBA
- any char can be balanced on either side if it has %2 === 0 copies
- %2 !== 0 copies can only be allowed in the centre, so we can only have one char with odd no of copies
- So we are esentially checking to see if there is more than one char with odd no of copies

Best conceivable runtime:
- We need to touch every item in string, so BCR is O(n)

Solution 1:
- Iterate over string O(n)
  - if !whitespace, add char to hashmap
- Initiate counter at zero
- Iterate over hashmap O(n)
  - if count is odd, increment counter
    - if counter > 1, return false
- return true

O(n)

```js
const isPalindromePermutation = (string) => {
  const charCounts = {}
  // strip out whitespace and iterate over string O(n)
  string.replace(' ', '').split('').forEach(
    // add each char to hashmap
    char => charCounts[char] ? charCounts[char]++ : charCounts[char] = 1
  )

  // Initialise counter at zero
  let counter = 0
  // Iterate over hashmap O(n)
  // if counter > 1, returns false
  return !Object.keys(charCounts).some((key) => {
    // if count is odd, increment counter
    if (charCounts[key] % 2 !== 0) {
      counter++
    }
    return counter > 1
  })
}
```

## 1.5) One Away

There are three types of edits that can be performed on strings:
- insert a character
- remove a character
- replace a character

Given two strings, write a function to check if they are one or less edits away from each other.

Minimum conceivable runtime: need to touch every item in two strings, so O(n)

Notes
- to check replace, check if each char is same
  - only one can be different
- to check insert, check if every char is same
  - if not, check if str2.next = str1.current
- remove is the same, except check from str2 => str1
- can do O(1) early exit by check if length difference > 1

Solution 1
- set str1Index = 0, str2Index = 0
- set changeCounter = 0
- Iterate over both strings and check if char is same O(n)
  - If not same, check:
    - Increment changeCounter O(1)
    - If str1.next = st2.current (remove scenario)
      - Increment str1Index O(1)
    - else If str2.next = str1.current (insert scenario)
      - Increment str2Index O(1)
  - If changeCounter > 1, return false
- return true

O(n)

```js
const oneAway = (str1, str2) => {
  if (Maths.abs(str1.length - str2.length) > 1) {
    return false
  }
  let iStr1 = 0, iStr2 = 0, changeCounter = 0
  let c = str1.length > str2.length ? str1.length : str2.length

  // - Iterate over both strings and check if char is same O(n)
  while (c > 0) {
    const str1Current = str1[iStr1]
    const str2Current = str2[iStr2]
    if (str1Current !== str2Current) {
      changeCounter++
      if (changeCounter > 1) {
        return false
      }

      // If str1.next == st2.current (remove scenario)
      if (str1[iStr1 + 1] === str2Current) {
        // Increment str1Index O(1)
        iStr1++
      }

      // else If str2.next = str1.current (insert scenario)
      if (str1Current === str2[iStr2 + 1]) {
        // Increment str2Index O(1)
        iStr2++
      }
    }
    iStr1++
    iStr2++
    c--
  }
  return true
}
```

## 1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters.

eg stringCompression('aabcccccaaa') => 'a2b1c5a3'

Best conceivable runtime: we need to touch every item on the string, so O(n)

Solution 1
- initiate counter to 0 O(1)
- initiate output to '' O(1)
- Iterate over string O(n)
  - Check if char is last in string O(1)
  - compare current char to next char O(1)
  - if next char is different, OR current char is last
    - append char to output O(1)
    - append counter to output O(1)
    - reset counter to 0 O(1)
  - else if next char is same
    - increment counter O(1)
- return output string O(1)

O(n)

```js
const stringCompression = (string) => {
  // initiate counter to 0, initiate output to ''
  let c = 1, output = ''
  // Iterate over string O(n)
  string.split('').forEach((char, i) => {
    // Check if char is last in string O(1)
    const isLast = i + 1 === string.length
    // compare current char to next char O(1)
    // if next char is different, OR current char is last
    if (isLast || string[i + 1] !== char) {
      // append char and counter to output
      output += `${char}${c}`
      // reset counter to 0
      c = 1
      // else if next char is same
    } else {
      // increment counter O(1)
      c++
    }
  })
  return output
}
```

## 1.7 Rotate Matrix

Given an image represented by an NxM matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

Best conceivable runtime - Need to touch every item in 2d nxn array, so O(n^2)

Notes
- each vertical slice through the arrays becomes a new array
  - eg for 4x4 matrix, newArray[0] = [ oldArray[3][0], oldArray[2][0], oldArray[2][0], oldArray[1][0] ]

```js
// for 4x4 matrix
newArray[0] = [ oldArray[3][0], oldArray[2][0], oldArray[1][0], oldArray[0][0] ]

newArray[0][0] = [ oldArray[3][0] ]
newArray[0][1] = [ oldArray[2][0] ]
newArray[0][2] = [ oldArray[1][0] ]
newArray[0][3] = [ oldArray[0][0] ]

newArray[1] = [ oldArray[3][1], oldArray[2][1], oldArray[1][1], oldArray[0][1] ]

newArray[1][0] = [ oldArray[3][1] ]
newArray[1][1] = [ oldArray[2][1] ]
newArray[1][2] = [ oldArray[1][1] ]
newArray[1][3] = [ oldArray[0][1] ]

newArray[2] = [ oldArray[3][2], oldArray[2][2], oldArray[1][2], oldArray[0][2] ]
newArray[3] = [ oldArray[3][3], oldArray[2][3], oldArray[1][3], oldArray[0][3] ]
```

Solution 1
- instantiate new 2d array, x (horizontal new array)
- get length of matrix
- for i of length O(n)
  - for j of length O(n)
    - set x = length - 1
    - newArray[i][j] = oldArray[x][i]
    - x--

total runtime O(n * n) = O(n^2)

```js
// Solution #1
const rotateMatrix = (oldMatrix) => {
  // get length of matrix
  const length = oldMatrix.length
  // instantiate new array
  const newMatrix = new Array(length)
  // instantiate x (horizontal dimension for new array)
  let x = 0

  for (let i = 0; i < length; i++) {
    newMatrix[i] = new Array(length)
    x = length - 1

    for (let j = 0; j < length; j++) {
      // instantiate new l length arary
      newMatrix[i][j] = oldMatrix[x][i]
      x--
    }
  }

  return newMatrix
}

// solution #2 - cleaner, more concise approach
const rotateMatrix2 = (matrix) => (
  matrix.map((row, i) => (
    row.map((_column, j) => (
      matrix[matrix.length - 1 - j][i]
    ))
  ))
)
``` 

Solution 2 - Modify in place, without creating new array
* too hard basket 🥲
