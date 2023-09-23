"use strict";
// Class Funtion
class studentdata {
    constructor(name, age, rollno, className) {
        this.name = name;
        this.age = age;
        this.className = className;
        this.rollno = rollno;
    }
}
let student1 = new studentdata("Zara", 15, 10, "10th");
let student2 = new studentdata("Shoaib", 17, 10, "11th");
let student3 = new studentdata("Ramish", 18, 10, "12th");
let student4 = new studentdata("Ali", 14, 10, "9th");
let students = [];
students.push(student1, student2, student3, student4);
console.log(students);
