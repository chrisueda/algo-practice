function isBalanced(s) {
  if (s.length % 2 !== 0) {
    return 'NO'
  }

  let parens = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  let parensReg = /[\}\]\)]/
  const parensArr = []
  for (let i = 0; i < s.length; i++) {
    let char = s.slice(i, i+1)
    // if it's a closing tag see if prev tag is a match for its opposite
    if (char.match(parensReg) && parensArr.length > 0 ) {
        if (parens[char] === parensArr[parensArr.length - 1]) {
          parensArr.pop()
        } else {
          return 'NO'
        }
    } else {
      parensArr.push(char)
    }
  }

  if (parensArr.length > 0) {
    return 'NO'
  }
  return 'YES'



  // for (let index = 0; index < s.length / 2; index++) {
  //   let firstChar = s.slice(index, index+1)
  //   let endChar = index === 0 ? s.slice(-(index+1)) : s.slice(-(index+1), -(index))
  //   // console.log(firstChar)
  //   // console.log(parens[firstChar], endChar)
  //   if (parens[firstChar] !== endChar) {
  //     console.log('NO')
  //   }
  // }


}

console.log(isBalanced('[[[[[['))
