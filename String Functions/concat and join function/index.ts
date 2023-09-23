//learning concat and join function of array


//concat function
let a =['Rehan','Ali','Sajid'];
let b =['Sohail','Mushtaq'];
// let c = a.concat("Amjad")
let c = a.concat(b)
console.log("Values in Array:",c)  // concat is used to join elements in arrays and make a new array

// join functtion
let d = c.join(" ") // i can add whatever i want in between separators returns values in string
console.log("Values in String:",d)