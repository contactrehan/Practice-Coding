//length function
var Name:string = "Rehan"
console.log(Name.length)  

//include function
var message:string = "I own a gamezone" 
if (message.includes("gamezonse"))  // returns true if it contains that string else false
{
    console.log(message)
}
else{
    console.log('No GameZone')
}

// startsWith & endsWith  (these both are case-sensitive) condition
var output = "TypeScript is object oriented Language"
if (output.startsWith("Type")) //checks if the written argument matches with the  first string of the variable
{
    console.log(`${output}`)
}
else{
    console.log("error")
}

//ends with
if (output.endsWith("age")) //does the opposite of startsWith and checks at the end of the string
{
    console.log("true")
}
else {
    console.log("false");
    
}

// Search Function 
let string = "Type Script"
console.log(string.search("t")) // returns the postition/index of the character or word


//trim function
let str = "\t Ultimo"
console.log(str.trim())  // removes the spaces from left and right


// charat function
let str1 = "Rehan"
console.log(str1.charAt(1))  // returns the character at the given index


// split function
const myString : String ="Hello World";
console.log(myString.split(""));   //returns an array of characters in the string
console.log(myString.split(" "));   //returns an array of words in the string as itll remove the spaces


