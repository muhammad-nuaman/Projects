import inquirer from 'inquirer';
import chalk from 'chalk';

const answer = await inquirer.prompt([
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


if (answer.operator === 'Addition') {
    console.log(
        chalk.green('Sum: ') + 
        chalk.bold(answer.first_number + answer.second_number)
    )   
}
else if (answer.operator === 'Subtraction') {
    console.log(
        chalk.red('Difference: ') + 
        chalk.bold(answer.first_number - answer.second_number)
    )   
}
else if (answer.operator === 'Multiply') {
    console.log(
        chalk.cyan('Product: ') + 
        chalk.bold(answer.first_number * answer.second_number)
    )   
}
else if (answer.operator === 'Division') {
    console.log(
        chalk.magenta('Quotient: ') + 
        chalk.bold((answer.first_number / answer.second_number).toFixed(2))
    )   
}