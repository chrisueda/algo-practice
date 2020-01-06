// Complete the countTriplets function below.
function countTriplets(arr, r) {
  var map2 = {};
  var map3 = {};
  var count = 0;
  for(var i=0; i<arr.length; ++i) {
      var n = arr[i];
      if(map3[n]) {
          count+=map3[n];
      }
      if(map2[n]) {
          map3[n*r] = map3[n*r] ? map3[n*r] + map2[n] : map2[n];
      }
      map2[n*r] = map2[n*r] ? map2[n*r] + 1 : 1;
  }

  return count;
}

console.log(countTriplets([ 1, 3,9,9,27,81 ], 3))
