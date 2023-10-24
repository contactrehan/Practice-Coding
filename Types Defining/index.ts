//Types

// => Number
let num: number = 10;

// => String
let str: string = "Rehan";

// => Boolean
let cond: boolean = true;

// => null
let nullVar: null = null;

// => Undefined
let undefinedVar: undefined = undefined;

// => Void (we can store undefined value in void)
let isVoid: void = undefined;
function printSomething(): void {
  // console.log(`print`);
}
const result = printSomething();
// console.log(result, typeof(result));

// => any
let anyVariable: any = "anything";
anyVariable = 3456;
// console.log(anyVariable);

let anyVar: any = "anything";
anyVar = 45;
anyVar = false;

// => Unknown( Same as any to some extent but difference it can resist to one type by providing a condition like restricting it to only string any doesnt provide that flexibility)
let unknownVar: unknown = "string";
unknownVar = 47;
unknownVar = true;

// => Never
function newError(message?: string): never {
  throw new Error("Error");
}

// => object
type obj = {
  name: string;
  phone: number;
};
const obj: obj = {
  name: "Ultimo",
  phone: 839,
};

// => Array Types
let arr1: number[] = [20, 30];

let arr2: string[] = ["String1", "String2"];

// => Tuple
let tuple: [string, number, boolean] = ["Rehan", 2209, false];

let newVar: [string, string, number] = ["rehan", "Any", 34];

// List of Objects
type StudentType = {
  name: string;
  rollno: number;
  age: number;
};
let studentArray: StudentType[] = [
  { name: "Ali", rollno: 1, age: 18 },
  {
    name: "Rehan",
    rollno: 2,
    age: 3,
  },
];

//union by using or operator

type circle={
  radius:number
}
type square={
  sideLength:number
   
}
let unionVar: string | number = 69;


//intersection by using or operator it only apply on object types
let intersectionVar: circle & square = {radius:23,
sideLength:50};// it is combinig the both properties of types defined square and circle

type contactForm = {
  name:string,
  email:String
  message:string
  budget:number

}
type aboutus ={
  subject: string
}

let formData :contactForm & aboutus = {name:"Rehan", //using & intersection
email:"contactrehan2209@gmail.com",
message:"Hello World",
subject:"Maths",
budget:2211}
//enum for defining a type that can be one of the values specified in an enum.

enum Colors{red=8,green,blue}

// for returning index
let myColor1:Colors = Colors.blue //1st method
let myColor2:Colors = Colors['red'] //2nd method to get index

//for returning value
var myColor3 :string = Colors[2] //this will return value


//for defining value
// we can also define values and by defining values index got removed
enum students {
  rehan="rehan",bilal="bilal",ali="ali"
}
// console.log(students.rehan);
function f1(p:string)
{
  return p
}
// console.log(f1(students.rehan))


// CONSTANT are wriiten in CAPS its a standard by developers





// generics // declare type on runtime

// function swap<T>(array:T[]):T[]
// {
// return [array[1],array[0]]
// }
// var Result : String[] = swap(["Mujtaba","Ali"])
// console.log(Result);



function swap<T>(array:T[]):T[]
{
  return [array[1],array[0]]
}


let swapString :string[]= swap<string>(["Rehan","Ali"])
console.log(swapString);
let swapNumber :number[]= swap<number>([25,78])
console.log(swapNumber);
let swapBoolean :boolean[]= swap<boolean>([true,false])
console.log(swapBoolean);


// Interface  is only used for object types, while type keyword can be used for scalar types
// type A = number | string
// interface A number  | string wrong
// type A = number | string | boolean
// let Anumb : A = false
// interface Student
// {
//   name: string,
//   age : number
// }
// var student :Student={name:"Mujtaba",age:34};


// it can use extend
interface TeacherA {
  class : string
}
interface StudentA extends TeacherA{
  grade : string
  rollno : number
}

let Student1 : StudentA = {
  class : "Sir Hafeez",
  grade : "9th",
  rollno : 344
}





interface todos {

    id: number,
    todo :string ,
    completed: boolean,
    userId:number
  }

interface DataType {
  todos : todos[]
}


let Data : DataType= {
   todos : [
    {
       id : 1,
       todo :  "Do something nice for someone I care about" ,
       completed : true,
       userId : 26
    },
    
    // 30 items
  ],
 
}

interface cartsProducts {
          id : number,
          title :  string ,
          price : number,
          quantity : number,
          total : number,
          discountPercentage : number,
          discountedPrice : number,
          thumbnail :  string
}
interface carts {
  id : number
  products : cartsProducts[]

}

interface CartsData {
  carts : carts[]
}

let CartsData : CartsData = {
   carts : [
    {
       id : 1,
       products : [
        {
           id : 59,
           title :  "Spring and summershoes" ,
           price : 20,
           quantity : 3,
           total : 60,
           discountPercentage : 8.71,
           discountedPrice : 55,
           thumbnail :  "https://i.dummyjson.com/data/products/59/thumbnail.jpg" 
        }
      ]
      }
        
    ]} 
//       "total": 2328,
//       "discountedTotal": 1941,
//       "userId": 97,
//       "totalProducts": 5,
//       "totalQuantity": 10
   
//     // 20 items
//   ],
//   "total": 20,
//   "skip": 0,
//   "limit": 20
// }


interface post {
       id : number,
       title : string ,
       body :  string ,
       userId : number,
       tags : string[],
       reactions : number
}
interface postData 
{
  posts:post[]
}

let postData : postData= {
   posts : [
    {
       id : 1,
       title :  "His mother had always taught him" ,
       body :  "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind." ,
       userId : 9,
       tags : [
           "history" ,
           "american" ,
           "crime"  
      ],
       reactions : 2
    }
    // 30 items
  ],
  }