
// //"PROBLEM 1"

// function isPalindrome(str) {
//   const processedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//   let left = 0;
//   let right = processedString.length - 1;

//   while (left < right) {
//     if (processedString[left] !== processedString[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));


// //PROBLEM 2

// function findMinMax(numbers) {
//   if (numbers.length === 0) {
//     return { min: null, max: null };
//   }

//   let min = numbers[0];
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number < min) {
//       min = number;
//     }
//     if (number > max) {
//       max = number;
//     }
//   }

//   return { min, max };
// }
// const numbers1 = [5, 1, 8, 9, 2];
// const numbers2 = [];
// const results1 = findMinMax(numbers1);
// const results2 = findMinMax(numbers2);

// console.log("Results for [5, 1, 8, 9, 2]:", results1);  
// console.log("Results for empty array:", results2);  


// //PROBLEM 3

// function findMissingNumber(sequence) {
//   if (!sequence || sequence[0] !== 11 || !sequence.every((num, index) => num === sequence[index - 1] + 1)) {
//     return null; 
//   }
//   const sequenceLength = sequence.length
//   const expectedSum = (sequenceLength + 1) * (sequence[0] + sequence[sequenceLength - 1])                                                                            
//   const actualSum = sequence.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// // Test cases
// const sequence1 = [11, 12, 14, 15, 16, 18, 19, 20];
// const sequence2 = [13, 15, 17, 19];
// const missingNumber1 = findMissingNumber(sequence1);
// const missingNumber2 = findMissingNumber(sequence2);
// console.log("Missing number in [11, 12, 14, 15, 16, 18, 19, 20]:", missingNumber1); // Output: 17
// console.log("Missing number in [13, 15, 17, 19]:", missingNumber2);                  // Output: null (invalid sequence)
