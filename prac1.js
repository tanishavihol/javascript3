let score = prompt("Enter the score");
let grade = parseInt(score); // Convert the input to an integer

if (grade >= 80 && grade <= 100) {
console.log("You got A");
} else if (grade >= 70 && grade < 80) {
    console.log("You got B");
} else if (grade >= 60 && grade < 70) {
    console.log("You got C");
} else if (grade >= 50 && grade < 60) {
    console.log("You got D");
} else if (grade >= 40 && grade < 50) {
    console.log("You got E");
} else if (grade >= 0 && grade < 40) { // Fix the range for grades below 40
    console.log("You got F");
} else {
    console.log("Invalid score");
}

