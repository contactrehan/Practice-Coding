// Function Overloading

// Signatures
function sum(a:number , b:number):number
function sum(a:string, b:string):string
function sum(a:boolean, b:boolean):boolean

//usage
function sum (a:any,b:any):any
{
    return a+b
}
sum(4,6)
sum("Ali","Rehan")
sum(false,true)