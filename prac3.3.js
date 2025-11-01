// Base class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

// Subclass: Student (inherits from Person)
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call the parent class constructor
    this.course = course;
  }

  // Overriding the displayInfo() method
  displayInfo() {
    super.displayInfo(); // Call parent displayInfo()
    console.log(`Course: ${this.course}`);
  }
}

// Subclass: Teacher (inherits from Person)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Overriding the displayInfo() method
  displayInfo() {
    super.displayInfo();
    console.log(`Subject: ${this.subject}`);
  }
}

// Creating instances
const student1 = new Student("Alice", 20, "Computer Science");
const teacher1 = new Teacher("Mr. John", 45, "Mathematics");

// Demonstrating method calls
console.log("Student Details:");
student1.displayInfo();

console.log("\nTeacher Details:");
teacher1.displayInfo();
