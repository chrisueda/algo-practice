// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
function multiples(num) {
  let sum = 0;
  // find all numbers that are multiples of 3 or 5 below given num
  for (i=1; i<num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
      console.log(sum)
    }
  }

  // add those numbers together

  // return sum
  return sum

}

multiples(1000)
