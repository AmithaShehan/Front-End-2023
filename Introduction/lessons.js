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
const str = 'Hello World';
console.log(str.toUpperCase().split(" ").indexOf('WORLD'));