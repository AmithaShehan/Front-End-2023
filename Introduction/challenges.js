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