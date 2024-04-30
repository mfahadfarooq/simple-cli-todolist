#! /usr/bin/env node
import inquirer from "inquirer";


let todos = [];
let condition = true;

while(condition)
    {

        let addTask = await inquirer.prompt(
            [
                {
                    name:'todo',
                    type:'input',
                    message:'What you want to add in your Todos?'
                }
                
            ]
        );
        todos.push(addTask.todo);
        console.log(todos);

        let addCondTask = await inquirer.prompt(
            [
                {
                    name:'addMore',
                    type:'confirm',
                    message:'Do you want to add more?',
                    default:'false',
                }
            ]
        );
        condition =addCondTask.addMore
    }