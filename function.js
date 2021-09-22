// function declaration
// function hello(fName, lName) {
//   return `hello ${fName} ${lName}`;
// }
// console.log(hello('Prisilia','Rumengan'));


// function expression
let greeting = function(name) {
  return `hello ${name}`;
}
// console.log(greeting('Renaldy'));

const fct = function factorial(number) {
  if(number <=1 ) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
// console.log(fct(3));


// IIFE
const squared = (function(num) {
  return num * num;
})(8);
// console.log(squared);


// arrow function
const hello2 = (fName, lName) => {
  console.log('welcome');
  return `hello ${fName} ${lName}`;
}
console.log(hello2('Timothy', 'Tiwow'));

const hello = (name) => { 
  return `hello ${name}`; 
};

console.log(hello('Timothy'));


const fct2 = (number) => {
  if(number <=1 ) {
    return 1;
  } else {
    return number * fct2(number - 1);
  }
}
console.log(fct2(9));

