//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const addFun = (...numbers) => {
  const sum = numbers.reduce((acc, el) => (acc += el), 0);

  return sum;
};

console.log(addFun(5, 13, 7, 21, 48));

//Write a program to take a number input from user and determine whether the number is odd or even.

const findEven = number => {
  let factors = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      factors++;
    }

    return factors === 2 ? console.log('Prime') : console.log('Not Prime');
  }
};

findEven(7);

//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

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

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

findMax(8, 23, 17);

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

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

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const monthHas31Days = month => {
  const months = [1, 3, 5, 7, 8, 10, 12];

  const isHas31Days = months.includes(month);

  return isHas31Days
    ? console.log('This month has 31 days')
    : console.log("This month doesn't have 31 days");
};

monthHas31Days(3);

//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

const fizzBuzzFun = () => {
  const outputArr = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      outputArr.push('Fizz');
    } else if (i % 5 === 0) {
      outputArr.push('Buzz');
    } else {
      outputArr.push(i);
    }
  }
  return console.log(outputArr);
};

fizzBuzzFun();

//Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const printStar = number => {
  for (let i = 1; i <= number; i++) {
    console.log('*'.repeat(i));
  }
};

printStar(5);

//Write a program to take a number input from user and print multiplication table 12 times for that number.

const printTable = number => {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i * 12);
  }
};

printTable(5);

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacciSeries = number => {
  let number1 = 0;
  let number2 = 1;

  const series = [number1, number2];

  for (let i = 0; i < number; i++) {
    let number3 = number1 + number2;
    series.push(number3);
    number1 = number2;
    number2 = number3;
  }
  return console.log(...series);
};

fibonacciSeries(10);

//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const findFactorial = number => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return console.log(factorial);
};

findFactorial(5);

//Write a Program to take a number input from user and find if the number is Prime or not.
//already done

//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const findWeekend = input => {
  const str = input.toLowerCase();
  const formattedStr = str[0].toUpperCase() + str.slice(1);
  if (str === 'sunday' || str === 'saturday') {
    return console.log(`${formattedStr} is weekend`);
  } else {
    console.log(`${formattedStr} is weekday`);
  }
};

findWeekend('monday');
