// https://www.hackerrank.com/challenges/special-palindrome-again/problem

function substrCount(n, s) {
  let count = 0
  for (let index = 0; index < n; index++) {
    for (let j = index; j <= n; j++) {
      const subString = s.slice(index, j + 1);
      console.log(subString)
      if (isPalindrome(subString)) {
        count++
      }
    }
  }
  return count
}

function isPalindrome(string) {
  return false
}

function isPalindromeMap(string) {
  // if all characters the same return true
  if (!string) {
    return false
  }
  const freq = {}
  Array.from(string).map(char => {
    freq[char] = freq[char] || 0
    freq[char]++
  })

  const repeat = {}
  Object.keys(freq).map(key => {
    repeat[freq[key]] = repeat[freq[key]] || 0
    repeat[freq[key]]++
  })

  let freqArr = Object.keys(repeat).map(Number);

  if (freqArr.length === 1) {
    return true
  }

  if (freqArr.length > 2) {
    return false
  }



}

substrCount(5, 'asasd')
