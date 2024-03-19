#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

const answers = await inquirer.prompt([
    {
        message: 'Enter First Number: ',
        type: 'number',
        name: 'first_number'
    },
    {
        message: 'Enter Second Number',
        type: 'number',
        name: 'second_number'
    },
    {
        message: 'Select Operator',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiply', 'Division']
    }  
]);


if (answers.operator === 'Addition') {
    console.log(
        chalk.green('Sum: ') + 
        chalk.bold(answers.first_number + answers.second_number)
    )   
}
else if (answers.operator === 'Subtraction') {
    console.log(
        chalk.red('Difference: ') + 
        chalk.bold(answers.first_number - answers.second_number)
    )   
}
else if (answers.operator === 'Multiply') {
    console.log(
        chalk.cyan('Product: ') + 
        chalk.bold(answers.first_number * answers.second_number)
    )   
}
else if (answers.operator === 'Division') {
    console.log(
        chalk.magenta('Quotient: ') + 
        chalk.bold((answers.first_number / answers.second_number).toFixed(2))
    )   
}