"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
/*interface Person {
    firstName: string;
    lastName: string;
}*/
/*function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}*/
let student = new Student("Jane", "M.", "student");
document.body.innerHTML = greeter(student);
