let age = prompt("Please enter your age:");

if (age !== null) {
    age = Number(age);
    if (age >= 10 && age <= 20) {
        console.log("The age is between 10 and 20");
    } else {
        console.log("The age is not between 10 and 20");
    }
} else {
    console.log("No age entered");
}
