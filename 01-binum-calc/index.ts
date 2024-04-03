#! /usr/bin/env node

//==================================================================
// Import Modules
//==================================================================
import inquirer from 'inquirer';
import chalk from 'chalk';

//==================================================================
// Calculator Function
//==================================================================
function calculator () {
    // Heading
    console.log(chalk.bold.underline('Binum Calculator'));   
    //==================================================================
    // First Valuation
    //==================================================================
    (async function firstValuation () {
        // prompt 
        const first = await inquirer.prompt([
            {message: 'First Number: ', type: 'number', name: 'value'}
        ]);
        // condition
        if (first.value || first.value === 0) {secondValuation(first.value);
        }
        else {firstValuation()}
    })()
    //=============================================================
    // Second Valuation
    //=============================================================
    async function secondValuation(firstValue: number) {
        // prompt 
        const second = await inquirer.prompt([
            {message: 'Second Number: ', type: 'number', name: 'value'}
        ]);
        
        // condition
        if (second.value || second.value === 0) {selection(firstValue, second.value);
        }
        else secondValuation(firstValue);
    }
    //=============================================================
    // selection
    //=============================================================
    async function selection(firstValue: number, secondValue: number) {
        const operators = await inquirer.prompt([
            {
                message: 'Select Operator',
                type: 'list',
                name: 'option',
                choices: [
                    'Addition',
                     'Subtraction', 
                     'Multiplication', 
                     'Division',
                     'Modulus',
                     'Power'
                    ]
            }
        ]);

        calculation(firstValue, secondValue, operators.option);
    }
    //=============================================================
    // calculation
    //=============================================================
    async function calculation(firstValue: number, secondValue: number, operator: string) {
        let result: number = 0;
        // Addition
        if (operator === 'Addition') {
            result = firstValue + secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} + ${chalk.bold(secondValue)} = ${chalk.green(result)}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} + ${chalk.bold(secondValue)} = ${chalk.red(result)}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} + ${chalk.bold(secondValue)} = ${chalk.cyan(result)}`);
            }
        }        
        // Subtraction
        if (operator === 'Subtraction') {
            result = firstValue - secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} - ${chalk.bold(secondValue)} = ${chalk.green(result)}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} - ${chalk.bold(secondValue)} = ${chalk.red(result)}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} - ${chalk.bold(secondValue)} = ${chalk.cyan(result)}`);
            }
        } 
        // Multiplication
        if (operator === 'Multiplication') {
            result = firstValue * secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} x ${chalk.bold(secondValue)} = ${chalk.green(result)}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} x ${chalk.bold(secondValue)} = ${chalk.red(result)}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} x ${chalk.bold(secondValue)} = ${chalk.cyan(result)}`);
            }
        }     
        // Division
        if (operator === 'Division') {
            result = firstValue / secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} / ${chalk.bold(secondValue)} = ${chalk.green(result.toFixed(2))}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} / ${chalk.bold(secondValue)} = ${chalk.red(result.toFixed(2))}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} / ${chalk.bold(secondValue)} = ${chalk.cyan(result.toFixed(2))}`);
            }
        }
        // Modulus
        if (operator === 'Modulus') {
            result = firstValue % secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} % ${chalk.bold(secondValue)} = ${chalk.green(result)}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} % ${chalk.bold(secondValue)} = ${chalk.red(result)}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} % ${chalk.bold(secondValue)} = ${chalk.cyan(result)}`);
            }
        }
        // Power
        if (operator === 'Power') {
            result = firstValue ** secondValue;
            if (result > 0) {
                console.log(`${chalk.bold(firstValue)} ** ${chalk.bold(secondValue)} = ${chalk.green(result)}`);
            }
            else if (result < 0) {
                console.log(`${chalk.bold(firstValue)} ** ${chalk.bold(secondValue)} = ${chalk.red(result)}`);
            }
            else {
                console.log(`${chalk.bold(firstValue)} ** ${chalk.bold(secondValue)} = ${chalk.cyan(result)}`);
            }
        }
    }               
}
    //=============================================================
    // End of calculation
    //=============================================================

calculator();
export default calculator;