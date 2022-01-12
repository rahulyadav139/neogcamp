//section 1: converting to es6
//converting to ES6

// exercise: 01
const aloo = 1;
if (aloo === 1) {
  const a = 2;
  console.log(a);
}
console.log(aloo);

// exercise: 02
const multiply = (x, y) => x * y;

// exercise: 03
const customer = {
  name: 'Bhaalo',
};
const card = {
  amount: 20,
  product: 'Aaalo',
  unitprice: 50,
};

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece.`;
console.log(message);

// exercise: 04
const neog = ['Tanvi', 'Swap', 'Tanay', 'MA', 'CA', 'PA', 'TA'];

const [CEO, , mentor] = neog;

console.log(CEO, mentor);

// exercise: 05
const arr = ['MA', 'TA', 'PA', 'CA'];

const [firstName, surname] = arr;

console.log(firstName, surname);

// exercise: 06
const aaloo = 'Tasty';

const bhaloo = 'Cute';

const obj = {
  aaloo,
  bhaloo,
};

// exercise: 07
const a = 5;
const b = 10;

console.log(`Fifteen is ${a + b} and not ${2 * a + b}`);

// exercise: 08
const arithmeticsObj = {
  sum(num1, num2) {
    return num1 + num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};

// exercise: 09
const avengers = {
  operation: 'Assemble',
  members: [
    {
      ironMan: 'Tony Stark',
    },
    {
      captainAmerica: 'Steve Rogers',
    },
    {
      blackWidow: 'Natasha Romanoff',
    },
  ],
};

const { operation, members } = avengers;

//section 2: converting to ES5

function packIt2() {
  return console.log(arguments);
}

packIt2([1, 2, 3, 5, 5]);

//section 3: guess the

//Exercise 01

const hello = () => 'Hello';
const welcome = () => 'Welcome';
const [Hello = hello(), Welcome = welcome()] = ['Namaste'];
console.log(Hello, Welcome);

// Namaste Welcome

//Exercise 02

// const obj = {
//     aloo : 1,
//     bhallo : 2
// }

// const {c : aloo = [2,3,4].push(5), aloo} = obj

// console.log(aloo)
