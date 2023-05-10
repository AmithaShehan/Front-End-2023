/*const colors = ["red", "green", "blue", "orange"];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
console.log(randomColor);
switch (randomColor) {
  case "orange":
    console.log("color is orange");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "green":
    console.log("color is green");
    break;
  case "red":
    console.log("color is red");
  break;
 default:
  console.log('no color found');
}
*/
/*
for (let i = 0; i < 10; i++){
 console.log(i);
}*/
/*
const array = ['sdfsdf', 'dfefdsdfe', 'sdfefsd', 46, 77, 'fgdfg', 44, 50];

for (let i = 0; i < array.length; i++){
 if (typeof array[i] == 'number') {
  console.log(array[i]);
 }
}
*/
/*
const myArray1 = [
  {
    name: "amitha",
    age: 29,
 },
 {
    name: "kasun",
    age: 19,
 },
 {
    name: "John",
    age: 24,
 },
 {
    name: "kane",
    age: 89,
  },
];
for (let i = 0; i < myArray1.length; i++){
 const theName = myArray1[i].name;
 const theAge = myArray1[i].age;

 console.log(theName + ' is ' + theAge + ' years old')
}
*/
/*
function myFunction() {
 console.log('hello world this is my first javascript function');
}
myFunction();
*/

/*
(function myOtherFunction() {
 console.log('declared and executed in same line ');
})();
*/
/*
function myFunction1(param1, param2) {
 console.log(param1);
 console.log(param2);
}

myFunction1('argument 1', 'argument 2');
*/
/*
const anotherFunction = function () {
 console.log('another function');
}
anotherFunction();
*/
/*
const arrowFunction = () => {
 console.log('I am arrow function');
}
arrowFunction();
*/
/*
const myNumber = 50; // defining a global variable

let myFunction = () => {
 if (myNumber < 25) { //accessing global variable
  return 'the number is less than 25';
 }
 return 'the number is greater than 25';
}
console.log(myFunction());
*/
/*
function myFunction() {
 return 50;
}
/*console.log(myFunction());
const aliasVariable = myFunction;
console.log(aliasVariable() + 20);
const myObj = {
 prop1: 20,
 prop2: myFunction
}
console.log(myObj.prop2());
*/
/*
const myName = 'Amiths';
console.log(myName.replace('s', 'a'));
console.log(myName);
const myCorrectName = myName.replace('s', 'a Shehan ');
console.log(myCorrectName);
*/
/*
const str = 'Hello World';
console.log(str.toUpperCase().split(" ").indexOf('WORLD'));*/
/*
const myString = 'My Dog jumped on the bed, my dog is a bad Dog';
const newString = myString.replaceAll('Dog', 'cat');
console.log(newString);//this is case sensitive
//so lets use regular expressions
const correctStr = myString.replaceAll(/[Dd ]{1}og/g,'cat') // g is the global flag
console.log(correctStr);
*/
/*
const moreComplexArray = [
  {
    firstName: "Bob",
    lastName: "Smith",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
  },
  {
    firstName: "Jon",
    lastName: "Smith",
  },
  {
    firstName: "Jon",
    lastName: "Smith",
  },
  {
    firstName: "Jon",
    lastName: "Doe",
  }
];
console.log(
  moreComplexArray.findIndex((arrItem) => {
    return arrItem.lastName !== "Smith";
  })
);
*/
/*
const blogPostsFromDatabase = [
  {
    title: 'How to use the map() function',
    category: 'uncategorized'
  },
  {
    title: 'What is JavaScript',
    category: 'uncategorized'
  },
  {
    title: 'Why are you crazy enough to learn to code?',
    category: 'uncategorized'
  },
];

function changeCategory(arrayItem) {
  arrayItem.category = 'Web Development';
  return arrayItem;
};

const newDBArray = blogPostsFromDatabase.map(changeCategory);

console.log(newDBArray);

//or we could use

blogPostsFromDatabase.map(arrItem => {
  arrItem.category = 'Web Development';
  return arrItem;
})
*/
/*
const array1 = [1, 2, 3, 4, 5];

array1.forEach(element => console.log(element));
*/
/*
const allOrders = [
  {
    productName: "Tea Pot",
    isDigital: false,
    isCancelled: false,
    isOpen: false,
  },
  {
    productName: "Mens hoodie",
    isDigital: false,
    isCancelled: true,
    isOpen: false,
  },
  {
    productName: "Coding book",
    isDigital: true,
    isCancelled: true,
    isOpen: false,
  },
  {
    productName: "Atomic habits book",
    isDigital: true,
    isCancelled: false,
    isOpen: false,
  },
];

const digitalOrders = allOrders.filter((arrItem) => {
  return arrItem.isDigital;
});

console.log(digitalOrders);

const cancelledDigitalOrders = allOrders.filter(arrItem => {
  return arrItem.isDigital && !arrItem.isCancelled
})

console.log(cancelledDigitalOrders);
*/

/*
const array = [1, 2, 3, 4];

function reducerCallBack(sum, arrItem) {
  return sum + arrItem;
}

console.log(array.reduce(reducerCallBack, 0));

//another way to write callback function
array.reduce((sum, arrItem) =>  sum+=arr,0)
*/
/*
const obj1 = { prop1: 'some Value' };
const obj2 = { prop1: 'some Value' };
console.log(obj1 === obj2);
console.log(obj1 == obj2);
*/

//generating a random value between 0-100
/*
const randomNumber = Math.random();
const randomNumberTo100 = randomNumber * 100;
const randomNumberFloor = Math.floor(randomNumberTo100);
console.log(randomNumberFloor);
*/
//all in one line
/*
const randNum = Math.floor(Math.random() * 100);
console.log(randNum)
*/
/*
const myArray = [2, 5, 6, 8, 1.2, 23];
const randomIndex = Math.floor(Math.random() * myArray.length);
console.log(myArray[randomIndex]);
*/

try {
  var num = 45;
  num.toUpperCase();
}
catch (error) {
  console.log(error instanceof TypeError);
  console.log(error.message);
}