function maxSubArray(nums) {
  var prev = 0
  var max = -Number.MAX_VALUE

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]) //  4
    max = Math.max(max, prev) //  6
  }
  console.log(max)
  return max

  // var dp = []
  // nums.forEach(function(n) {
  //   if (dp.length > 0) {
  //     // if there are items in the array
  //     if (dp[dp.length - 1] < 0) {
  //       // if the last item in negative
  //       dp.push(n) // push the next item
  //     } else {
  //       dp.push(dp[dp.length - 1] + n) //
  //     }
  //   } else {
  //     dp.push(n) // push the first one
  //   }
  // })
  // console.log("dp", dp)

  // return Math.max(...dp)
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
