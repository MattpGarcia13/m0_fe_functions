// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// the toLowerCase is written in camelCase and is meant to call back the string "Hello World"
// The goal is to rewrite "hello World" as "hello world"
"Hello World".includes("Hello");
//  the .includes is meant to callback to any string that uses the world "Hello"
// If the string is recalled then it will return with True, False if it doesnt.
"Hello World".endsWith("Hello");
// The .endswith command returns with True if the string referenced ends with the corresponding word. This will respond with False

"Hello World".endsWith("rld");
// Much like the previous string, except this one used a portion of the last word. This will be true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var randomCaps = "I hATe What i haD FOR BrEakfaSt!";
console.log(randomCaps.toLowerCase("I hATe What i haD FOR BrEakfaSt!"));
// The .toLowerCase() method calls on the randomCaps variable which stores a string
// The method returns the string in all lower case 



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

const bestBookOrder = ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords', `A Feast for Crows`, `A Dance with Dragons`];
const reversed = bestBookOrder.reverse();
console.log('reversed:', reversed);

// Here I created a list of the Song of Ice and Fire books in order of release date which makes up the array. 
// The method .reverse() take the array bestBookOrder and reverses it so the books come out as more recent first.

const bestBookOrder = ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords', `A Feast for Crows`, `A Dance with Dragons`];
console.log(bestBookOrder.slice(0, 2));

// Here I replaces .reverse with .slice which takes out specific sections of the array.
// In this instance, I imagined someone only liked the first two books so I made the array take out everything else.
// The (0, 2) portion of .slice take out everything not in positions 0 and 1 which only leaves the first two books.