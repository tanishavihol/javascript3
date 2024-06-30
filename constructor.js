function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Method to display person's information
    this.displayInfo = function() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    };
}

// Creating objects using the constructor
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Accessing properties
console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 25

// Calling methods
person1.displayInfo(); // Output: Name: Alice, Age: 30
person2.displayInfo(); // Output: Name: Bob, Age: 25
