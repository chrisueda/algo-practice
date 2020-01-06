var removeDuplicates = function(nums) {
  nums.filter(function(value, index, self) {
    return self.indexOf(value) === index
  })
}

let a = removeDuplicates([1, 1, 2, 2, 3])

console.log(a)
