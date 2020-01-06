/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let map = {}
  let result = []
  for(let i=0; i<s.length; i++ ) {
      map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1
  }
  console.log(map)

  for(let i=0; i<s.length; i++ ) {
      if (map[s[i]] == 1) {
          return i
      }
  }
  return -1

};

console.log(firstUniqChar('loveleetcode'))
