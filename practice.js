// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // // Start with the hash: city_populations = {chi: 2700000}
// // // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}

// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// // Write a method that prints out every number from 1 to 100.

// function everyNumber() {
//   var number;
//   for (number = 1; number <= 100; number++) {
//     console.log(number);
//   }
// } 

// everyNumber();


// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function everyOtherNumber() {
//   var number;
//   for (number = 1; number <= 100; number += 2) {
//     console.log(number);
//   }
// } 

// everyOtherNumber();



// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function numberOfFiftyFives(array) {
//   var i = 0;
//   array.forEach(function(number) {
//     if (number === 55) {
//       i += 1;
//     }
//   });
//   return i;
// }

// console.log(numberOfFiftyFives([9,1,2,3,55,55,55,4,55]));


// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauce(array) {
//   var awesomeArray = [];
//   array.forEach(function(element) {
//     if (element !== array[array.length - 1]) {
//       awesomeArray.push(element);
//       awesomeArray.push("awesomesauce");
//     } else {
//       awesomeArray.push(element);
//     }
//   });
//   return awesomeArray;
// }

// console.log(awesomesauce(["a", "b", "c", "d", "e"]));

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // The final result should be: {chair: 3, table: 2}

// var itemAmounts = {chair: 5, table: 2};
// itemAmounts["chair"] = 3;

// console.log(itemAmounts);

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}

// itemAmounts["desk"] = 7;

// console.log(itemAmounts);


// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = 1;
//   for ( var i = number; i > 0; i--) {
//     product *= number;
//     number--;
//   }
//   return product;
// }

// console.log(factorial(5));

// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function allTheSums(array1, array2) {
//   var arrayWithSums = [];
//   array1.forEach(function(number1) {
//     array2.forEach(function(number2) {
//       arrayWithSums.push(number1 + number2);
//     });
//   });
//   return arrayWithSums;
// }

// console.log(allTheSums([1,5,10],[100,200,300]));

// // Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index += 1;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// // Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// Write a function that takes in an array and returns a new array with each number tripled. For example, given [3, 1, 5, 10], the function should return [9, 3, 15, 30].

// function tripleNumber(array) {
//   var tripledArray = [];
//   array.forEach(function(element) {
//     tripledArray.push(element * 3);
//   });
//   return tripledArray;
// }

// console.log(tripleNumber([3, 1, 5, 10])

// Write a function that takes in an array of numbers and returns a new array of numbers less than 5. For example, given [4, 10, 8, 3], the function should return [4, 3]

// function lessThanFive(array) {
//   var newArray = [];
//   array.forEach(function(number) {
//     if (number < 5) {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }

// console.log(lessThanFive([4, 10, 8, 3]));

// Write a function that takes an array of numbers and returns the sum of all the numbers. For example, given [3, 9, 1], the function should return 13.

// function sumOfAllNumbers(array) {
//   var sum = 0;
//   array.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }

// console.log(sumOfAllNumbers([3, 9, 1]));

// Write a function that takes in an array of strings and returns all the strings combined into a single string. For example, given [“a”, “b”, “c”], the function should return “abc”.

// function combinedString(array) {
//   var string = "";
//   array.forEach(function(element) {
//     string += element;
//   });
//   return string;
// }

// console.log(combinedString(["a", "b", "c"]));

// Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

// function reverseString(string) {
//   var reverse = "";
//   for (var i = string.length - 1 ; i >= 0 ; i--) {
//     reverse += string[i];
//   }
//   return reverse;
// }

// console.log(reverseString("abcde"));

// Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

// function letterA(string) {
//   var upperCaseString = string.toUpperCase();
//   var stringArray = upperCaseString.split("");
//   var sum = 0;
//   stringArray.forEach(function(letter) {
//     if (letter === "A") {
//       sum += 1;
//     }
//   });
//   return sum;
// }

// console.log(letterA("bananas"));

// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return null if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

// function findIndex(array, number) {
//   for (var i = 0; i < array.length; i++) {
//     var index = null;
//     if (array[i] === number) {
//       index = i;
//       break;
//     } 
//   }
//   return index;
// }

// console.log(findIndex([6,5,6,7,2,4,5],9));

// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function ascendingSort(array, number) {
  var newArray = [];
  array.forEach(function(element) {
    if (number < element && element >) {
      newArray.push(number);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(ascendingSort([1,2,3,5,6,7,9], 8));

// Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!