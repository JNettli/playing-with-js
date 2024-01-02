function changeText() {
    console.log("All your base are belong to us.");
    console.dir(document.getElementById("demo"));
    document.getElementById("demo").innerHTML = "Oopsie daisy!";
}

function sun() {
    document.getElementById('myImage').src='img/sun.png';
}

function moon() {
    document.getElementById('myImage').src='img/moon.png';
}

// Variables time!

var favColor = "Green";

console.log(favColor);

let age = 27;
console.log(age);

const MAKE = "Toyota";
console.log(MAKE);

let greeting = "Hello World!";
console.log(typeof greeting);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);

let emptyValue = null;
console.log(typeof emptyValue);

let person = {
    firstName: "Jonas",
    lastName: "Nettli",
    age: "27",
    bigbrain: "true"
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.bigbrain);

let car = {
    make: "Volvo",
    model: "240",
    createdYear: 1992,
    carCondition: "used",
    carPrice: 10000
};
console.log("I have a " + car.make + " model " + car.model + " created the year " + car.createdYear + " in " + car.carCondition + " condition at the price of " + car.carPrice);
console.log(`I have a ${car.make} model ${car.model} created the year ${car.createdYear} in ${car.carCondition} condition at the price of ${car.carPrice}`);


// Array

let blodklubbe = ["big", "strong", "green", {car}];
console.log(blodklubbe);

// 3. type conversion

let numberString = "1992"; // This is a string, this is considered text and cannot be multiplied or added to

// Lets convert that baby

let convertedString = parseInt(numberString);
console.log(convertedString);

// Turn it back!!!

let number = 123;
console.log(number);

let convertedNum = number.toString();
console.log(convertedNum);



// Task

var city = "Asker";
const birthyear = "1996";
console.log(city, age, birthyear);

let quantity = 20;
let isJavaScriptFun = true;
let thisIsUndefined;


console.log(typeof greeting,typeof quantity,typeof isJavaScriptFun,typeof thisIsUndefined , typeof emptyValue);

let numString = "25";
let num = parseInt(numString);

let num2 = 50;
let numString2 = num2.toString();

console.log(numString2, num);
console.log(num + num2);
console.log(numString + numString2);
