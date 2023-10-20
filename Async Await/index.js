import inquirer from "inquirer";
console.log(`First`);
async function uploadUser() {
    inquirer.prompt([{
            type: "number",
            name: "num1",
            message: `Enter a number`
        }]);
    console.log(`Second`);
    uploadUser();
    console.log(`Third`);
}
