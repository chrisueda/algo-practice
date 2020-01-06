function addByX(x) {
	function generatedAdd(input) {
    console.log(input + x)
  }
  return generatedAdd
}

// function addByX(x) {
//   return function (y) {
//       return x + y;
//   }
// }


var addByTwo = addByX(2);

function once(func) {
  let executed = false
  let called
  // console.log('called', called)
	return function(num) {
    if (executed === false) {
      called = func(num)
      console.log('called', called)
      executed = true
      return called
    }
    return called
  }

}

var onceFunc = once(addByTwo);

console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6
