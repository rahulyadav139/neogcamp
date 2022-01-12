const studentDetails = [
  {
    roll: '1',
    name: 'Rohan Singh',
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: '2',
    name: 'Ritvik Patel',
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: '3',
    name: 'Neha Maurya',
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: '4',
    name: 'Mohit Verma',
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: '5',
    name: 'Karan Trivedi',
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

const updatedStudentDetails = studentDetails.map(el => {
  const totalMarks = el.science + el.english + el.computer + el.maths;
  const percentage = totalMarks / 4;
  let grade;
  if (percentage >= 75) {
    grade = 'A';
  } else if (percentage >= 60) {
    grade = 'B';
  } else if (percentage >= 30) {
    grade = 'C';
  } else {
    grade = 'D';
  }
  return { ...el, totalMarks, grade };
});

//Print the name and total marks of each student.

updatedStudentDetails.map(el => {
  const student = el.name;
  const totalMarks = el.science + el.english + el.computer + el.maths;
  return console.log(`Student: ${student}, Total Marks: ${totalMarks}`);
});

//Print the name of student whose total marks is highest.

const getStudentWithHighestMarks = arr => {
  let highestMark = 0;
  let highestMarkStudent;

  for (const student of updatedStudentDetails) {
    if (highestMark < student.totalMarks) {
      highestMark = student.totalMarks;
      highestMarkStudent = student.name;
    }
  }
  return console.log(`${highestMarkStudent} got highest marks: ${highestMark}`);
};
getStudentWithHighestMarks(studentDetails);

//Print the name of student whose total marks is lowest.

const getStudentWithLowestMarks = arr => {
  let lowestMark = updatedStudentDetails[0].totalMarks;
  let lowestMarkStudent = updatedStudentDetails[0].name;

  for (const student of updatedStudentDetails) {
    if (lowestMark > student.totalMarks) {
      lowestMark = student.totalMarks;
      lowestMarkStudent = student.name;
    }
  }
  return console.log(`${lowestMarkStudent} got lowest marks: ${lowestMark}`);
};
getStudentWithLowestMarks(studentDetails);

//Print the average marks of the class in computer subject.

const getAvgMarksOfComputerSubject = arr => {
  const length = arr.length;

  let sum = 0;

  for (const student of arr) {
    sum += student.computer;
  }
  const avg = sum / length;
  return console.log(avg);
};

getAvgMarksOfComputerSubject(studentDetails);

//Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.

updatedStudentDetails.map(el =>
  console.log(`Name: ${el.name}, Grade: ${el.grade}`)
);

//Print the total number of students passed and their names. Pass when total marks is greater than 35%.

updatedStudentDetails
  .filter(el => el.grade !== 'D')
  .map(el => console.log(`Name: ${el.name}`));

//Salary calculation using OOPS concept.

// Create a Class using ES6 in JavaScript named Employee and assign necessary data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
// Create two Instances of Employee with all necessary details.
// Call the getSalary method of each instance and return the net salary based on your computation.

const Employee = {
  init(name, id, basicSalary, hra, allowances) {
    (this.name = name),
      (this.id = id),
      (this.basicSalary = basicSalary),
      (this.hra = hra),
      (this.allowances = allowances);
  },

  calSalary() {
    return (this.salary = this.basicSalary + this.hra + this.allowances);
  },
};

const meena = Object.create(Employee);
const sharad = Object.create(Employee);

meena.init('Meena Kumari', 'E-001', 40000, 5000, 2000);
sharad.init('Sharad Singh', 'E-002', 50000, 6000, 3000);

console.log(meena.calSalary());
console.log(sharad.calSalary());

//Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number, account balance, account type, ifsc and name it as BankAccount.
// Create three Instances(three customers) of BankAccount with all necessary details.
// Print the name of customers and their account balances.
// Calculate the average account balance from all the instances.

const BankAccount = function (name, accNum, accBal, accType, ifsc) {
  (this.name = name),
    (this.accNum = accNum),
    (this.accBal = accBal),
    (this.accType = accType),
    (this.ifsc = ifsc);
};

BankAccount.prototype.greetMsg = function () {
  console.log(`Hi ${this.name}, your account balance is ${this.accBal}.`);
};

const jay = new BankAccount('Jay Singh', 12345678, 5000, 'Saving', 'IFSC10001');
const rama = new BankAccount(
  'Rama Bai',
  56781234,
  10000,
  'Saving',
  'IFSC10011'
);
const mohit = new BankAccount(
  'Mohit Yadav',
  87654321,
  50000,
  'Current',
  'IFSC11111'
);

jay.greetMsg();
rama.greetMsg();
mohit.greetMsg();

const getAvgBal = () => {
  const avg = (jay.accBal + rama.accBal + mohit.accBal) / 3;
  console.log(avg.toFixed(2));
};
getAvgBal();

const cartItems = [
  {
    id: '101',
    name: 'Oreo',
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: '102',
    name: 'Red Bull',
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: '103',
    name: 'Dairy Milk Silk',
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: '104',
    name: 'Pulse Candy Pack',
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// Given an array of objects of items in cart, print:

// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)

const totalItems = cartItems.reduce((acc, el) => (acc += el.count), 0);
console.log(totalItems);

const totalCartValue = cartItems.reduce(
  (acc, el) => (acc += el.price * el.count),
  0
);
console.log(totalCartValue);

const totalDiscount = cartItems.reduce(
  (acc, el) => (acc += el.discount * el.price * el.count),
  0
);
console.log(totalDiscount);

console.log(totalCartValue * 0.18);
