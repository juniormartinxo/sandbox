let arr1 = ['a', 'b', 'e']
let arr2 = ['c', 'd']
let arr3 = ['a', 'b', ...arr2, 'e']

// retornará
console.log(arr1) // [ 'a', 'b', 'e' ]
console.log(arr2) // [ 'c', 'd' ]
console.log(arr3) // [ 'a', 'b', 'c', 'd', 'e' ]
