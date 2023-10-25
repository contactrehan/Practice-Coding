/* Object Oriented Programming
 =>Classes, Function Over Loading and Overriding=<

=>Four Pillars of oop
1.Inheritence
2.Encapsulation
3.Abstraction
4.Polymorphism 

*/

// Class   (It represents a Entity,An Entity has its own properties(properties and action)i.e: key and value)(key paired values)
interface iLaptop 
{
    brand :string
    price :number
    setClassProperties(brand:string,price:number):string 
    startlaptop():void
}
interface IApple{
    ios :string
}
class laptop implements iLaptop,IApple {
    ios:string="Ios 15"
  brand: string;
  price: number;
  constructor(brand: string, price: number) {
    this.brand = brand;
    this.price = price;
  }
  setClassProperties(brand:string,price :number)
  {
    this.brand = brand;
    this.price = price;
    return brand
  }

  startlaptop() {
    console.log("Starting Laptop");
  }
}
var newLaptop :iLaptop = new laptop("Dell", 40000);
newLaptop.setClassProperties("Apple",330000)
console.log(newLaptop);
// it uses the keyword implements in class from interface
// newDellLaptop.startlaptop();

// Function overiding
// function sum1(num1:number,num2 :number):number
// {
//   return num1+num2
// }


// function sum1(num1:number,num2 :number):number
// {
//   return num1*num2
// }


// sum1(1,2)












// function obverloading
function sum(a:string,b:string):string
function sum(a:number,b:number):number
function sum(a:string,b:string):boolean

function sum(a:any,b:any):any
{
    // console.log(a+b);
    
}