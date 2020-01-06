//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

function fib() {
  // find fib numbers less than given number
  let sum = 0;
  let prevFib = 0
  let fib = 1
  while (fib < 4000000) {
    // capture only even numbers
    if (fib % 2 === 0) {
      sum += fib
    }
    nextFib = prevFib + fib
    prevFib = fib
    fib = nextFib
    console.log('fib', fib)
  }

  // sum them
  console.log('sum', sum)
}

fib()
