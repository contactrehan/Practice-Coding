import inquirer, { Answers, QuestionCollection } from "inquirer"

// let userInput = await inquirer.prompt([{
//     type: "input",
//     name: "name",
//     message: "what is Your Name?",
//     validate:(value)=>{
//         if(!value){
//             return "Please Enter Your name"
//         }
        
//             return true
        
//     }
    
// }])
// console.log(userInput);
let questions : QuestionCollection = {
    type: "number",
    name: "num1",
    message: "Enter Number 1",
    validate: (value)=>{
        if(isNaN(Number(value)) || value <0 ){
            return 'please enter a valid number'
            }else{
            return true
    }}
}
let answer : Promise<Answers> = inquirer.prompt(questions)
answer.then((answers)=>{console.log(answers);
}).catch((error)=>{console.log(error);
})


