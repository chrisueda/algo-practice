/**
 * @param {number} N
 * @return {number}
 */
 var rotatedDigits = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++){
      if (isValid2569(i)){
          count++;
      }
  }

  return count;
};

function isValid2569 (n){
  let res = false;
  while (n > 0){
      let digit = n % 10;
      if (digit === 2 || digit === 5 || digit === 6 || digit === 9){
          res = true;
      }
      else if (digit === 3 || digit === 4 || digit === 7){
          return false;
      }
      n = Math.floor(n / 10);
  }
  return res;
}

console.log('answer', rotatedDigits(857)) //247
// console.log('answer', rotatedDigits(10)) //247
