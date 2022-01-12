//Given a and b, your function should return the value of ab

const findSquare = (a, b) => {
  const power = Math.pow(a, b);

  return console.log(power);
};

findSquare(2, 3);

//Given length of a regular hexagon, your function should return area of the hexagon.

const findAreaOfHexagon = length => {
  const multiplier = (3 * Math.sqrt(3)) / 2;

  const area = multiplier * length * length;

  return console.log(area.toFixed(2));
};

findAreaOfHexagon(5);

//Given a sentence, your functions should return the number of words in the sentence.

const findNumberOfWords = str => {
  return console.log(str.split(' ').length);
};

findNumberOfWords('Hi there i am rahul yadav');

//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
const findMin = (...numbers) => {
  let minNumber = numbers[0];

  for (const number of numbers) {
    if (number < minNumber) {
      minNumber = number;
    }
  }
  return console.log(minNumber);
};

findMin(35, 29, 46, 2);

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMax = (...numbers) => {
  let maxNumber = 0;

  for (const number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return console.log(maxNumber);
};

findMax(129, 251, 999);

//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

const findTriangleType = (...lengths) => {
  const [a, b, c] = lengths;
  if (a === b && b === c && a === c) {
    return console.log('This triangle is an equilateral triangle');
  } else if (a === b || b === c || a === c) {
    return console.log('This triangle is a isosceles triangle');
  } else {
    return console.log('This triangle is an scalene triangle');
  }
};
findTriangleType(98, 78, 78);

//Given an array and an item, your function should return the index at which the item is present.
const findIndex = (arr, element) => {
  console.log(arr);
  const index = arr.findIndex(el => el === element);

  return console.log(index);
};
findIndex([1, 2, 3, 4, 5], 5);
//Given an array and two numbers, your function should replace all entries of first number in an array with the second number.



const replaceNumber = (arr, num1, num2) => {
  const modifiedArr = arr.map(el=> {
      if(el === num1) {
          return num2
      } else return el
  })

  return console.log(modifiedArr)
};



replaceNumber([1, 2, 3, 4, 3], 3, 5);

//Given two arrays, your function should return single merged array.

const mergeArr = (arr1, arr2) => {
  const mergedArr = [...arr1, ...arr2];

  return console.log(mergedArr);
};

mergeArr([1, 2, 3], [3, 4, 5]);

//Given a string and an index, your function should return the character present at that index in the string.

const findChar = (str, index) => {
  const char = str.charAt(index);

  return console.log(char);
};

findChar('rahul', 3);

//Given two dates, your function should return which one comes before the other.

const findFirstDateToCome = (date1, date2) => {
  const [day1, month1, year1] = date1.split('/');

  const [day2, month2, year2] = date2.split('/');

  const dateFirst = new Date(year1, month1, day1);
  const dateSecond = new Date(year2, month2, day2);

  if (dateFirst > dateSecond) {
    return console.log(date2);
  } else return console.log(date1);
};

findFirstDateToCome('23/4/2030', '21/1/2040');

//Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.

const getSecretCode = (str, n) => {
  //prettier-ignore
  const alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const strArr = str.split('');

  let secretCodeArr = [];

  for (const char of strArr) {
    const index = alphabetArr.indexOf(char);

    if (index + n >= 25) {
      secretCodeArr.push(alphabetArr[index - 25 + n - 1]);
    } else {
      secretCodeArr.push(alphabetArr[index + n]);
    }
  }

  const secretCode = secretCodeArr.join('');

  return console.log(secretCode);
};

getSecretCode('rahuz', 2);

//Given a sentence, return a sentence with first letter of all words as capital.

const textFormatter = str => {
  const formattedStr = str
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');

  return console.log(formattedStr);
};
textFormatter('i am rahul yadav');

//Given an array of numbers, your function should return an array in the ascending order.

const getAscOrder = arr => {
  const ascArr = arr.sort((a, b) => a - b);

  return console.log(ascArr);
};

getAscOrder([1, 6, 3, 8, 9]);

//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

const getReversedString = str => {
  const reversed = str
    .split(' ')
    .map(el => el.split('').reverse().join(''))
    .join(' ');

  return console.log(reversed);
};

getReversedString('hi there i am rahul yadav');
