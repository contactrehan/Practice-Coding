// // Class Funtion

// class studentdata {
//   name: string;
//   rollno: number;
//   age: number;
//   className: string;
//   constructor(name: string, age: number, rollno: number, className: string) {
//     this.name = name;
//     this.age = age;
//     this.className = className;
//     this.rollno = rollno;
//   }
// }
// let student1 = new studentdata("Zara", 15, 10, "10th");
// let student2 = new studentdata("Shoaib", 17, 10, "11th");
// let student3 = new studentdata("Ramish", 18, 10, "12th");
// let student4 = new studentdata("Ali", 14, 10, "9th");
// let students=[]
// students.push(student1,student2,student3,student4)
// console.log(students);



type car = {
  make:string,
  year:number,
  color:string
 
  
 }

class Car {
 make:string=""
 year:number=0
 color:string=""
 constructor(make:string,year:number,color:string){
  this.make = make
  this.year = year
  this.color= color
 }
 startcar(){
  console.log("Start Car");
  
 }
}
let car1:car = new Car("Honda",2022,"Red")
console.log(car1)
