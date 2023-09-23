import inquirer from "inquirer"
 let output = await  inquirer.prompt([
    {   type:"input",
        name:"marks",
        message:"Enter Your Marks"
    }])
    
        if(output.marks>=90)
        {
         console.log(`Your Grade is A`);
         
        }
        else if(output.marks>=80 && output.marks<90)
        {
         console.log(`Your Grade is B`);
        }
        else if(output.marks>=70 && output.marks<80)
        {
        
         console.log(`Your Grade is C`);
        }
        else if(output.marks>=60 && output.marks<70)
        {
         console.log(`Your Grade is D`);
         
        }
        else if(output.marks<60)
        {
         console.log(`Your Grade is `);
         
        }
     
     
    