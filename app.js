// -------------------- write a function that takes an array of two elements and returns an array with all the numbers between those two intervals
// დაწერეთ ფუნქცია, რომელიც იღებს ორ ელემენტიან მასივს და აბრუნებს მასივს, რომელშიც შედის ყველა რიცხვი ამ ინტერვალში.
// [2, 5] -> [2, 3, 4, 5]

// function range(arr) {
//   let start = arr[0];
//   let end = arr[1];

//   if (start > end) {
//     let temp = start;
//     start = end;
//     end = temp;
//   }

//   let result = [];

//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(range([5, 2]));

//  ---------------------------- write a function that takes array and an element. function should return array where that element will be removed
// დაწერეთ ფუნქცია, რომელიც მიიღებს მასივს და რაიმე ელემენტს. ფუნქციამ უნდა დააბრუნოს მასივი, რომელშიც არ იქნება მოცემული ელემენტი.

// function remove(arr, element) {
//   let index = arr.indexOf(element);
//   arr.splice(index, 1);
//   return arr;
// }

// console.log(remove([1, 2, 3, 4], 4));

// slice
// let array = [1, 2, 3, 4];
// let slicedArray = array.slice(0, 2);
// console.log(slicedArray);
// console.log(array);

// ----------------------------- concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// --------------------------------- find the sum of numbers that are in two dimensional array
// იპოვე ორგანზომილებიან მასივში მოთავსებული რიცხვების ჯამი

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum;
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(sum(arr));

// --------------------- pop
// let array = [1, 2, 3];
// let poppedItem = array.pop();
// console.log(poppedItem);
// console.log(array);

// ------------------------------ push
// let array = [1, 2, 3];
// let pushedItem = array.push(5);
// console.log(pushedItem);
// console.log(array);

// -------------------------------- shift
// let array = [1, 2, 3];
// let shifted = array.shift();
// console.log(shifted);
// console.log(array);

// ----------------------------------- unshift
// let array = [1, 2, 3];
// let unshift = array.unshift(0);
// console.log(unshift);
// console.log(array);
