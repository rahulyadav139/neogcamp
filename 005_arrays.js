//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const arr1 = [10, 4, 5, 2, 5, 6, 9];

const sum = arr1.reduce((acc, el) => (acc += el), 0);

console.log(sum);

//Find average of an array and display the output.

const getAvg = arr => {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  const avg = (sum / arr.length).toFixed(2);

  return console.log(avg);
};

getAvg([10, 4, 5, 2, 5, 6, 9]);

//Find maximum

const getMax = arr => {
  let max = 0;

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return console.log(max);
};

getMax([10, 4, 5, 2, 5, 6, 9]);

const getMin = arr => {
  let min = arr[0];

  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return console.log(min);
};

getMin([10, 4, 5, 2, 5, 6, 9]);

//Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

const getMedian = (...args) => {
  const sortedArr = args.sort((a, b) => a - b);
  console.log(args);
  let medianTerm;

  if (args.length % 2 === 0) {
    medianTerm = args.length / 2;
    return console.log(
      `Median: ${sortedArr[medianTerm]}, ${sortedArr[medianTerm + 1]}`
    );
  } else {
    medianTerm = Math.floor(args.length / 2) + 1;
    return console.log(`Median: ${sortedArr[medianTerm]}`);
  }
};

getMedian(10, 4, 5, 2, 5, 6);

//important
const getMode = (...args) => {};

//get sum of two arrays

const getSumOfTwoArr = (...args) => {
  const sum = args.flat().reduce((acc, el) => (acc += el), 0);

  return console.log(sum);
};

getSumOfTwoArr([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]);

//Find number of constants and vowels in a string.

const countVowels = str => {
  const totalChar = str.replaceAll(' ', '').length;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let newStr = str;

  for (const vowel of vowels) {
    newStr = newStr.replaceAll(vowel, '');
  }

  const totalConsonants = newStr.replaceAll(' ', '').length;

  const totalVowels = totalChar - totalConsonants;

  return console.log(`Vowels: ${totalVowels}, Consonants: ${totalConsonants}`);
};

countVowels('i am rahul yadav');

//Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

const shiftArr = arr => {
  const modifiedArr = [...arr.slice(-1), ...arr.slice(0, -1)];

  return console.log(modifiedArr);
};

shiftArr([1, 2, 3, 4, 5]);

//important

//advanced

//Find the sum of two matrix.
// Display transpose of matrix. Explaination https://www.varsitytutors.com/linear_algebra-help/the-transpose
// Find Identity matrix. Explanation https://www.varsitytutors.com/hotmath/hotmath_help/topics/identity-matrix
