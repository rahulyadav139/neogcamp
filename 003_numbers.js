//Write a program to input 2 numbers and display the sum of the numbers to the console.

const getSum = (...numbers) => {
  const sum = numbers.reduce((acc, el) => (acc += el), 0);

  return console.log(sum);
};

getSum(1, 2, 3, 4, 5);

//Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

const calInterest = (p, r, t) => {
  const interest = (p * r * t) / 100;

  return console.log(interest);
};

calInterest(1000, 3, 5);

//Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

const calKineticEnergy = (m, v) => {
  const KE = 0.5 * m * v;

  return console.log(KE);
};

calKineticEnergy(5, 2);

//Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

const convertToCelsius = f => {
  const c = (f - 32) * (5 / 9);

  return console.log(c);
};

convertToCelsius(32);

//Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const propertiesOfSquare = a => {
  const area = a * a;

  const perimeter = 4 * a;

  const surfaceArea = 6 * a * a;

  const volume = a * a * a;

  return console.log(
    `Area: ${area}, Perimeter: ${perimeter}, Surface Area: ${surfaceArea}, Volume: ${volume}`
  );
};

propertiesOfSquare(6);

//Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const calProfitLoss = (cp, sp) => {
  const diff = cp - sp;

  if (diff > 0) {
    return console.log(`Loss: ${diff}`);
  } else {
    return console.log(`Profit: ${-diff}`);
  }
};

calProfitLoss(100, 120);

//Write a program to calculate sum of N natural digits, as input by the users?

const calSumOfNumbers = n => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return console.log(sum);
};

calSumOfNumbers(100);

//Write a Program to Print N Odd Number in Descending Order.

const printOddNumbers = n => {
  const arr = [];
  let counter = 1;

  while (arr.length !== n) {
    if (counter % 2 !== 0) {
      arr.push(counter);
    }
    counter++;
  }

  const dscArr = arr.sort((a, b) => b - a);

  return console.log(dscArr);
};

printOddNumbers(4);

//Write a JavaScript program to compute the sum of all digits that occur in a given string.

const getSumOfDigits = num => {
  const sum = num
    .toString()
    .split('')
    .reduce((acc, el) => (acc += +el), 0);

  return console.log(sum);
};

getSumOfDigits(15);

//Write a JavaScript program that reverses a number.

const getReversedDigits = num => {
  const reversed = num.toString().split('').reverse().join('');

  return console.log(reversed);
};

getReversedDigits(1223);

//Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

const getCyclicallyRotated = (num, n) => {
  const numArr = num.toString().split('');
  const modifiedArr = [numArr.slice(n), numArr.slice(0, n)];

  const modifiedNum = modifiedArr.flat().join('');

  return console.log(modifiedNum);
};

getCyclicallyRotated(1234, 1);

//Write a Program to convert Decimal to Binary.

const getBinary = num => {
  return console.log(num.toString(2));
};

getBinary(23);

//Write a Program to Convert Octal to Decimal.

const getDecimal = num => {
  return console.log(parseInt(num, 8));
};

getDecimal(11);
