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
let isVoid :void = undefined

// => any
let anyVar :any = "anything"
anyVar= 45
anyVar= false

// => Unknown
let unknownVar :unknown = 'string' 
unknownVar = 47
unknownVar = true

// => Never
function error(message?: string): never {
    throw new Error("Error");
    }

// => object
const obj:{name:string,phone:number}={
    name:"Ultimo",
    phone:839
}
