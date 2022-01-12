//Write a program that converts the string into uppercase

const getUpperCaseStr = str => {
  const inUpperCase = str.toUpperCase();

  return console.log(inUpperCase);
};

getUpperCaseStr('rahul yadav');

//Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const switchString = str => {
  const [a, b] = str.split(' ');
  return console.log(`${b}${a}`);
};
switchString('Good Morning');

//Program that reads string and count number of characters present in the string

const countChar = str => {
  const totalChar = str.replaceAll(' ', '').length;

  return console.log(totalChar);
};

countChar('rahul yadav');

//Write a program that converts string like "124" to 124

const changeToNumber = str => {
  return console.log(Number(str));
};

changeToNumber('124');

//Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const removeVowel = str => {
  const length = str.replaceAll(' ', '').length;

  if (length > 80) {
    return console.log('This string is more than 80 characters long');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let newStr = str;

  for (const vowel of vowels) {
    newStr = newStr.replaceAll(vowel, '');
  }

  return console.log(newStr.trim());
};

removeVowel('"i am rahul yadav"');

//Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const parseInteger = str => {
  const regex = /\d/g;
  const num = str.match(regex);

  return num
    ? console.log('String is alphanumeric')
    : console.log('String is not alphanumeric');
};

parseInteger('batman@67');

//A program that reads three strings and prints the longest and smallest one

const printStringInDscOrder = str => {
  const newStr = str
    .split(' ')
    .map(el => ({ string: el, length: el.length }))
    .sort((a, b) => b.length - a.length)
    .map(el => el.string)
    .join(' ');

  return console.log(newStr);
};

printStringInDscOrder('i rahul am');

//A program that counts number of vowels and consonants in a String?

const countVowels = str => {
  const totalChar = str.replaceAll(' ', '').length;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let newStr = str;

  for (const vowel of vowels) {
    newStr = newStr.replaceAll(vowel, '');
  }

  const totalConsonants = newStr.replaceAll(' ', '').length;

  const totalVowels = totalChar - totalConsonants;
  console.log(totalChar);

  return console.log(`Vowels: ${totalVowels}, Consonants: ${totalConsonants}`);
};

countVowels('i am rahul yadav');

//Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const getStrLength = str => {
  const length = str
    .split(' ')
    .map(el => el.split(''))
    .flat().length;

  return console.log(length > 7);
};

getStrLength('i am');

//Write a program that takes two strings and copies smaller string into bigger string
//i don't understand the question

//Given a string, determine if it is a palindrome, considering only alphanumeric characters

const isPalindrome = str => {
  const regex = /\d/g;

  const num = str.match(regex);

  if (!num) {
    return console.log('String is not alphanumeric');
  }

  const reversed = str.split('').reverse().join('');

  return console.log(str === reversed);
};

isPalindrome('12paap21');

//For a given input string(str), write a function to print all the possible substrings.Without using substr method

const getSubString = str => {
  const substrings = [];

  for (let i = 1; i <= str.length; i++) {
    substrings.push(str.slice(0, i));
  }

  return console.log(...substrings);
};
getSubString('rahul');
//Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

const getDate = str => {
  console.log(new Date(str));
};

getDate('April 15 2001');

//Write a program that masks all but last four characters of the string "5565534276455423" to '#'

const getMaskedString = num => {
  const str = num.toString();
  const newStr = str.toString().slice(-4).padStart(str.length, '#');

  return console.log(newStr);
};
getMaskedString(5565534276455423);

//Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

const formateStr = str => {
  const modifiedStr = str.split(' ').map(el => el.split(''));
};

formateStr('tic tac toe is a fun game');

//Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

const replaceWithOther = (str, a, b) => {
  const modifiedStr = str.replaceAll(a, b);

  return console.log(modifiedStr);
};
replaceWithOther('rahul', 'a', 'h');

//Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

const removeSpaces = str => {
  const modifiedStr = str.replaceAll(' ', '');
  return console.log(modifiedStr);
};

removeSpaces('i am rahul   yadav');

//Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

const reverseTheString = str => {
  const arr = str.split(' ');
  let modifiedArr = [];

  for (const element of arr) {
    modifiedArr.unshift(element);
  }

  const modifiedStr = modifiedArr.join(' ');

  return console.log(modifiedStr);
};

reverseTheString('Welcome to NeoG Camp');

//A program that counts the value of each character and prints the most repeated character?

//Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

const UpperCaseAlternateString = str => {
  let toggle = false;

  const modifiedStr = str
    .split(' ')
    .map(el =>
      el.split('').map(el => {
        if (toggle) {
          toggle = !toggle;
          return el.toUpperCase();
        } else {
          toggle = !toggle;
          return el;
        }
      })
    )
    .map(el => el.join(''))
    .join(' ');

  return console.log(modifiedStr);
};

UpperCaseAlternateString('good afternoon rahul');

//Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

const removeWordFromString = (str, word) => {
  const modifiedStr = str.replaceAll(word, '');
  return console.log(modifiedStr);
};

removeWordFromString('programming camp are amazing', 'programming');
