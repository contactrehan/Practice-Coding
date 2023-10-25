"use strict";
/* Object Oriented Programming
 =>Classes, Function Over Loading and Overriding=<

=>Four Pillars of oop
1.Inheritence
2.Encapsulation
3.Abstraction
4.Polymorphism

*/
class laptop {
    constructor(brand, price) {
        this.ios = "Ios 15";
        this.brand = brand;
        this.price = price;
    }
    setClassProperties(brand, price) {
        this.brand = brand;
        this.price = price;
        return brand;
    }
    startlaptop() {
        console.log("Starting Laptop");
    }
}
var newLaptop = new laptop("Dell", 40000);
newLaptop.setClassProperties("Apple", 330000);
console.log(newLaptop);
function sum(a, b) {
    // console.log(a+b);
}
