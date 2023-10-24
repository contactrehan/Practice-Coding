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
 function printSomething():void{
  // console.log(`print`);
 

  
}
const result = printSomething()
// console.log(result, typeof(result));

// => any
let anyVar: any = "anything";
anyVar = 45;
anyVar = false;

// => Unknown
let unknownVar: unknown = "string";
unknownVar = 47;
unknownVar = true;

// => Never
function error(message?: string): never {
  throw new Error("Error");
}

// => object
const obj: { name: string; phone: number } = {
  name: "Ultimo",
  phone: 839,
};

// => Tuple
var Arr3: [string, number, boolean] = ["Ultimo", 63, true];



// Union

let object :{
    name: string,
    message :string | number
} = {
name :"Ultimo",
message:69 
}



// Enum
enum colours {"red","green","blue"}
enum weekDays {"monday","tuesday",}

// console.log(colours);


