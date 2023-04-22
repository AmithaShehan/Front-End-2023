/*01:46 challenges*/
/*
const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [];
myArray[0] = myBoolean;
myArray[1] = myString;
const sumFunction = function () {
 return firstNumber + secondNumber;
}
const myObject = { firstProperty: myArray, sumProperty: sumFunction() };
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1])
*/
/*02.39 challenges*/
/*
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);
*/
/*
function countSheeps(arrayOfSheep) {
  var count = 0;

  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count++;
    }
  }
  // TODO May the force be with you
}
var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

countSheeps(array1);
console.log(array1.length);
console.log(count);
*/
/*
function getCount(str) {
  var vowelArray = str.split("");
  console.log(vowelArray);
  let vowelCount = 0;
  for (let i = 0; i <= vowelArray.length; i++) {
    switch (vowelArray[i]) {
      case 'a':
        vowelCount++;
        break;
      case 'e':
        vowelCount++;
        break;
      case 'i':
        vowelCount++;
        break;
      case 'o':
        vowelCount++;
        break;
      case 'u':
        vowelCount++;
        break;
      
    }
  }
  console.log(vowelCount);
  return 0;
}
getCount("abafaeidj");
*/
/*
function isDivisible(n, a, b) {
  if ((n % a  == 0) && (n%b==0)) {
    return true;
  }
  else
    return false;
}
console.log(isDivisible(12.5, 2, 6));
*/
/*
function makeNegative(num) {
  if (num > 0) {
    return num * (-1);
  }
  else
    return num;
}

console.log(makeNegative(0));
*/
/*
function findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for(let i = 0 ; i<arrayOfNumbers.length; i++){
      let arrayNumber = arrayOfNumbers[i];
      if(i === 0){
        smallestNumber = arrayNumber;
      }
      if(arrayNumber < smallestNumber){
        smallestNumber = arrayNumber;
      }
    }
    return smallestNumber;
}
  console.log(findSmallestInt([34, 15, 88, 2]))
  */
