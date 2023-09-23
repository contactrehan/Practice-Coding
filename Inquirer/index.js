import inquirer from "inquirer";
var user = await inquirer.prompt([
    {
        type: "input",
        name: "userName",
        message: "What is your username?",
        validate: (value) => {
            if (!value) {
                return "Please Enter Your userName.";
            }
            return true;
        },
    },
    {
        type: "checkbox",
        name: "colorChoice",
        message: "Select which platform share the same username:",
        choices: ["GitHub", "Twitter", "Linkedin", "Instagram"],
        default: ["Github"]
    },
]);
console.log(user);
