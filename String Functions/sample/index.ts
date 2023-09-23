// //  message = "My name is Rehan, I live in Faisalabad."  //i wanna remove everything before Rehan


// function removeBeforeRehan(message4:string)
// {
//    let rehanIndex = message4.indexOf("Rehan")
//    let rehanMessage = message4.substring(rehanIndex)

//    console.log(rehanMessage)
// }
// removeBeforeRehan("My name is Rehan, I live in Faisalabad.")
// const myyString : String ="Hello World";
// // console.log(myyString.split(""));   //returns an array of characters in the string
// // console.log(myyString.split(" "));   //returns an array of words in the string as itll remove the spaces
// let splittedArray=myyString.split("");
// console.log(splittedArray);

// console.log(splittedArray.join(''));
 



// let array = "my name is Rehan."
// let titleCased = array.toLowerCase().split(" ")
// let titled = titleCased.map((elem)=>
// { return (elem[0].toUpperCase() + elem.slice(1))})
// console.log(titled.join(" "));
// let myName = "My name is ultimo."
// let titledName = myName.toLowerCase().split(" ")
// let titled = titledName.map((str)=>{return str[0].toUpperCase()+str.slice(1)})
// console.log(titled.join(" ")
// )


// i wanna create a array and print only first character of each element written in each word


let array = ['hello','world','programming']
var array1stWord = array.map((str)=>{return str[0]})
console.log(array1stWord.join(''))