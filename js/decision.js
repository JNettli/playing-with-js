console.log("Hello!");

const gorilla = document.querySelector("h6");

function textFont() {
    gorilla.style.fontFamily = "Segoe UI"
    gorilla.style.fontWeight = "300"
    gorilla.style.fontSize = "20px"
    gorilla.style.color = "white"
    gorilla.style.display = "block"
}

function refresh() {
    location.reload();
}

// if and else statements

let temp = 28;

if (temp > 30) {
    console.log("AAAAAH HELP ME IM BURING UP!!!!")
} else if (temp < 10) {
    console.log("Brrr soo cold!!");
} else {
    console.log("Aaaaah... Refreshing temperature!")
}

let score = 5;

if (score === 100) {
    console.log("Great job! You got a perfect score!");
} else if (score > 75) {
    console.log("Good job! You got a high grade!");
} else if (score > 65) {
    console.log("You passed!");
} else if (score > 50) {
    console.log("Barely passed! Study harder next time!");
} else if (score > 40) {
    console.log("Test failed. Better luck next time!");
} else {
    console.log("You have a mental retardation, you need better help than what I can provide. \nSorry.");
}

// Adding \n will break the line.

const word = `First sentence.
Second sentence`;

console.log(word);

const word2 = "First sentence.\nSecond sentence";

console.log(word2);


let color = "red";

switch (color) {
    case "red":
        console.log("No, don't do it! I'm a virgin!")
        break;
    case "yellow":
        console.log("Kinda sussy, ngl")
        break;
    case "green":
        console.log("Green means go!");
        break;

    default:
        console.log("Pee pee poo poo haha")
}

let grade = "b";
grade = grade.toUpperCase();

switch (grade) {
    case "A":
        console.log("Outstanding!");
        break;
    case "B":
        console.log("Very good!");
        break;
    case "C":
        console.log("Good effort!");
        break;
    case "D":
        console.log("Needs improvement!");
        break;
    case "F":
        console.log("Failed. Must retake exam.");
        break;
    default:
        console.log("Invalid grade");
}

for (let i = 1; i <=5; i++) {
    console.log(i);
}