/*
var summation = function (num) {
  let summ = 0;
  for (let i = 1; i <= num; i++){
    summ = summ + i;
  }
  return summ;
}
 
console.log(summation(3));
*/
/*
function getAverage(marksArray) {
  let totalMarks = 0;
  for (let i = 0; i < marksArray.length; i++){
    totalMarks = totalMarks + marksArray[i];
  }
  return Math.floor(totalMarks / marksArray.length) ;

}
console.log(getAverage([34, 15, 88, 2]));
*/
/*
const rockPaperScissors = (p1, p2) => {
  if (
    (p1 == "rock" && p2 == "scissors") ||
    (p1 == "scissors" && p2 == "paper") ||
    (p1 == "paper" && p2 == "rock")
  )
    return 1;
  else if (
    (p1 == "scissors" && p2 == "rock") ||
    (p1 == "paper" && p2 == "scissors") ||
    (p1 == "rock" && p2 == "paper")
  )
    return 2;
  else return "Draw!";
};

console.log(rockPaperScissors("rock", "paper"));
*/
/*
function noSpace(x){
  const arr = x.split("");
  console.log(arr.lenth)
  let newArray = [];
  
  for(let i = 0; i<arr.lenth; i++){
    const trimmedString = arr[i].trim();
    console.log(trimmedString)
    newArray.push(trimmedString);
    
  }
  const finalString = newArray.join("");
  return finalString;
  
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
*/
/*
function maps(x) {
  console.log(x.length)
  let newArray = [];
  for (let i = 0; i < x.length; i++){
    let newValue = x[i] * 2;
    console.log(newValue);
    newArray[i] = newValue;
  }
  return newArray;
}
console.log(maps([2,5,8]))
*/
/*
function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}

console.log(hero(7, 3));
*/
/*
function arrayPlusArray(arr1, arr2) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++){
    sum = sum + arr1[i];
  }
  console.log(sum);
  for (let i = 0; i < arr2.length; i++){
    sum = sum + arr2[i];
  }
  return sum;
}
console.log(arrayPlusArray([2, 5, 6], [8, 9, 7]));
*/
/*
function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(400390));
*/
/*
//-------------------------------------------------------Intermediate------------------------------------------------------------
function filter_list(array) {
  return array.filter(callBackFunction)
}

function callBackFunction(arrItem) {
  if (typeof arrItem == 'number') {
    return true;
  }
}

console.log(filter_list([1, 5, 6, 8, 'sdf', '78']));
*/
/*
function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }
  if (b.length === 0) {
    return a;
  }
  let newA = a;
  let newB = b;

  a.forEach((arrItem, arrIndex) => {
    const aCopy = newA.slice();
    const bCopy = newB.slice();

    if (b.includes(arrItem)) {
      newA = aCopy.filter(item => item !== arrItem);
      newB = bCopy.filter(item => item !== arrItem);
    }

  });
  return newA;
}
console.log(arrayDiff([1, 2,3], []));
console.log(arrayDiff([], [5, 6, 7, 8]));
console.log(arrayDiff([1,2,3,6,5,6], [3,5]));
*/
/*
function list(names) {
 // console.log(names.length);
  let finalString = '';

  if (names.length === 1) {
    return names[0].name
  }

  names.forEach((arrItem, arrIndex) => {  
    const name = arrItem.name;

    if (arrIndex === names.length - 1) {
      finalString = finalString + ' & ' + name;
      
    } else if (arrIndex === names.length - 2) {
      finalString = finalString + name;
    } else {
      finalString = finalString + name + ', ';
    }

  });

  
  return finalString;
}
console.log(list([]));
console.log(list([{ name: 'Bart' }]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
*/
/*
function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  }
  let northWalk = 0;
  let southWalk = 0;
  let eastWalk = 0;
  let westWalk = 0;
  walk.forEach(element => {
    switch (element) {
      case 'n':
        northWalk = northWalk + 1;
        break;
      case 's':
        southWalk = southWalk + 1;
        break;
      case 'e':
        eastWalk = eastWalk + 1;
        break;
      case 'w':
        westWalk = westWalk + 1;
    } 
  });

  return (northWalk - southWalk === 0 && eastWalk - westWalk === 0);
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
*/
/*
function persistence(num) {
  if (num < 10) {
    return 0;
  }
  const strVersion = num.toString();
  const arrVersion = strVersion.split('');
  const multiplicationValue = arrVersion.reduce((acc, num) => acc *= num);
  if (multiplicationValue >= 10) {
    return 1 + persistence(multiplicationValue);
  } else {
    return 1;
  }
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
*/
/*
function validatePIN (pin) {
  const fourDigitsRegex = /(^[0-9]{4}$)/;
  const sixDigitsRegex = /(^[0-9]{6}$)/;

  const result1 = pin.match(fourDigitsRegex);
  const result2 = pin.match(sixDigitsRegex);

  if (result1 === null && result2 === null) {
    return false;
  }
  else {
    return true;
  }
}
*/
/*
function lowercaseCount(str){
  const result = str.match(/[a-z]/g);
  return result ? result.length : 0;
}
console.log(lowercaseCount(("AxC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")));
*/
/*
function isToday(date) {
  const checkDate = date.getDate();
  const checkMonth = date.getMonth(); // 0 indexed
  const checkYear = date.getFullYear();

  const today = new Date()
  const todayDate = today.getDate();
  const todayMonth = today.getMonth(); // 0 indexed
  const todayYear = today.getFullYear();

  return checkDate === todayDate && checkMonth === todayMonth && checkYear && todayYear;
}
*/
/*
function capitalize(s) {
  const arr1 = s.split('');
  const arr2 = s.split('');
  arr1.forEach((item, index,original) => {
    if (index % 2 === 0) {
      original[index] = item.toUpperCase();
    }
  });
   arr2.forEach((item, index,original) => {
    if (index % 2 !== 0) {
      original[index] = item.toUpperCase();
    }
   });
  const arr1Str = arr1.join('');
  const arr2Str = arr2.join('');
  return [arr1Str, arr2Str];
};

console.log(capitalize("abcdef"));
console.log(capitalize("codewars"));
console.log(capitalize("abracadabra"));
console.log(capitalize("codewarriors"));
*/
/*
function maxNumber(n) {
  return +n
    .toString()
    .split("")
    .sort((first, second) => second - first)
    .join("");
}

console.log(maxNumber(213));
console.log(maxNumber(7389));
console.log(maxNumber(63792));
console.log(maxNumber(566797));
console.log(maxNumber(1000000));
*/