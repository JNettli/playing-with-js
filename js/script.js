// 1. Select the heading H2

// querySelector
// querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with an id #list using querySelector

const listGet = document.querySelector("#list");
console.log(listGet);

// 4. Select Element with id #list using getElementById

const list = document.getElementById("list");
console.log(list);

// 5. Select single list

const listItem = document.querySelector("li");
console.log(listItem);

// 6. Select all listed items

const listedItems = document.querySelectorAll("li");
console.log(listedItems);

// 7. Change the color of h1

const heading1 = document.querySelector("h1");
console.log("First heading gang:",heading1);

heading1.style.color = "red";
heading1.style.border = "20px solid green";
heading1.style.backgroundColor = "orange";
heading1.style.padding = "20px";

const emptyDiv = document.querySelector("div");
console.log(emptyDiv);

emptyDiv.classList.add("container");

// Change the innerHTML text!

heading1.innerHTML = `<span class="blue">ALL YOUR BASE ARE BELONG TO US</span>`;

const arrayOfNames = ["Hesh", "Kjetil", "Jonas", "Ganondorf", "Link", "Zelda", "Mario", "Luigi", "Peach", "Yoshi", "Bowser"];
// console.log(arrayOfNames[3]);

for(let i = 0; i < arrayOfNames.length; i++) {
    console.log(arrayOfNames[i]);
}

let meaningOfLife = 42;

// Arithmetic Operators

// =, +, ++
//These are all very different with very different uses.

let x = 10;
let y = 5;

let sum = x + y;

console.log(sum);
console.log(meaningOfLife);

let negSum = x - y;

console.log(negSum);

let divSum = x / y;

console.log(divSum);

let multSum = x * y;

console.log(multSum);

let someSum = y % x;

console.log(someSum);

// Simple Operators 

// Simple assignment, everything on the right of =, put it on the left

let a = 5;

// a now has a value of 5

// Addition assignment (+=)

let b = 10; // value of b is set to 10.

b += 5; // the value of b is now 15!
// This is basically b = b + 5;

let c = 15;

c -= 5; // This is the same as above, except subtraction. 
// c is now 5.

// Comparison operators
// Equal to (==)

let isEqual = (5 == "5");
console.log("isEqual: ", isEqual); // Result is true, because 5 is the same as 5

// Strict Equality
// Truly equal, data type matters (===)

let isStrictEqual = (5 === "5");
console.log("isStrictEqual: ", isStrictEqual); // This returns false, because integer 5 is different from string 5.

// Not Equal (!=)
// Add another equal (!==) to make it strict.

let notEqual = (5 != 6);
console.log("notEqual:", notEqual); // Returns true, because 5 is not 6

// Greater than (>), and less than (<)

let isGreaterThan = (10 > 5); // True, 10 is greater than 5
console.log(isGreaterThan);

let isLessThan = (10 < 5); // False, 10 is not less than 5
console.log(isLessThan);

// And / or
// &&  , ||

// And means if all conditions are true, return true, else return false.

let resulterino = (5 < 3 && 6 > 5);
console.log("results are: ", resulterino);

// Or means if one of the conditions are true, return true.

let orResults = (5>10 || 10>5);
console.log(orResults);

// NOT
// ! in the beginning makes something untrue true.

let notBiggherr = !(5 > 10); 
console.log(notBiggherr);

