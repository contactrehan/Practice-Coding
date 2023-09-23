//Program which creates and array from user and displays it separately
import inquirer from "inquirer";
// let blankArray = []
// for (let i=0;i<blankArray.length;i++){
// let enteredNumber= await inquirer.prompt([{
//     type:"input",
//     message:"Enter a number to add into the Array:",
//     name:'number'}])

    
//   blankArray.push(enteredNumber.number)
    
    
    
// }console.log(blankArray);



// async function main() {
//   const blankArray = [];
//   let keepAdding = true;

//   while (keepAdding) {
//     const enteredNumber = await inquirer.prompt([
//       {
//         type: "input",
//         message: "Enter a number to add into the Array (or type 'stop' to finish):",
//         name: 'number'
//       }
//     ]);

//     if (enteredNumber.number.toLowerCase() === 'stop') {
//       keepAdding = false;
//     } else {
//       blankArray.push((enteredNumber.number));
//     }
//   }

//   console.log(blankArray);
// }

// main();
// import inquirer from 'inquirer';

// import inquirer from 'inquirer';

interface Task {
  task: string;
  completed: boolean;
}

const tasks: Task[] = [];

async function main() {
  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Add a task',
        'List tasks',
        'Mark task as completed',
        'Delete a task',
        'Quit',
      ],
    });

    if (action === 'Add a task') {
      const { task } = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter the task:',
      });
      tasks.push({ task, completed: false });
      console.log('Task added.');
    } else if (action === 'List tasks') {
      listTasks();
    } else if (action === 'Mark task as completed') {
      markTaskAsCompleted();
    } else if (action === 'Delete a task') {
      deleteTask();
    } else if (action === 'Quit') {
      break;
    }
  }
}

function listTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.task}`);
  });
}

function markTaskAsCompleted() {
  listTasks();
  inquirer
    .prompt({
      type: 'number',
      name: 'taskIndex',
      message: 'Enter the index of the task to mark as completed:',
    })
    .then((answers: { taskIndex: number }) => {
      const { taskIndex } = answers;
      if (taskIndex >= 1 && taskIndex <= tasks.length) {
        tasks[taskIndex - 1].completed = true;
        console.log('Task marked as completed.');
      } else {
        console.error('Invalid task index.');
      }
    });
}

function deleteTask() {
  listTasks();
  inquirer
    .prompt({
      type: 'number',
      name: 'taskIndex',
      message: 'Enter the index of the task to delete:',
    })
    .then((answers: { taskIndex: number }) => {
      const { taskIndex } = answers;
      if (taskIndex >= 1 && taskIndex <= tasks.length) {
        tasks.splice(taskIndex - 1, 1);
        console.log('Task deleted.');
      } else {
        console.error('Invalid task index.');
      }
    });
}

main();
