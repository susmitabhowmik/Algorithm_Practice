// Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array. double([1,2,3]) 
// [2,4,6]

function double(array) {
  return array.map(x => x * 2);
}

console.log(double([2,4,6]));

// Write a function called add which takes in an array and returns the result of adding up every item in the array. add([1,2,3]) 
// 6

function add(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(add([1,3,5,-3]));

