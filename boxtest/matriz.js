let inputArray = [3, 6, -2, -5, 7, 3]

function adjacentElementsProduct(arr) {
  var x = 0
  var y = 0
  var p = 0

  for (var i = 0; i < inputArray.length; i++) {
    x = arr[i]
    y = arr[i + 1]
    if (x * y > p) {
      p = x * y
    }
  }
  return p
}

console.log(adjacentElementsProduct(inputArray))
