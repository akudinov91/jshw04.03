// Задача 1. Напишите функцию, которая принимает на вход массив чисел и возвращает сумму всех положительных элементов массива.

// function sumOfPositiveElements(array) {
//   let sum = 0;
//   for (let element of array) {
//     if (element > 0) {
//       sum += element;
//     }
//   }

//   return sum;
// }
// let numericArray = [1, -2, 3, -4, 5];
// let result = sumOfPositiveElements(numericArray);
// console.log(result);

// Задача 2.Создайте функцию, которая принимает на вход двумерный массив и возвращает новый массив, содержащий только уникальные элементы из всех подмассивов.

// function uniqueElements2D(arr) {
//   const uniqueSet = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const subarray = arr[i];
//     for (let j = 0; j < subarray.length; j++) {
//       const element = subarray[j];
//       uniqueSet.add(element);
//     }
//   }
//   const uniqueArray = Array.from(uniqueSet);
//   return uniqueArray;
// }
// const inputArray = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
// ];
// const result = uniqueElements2D(inputArray);
// console.log(result);

// Задача 3 Реализуйте функцию, которая принимает на вход число и возвращает массив всех делителей этого числа.

// function findDivisors(number) {
//   if (number <= 0) {
//     return "Введите положительное число";
//   }
//   const divisors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }

//   return divisors;
// }
// const number = 12;
// const result = findDivisors(number);
// console.log(`Делители числа ${number}:`, result);

//Задача 4. Создайте функцию, которая принимает на вход массив и возвращает новый массив, в котором элементы исходного массива умножены на их индекс.

// function multiplyByIndex(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * i);
//   }
//   return result;
// }
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = multiplyByIndex(originalArray);
// console.log(newArray);

//Задача 5. Напишите функцию, которая принимает на вход массив чисел и возвращает количество отрицательных элементов в массиве.

// function countNegativeNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }

//   return count;
// }
// let myArray = [1, -2, 3, -4, 5];
// let result = countNegativeNumbers(myArray);
// console.log("Количество отрицательных чисел: " + result);

//Задача 6. Реализуйте функцию для нахождения максимального элемента в каждом подмассиве двумерного массива.

// function maxElementInSubArray(twoDArray) {
//   const result = [];
//   for (let i = 0; i < twoDArray.length; i++) {
//     const subArray = twoDArray[i];
//     let maxElement = subArray[0];
//     for (let a = 1; a < subArray.length; a++) {
//       if (subArray[a] > maxElement) {
//         maxElement = subArray[a];
//       }
//     }
//     result.push(maxElement);
//   }
//   return result;
// }

// const twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const maxElements = maxElementInSubArray(twoDArray);

// console.log(maxElements);

//Задача 7.Создайте функцию, которая принимает на вход строку и возвращает новую строку, в которой все гласные буквы заменены на звездочки.
//Напишите функцию для проверки, является ли число простым.

// function replaceVowelsWithStars(inputString) {
//   const vowelsRegex = /[aeiouAEIOU]/g;

//   const resultString = inputString.replace(vowelsRegex, "*");

//   return resultString;
// }

// const originalString = "Hello, World!";
// const modifiedString = replaceVowelsWithStars(originalString);
// console.log(modifiedString);

//Функция для проверки, является ли число простым:

// function isPrimeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// const numberToCheck = 17;
// if (isPrimeNumber(numberToCheck)) {
//   console.log(`${numberToCheck} - простое число`);
// } else {
//   console.log(`${numberToCheck} - не простое число`);
// }

//Задача 8.Реализуйте функцию, которая принимает на вход два массива и возвращает новый массив, содержащий только уникальные элементы из обоих исходных массивов.

// function uniqueMerge(arr1, arr2) {
//   const mergedArray = arr1.concat(arr2);

//   const uniqueArray = [...new Set(mergedArray)];

//   return uniqueArray;
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];

// const resultArray = uniqueMerge(array1, array2);
// console.log(resultArray);
