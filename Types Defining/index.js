"use strict";
//Types
// => Number
let num = 10;
// => String
let str = "Rehan";
// => Boolean
let cond = true;
// => null
let nullVar = null;
// => Undefined
let undefinedVar = undefined;
// => Void (we can store undefined value in void)
let isVoid = undefined;
// => any
let anyVar = "anything";
anyVar = 45;
anyVar = false;
// => Unknown
let unknownVar = "string";
unknownVar = 47;
unknownVar = true;
// => Never
function error(message) {
    throw new Error("Error");
}
// => object
const obj = {
    name: "Ultimo",
    phone: 839,
};
// => Tuple
var Arr3 = ["Ultimo", 63, true];
// Union
let object = {
    name: "Ultimo",
    message: 69
};
// Enum
var colours;
(function (colours) {
    colours[colours["red"] = 0] = "red";
    colours[colours["green"] = 1] = "green";
    colours[colours["blue"] = 2] = "blue";
})(colours || (colours = {}));
var weekDays;
(function (weekDays) {
    weekDays[weekDays["monday"] = 0] = "monday";
    weekDays[weekDays["tuesday"] = 1] = "tuesday";
})(weekDays || (weekDays = {}));
console.log(colours);
