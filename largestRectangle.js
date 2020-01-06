// https://www.hackerrank.com/challenges/largest-rectangle/problem

function largestRectangle(h) {
  let heights = h
  let top = 0
  let max = 0
  let stack = []
  let i = 0

  // while (i < heights.length) {
  //   if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[i]) {
  //     stack.push(i)
  //     i++
  //   } else {
  //     top = stack.pop()
  //     let area =
  //       heights[top] *
  //       (stack.length === 0 ? i - 1 : i - 1 - stack[stack.length - 1])
  //     if (area > max) {
  //       max = area
  //     }
  //   }
  // }
  // console.log(stack)

  // while (stack.length) {
  //   top = stack.pop()
  //   let distance = stack.length === 0 ? i : i - 1 - stack[stack.length - 1]
  //   let area = heights[top] * distance
  //   // console.log(area)
  //   if (area > max) {
  //     max = area
  //   }
  // }

  // return max

  heights.forEach((item, index) => {
    if (stack.length == 0) {
      stack.push(index)
      i += 1
    } else {
      if (item >= heights[index - 1]) {
        stack.push(index)
        i += 1
      } else {
        while (
          stack.length &&
          heights[stack[stack.length - 1]] > heights[index]
        ) {
          sumStack()
        }
        stack.push(index)
        i += 1
      }
    }
  })

  while (stack.length) {
    sumStack()
  }

  function sumStack() {
    top = stack.pop()
    if (!stack.length) {
      current = heights[top] * i
    } else {
      current = heights[top] * (i - stack[stack.length - 1] - 1)
    }
    if (current > max) {
      max = current
    }
  }

  return max
}
// 11 11 10 10 10
console.log(largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]))
// 26152
// console.log(largestRectangle([11, 11, 10, 10, 10]))
// console.log(largestRectangle([1,2,3,4,5]))

// function largestRectangle(h) {
//   let maxArea = 0
//   // let heightArray = h.split(' ').map(Number)
//   let heightArray = h
//   // console.log(heightArray)
//   if (heightArray.length === 1) {
//     return h
//   }

//   for (let i = 0; i < heightArray.length; i++) {
//     for (let j = 1; j < heightArray.length + 1; j++) {
//       // create new subarray
//       let buildingArray = heightArray.slice(i, j)
//       // console.log(buildingArray)
//       // find lowest building
//       let lowest = Math.min(...buildingArray)
//       // calculate maxaArea = lowest building * number of buildings
//       if (lowest * buildingArray.length > maxArea) {
//         maxArea = lowest * buildingArray.length
//       }
//     }
//   }

//   return maxArea
// }
