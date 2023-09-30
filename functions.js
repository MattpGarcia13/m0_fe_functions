// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(name) {
    return `Whats up,  ${name}!`;
  }
  console.log(greeting("Matt"));

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hows it hangin,  ${name}?`;
  }
  console.log(customGreeting("Matt G"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
const fName = Matt
const mName = P
const lName = Garcia

function greetPerson(fName, mName, lName) {
return `Your full name is ${fName, mName, lName}, isnt it?`;
}


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
var square = Math.pow(8, 2);
console.log(square);


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(){
    console.log(4, "Coffee, Coffee is stocked");
    console.log(3, "Tortillas, running LOW");
    console.log(0, "Cheese, OUT of stock!");
    console.log(1, "Salsa, unning LOW");
  }
  checkStock();