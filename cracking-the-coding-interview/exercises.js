// 1.3)
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

// 1.4) Solution 1:
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

// 1.5) One away
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

// 1.6)
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

// 1.7 Rotate Matrix
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
