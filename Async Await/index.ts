import inquirer from "inquirer"


console.log(`First`);
async function uploadUser() {
    await inquirer.prompt([{
        type:"number",
        name:"num1",
        message: `Enter a number1`,
        validate: (value)=>{
          if(isNaN(value)) {return 'Please enter a valid number'}
          else  {return true;}
        }

    }])
    // await inquirer.prompt([{
    //     type:"number",
    //     name:"num2",
    //     message: `Enter a number2`

    // }])
  console.log(`Second`);
  }
 uploadUser()
console.log(`Third`)
