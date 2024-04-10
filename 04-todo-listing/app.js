#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let repeatProgram = false;
let askAgain = false;
do {
    // Inquiry To Add Task
    do {
        const todo = await inquirer.prompt({
            name: 'task',
            type: 'input',
            message: 'Add Task: '
        });
        if (!todo.task.length)
            askAgain = true;
        else {
            todos.push(todo.task);
            askAgain = false;
        }
        ;
    } while (askAgain);
    // Inquiry To Reapeat Program
    const todo = await inquirer.prompt({
        name: 'Option',
        type: 'list',
        choices: ['More Task', 'Exit'],
    });
    if (todo.Option === 'More Task')
        repeatProgram = true;
    else if (todo.Option === 'Exit')
        repeatProgram = false;
} while (repeatProgram);
todos.forEach((task, index) => console.log(`${chalk.green(++index)} ${task}`));
