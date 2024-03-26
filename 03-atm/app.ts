#! /usr/bin/env node

// modules
import inquirer from "inquirer";
import chalk from "chalk";


let myBalance: number = 10000; // set amount
let myPinCode: number = 12345; // set pin code

// Get Pin Code
let pin = await inquirer.prompt({
    name: 'code',
    type: 'number',
    message: 'Enter Pin Code: '
});


// Correct Pin Code
if (pin.code === myPinCode) {
    console.log(chalk.bold('Pin Code: '), chalk.green('Correct!'));
    
    // Select Options = [check balance, withdraw]
    let select = await inquirer.prompt({
        message: 'Select Amount Option: ',
        type: 'list',
        name: 'option',
        choices: ['check balance', 'withdraw'],
    });
    
    // Option: Check Balance
    if (select.option === 'check balance') { 
        console.log(`${chalk.bold('Your Balance:')} ${chalk.green(myBalance.toLocaleString('en-in'))}`);
    }

    // Option: Withdraw
    else if (select.option === 'withdraw') {   
        let select = await inquirer.prompt({
            message: 'Select Withdraw Option: ',
            type: 'list',
            name: 'option',
            choices: ['write amount', 'fast amount']
        })

        // Write Amount
        if (select.option === 'write amount') { 

            (async function amount() {
                let withdraw = await inquirer.prompt({
                    message: `Write Amount ${chalk.blue('(1 - 10,000)')}: `,
                    type: 'number',
                    name: 'amount',
                })
                
                if (
                    withdraw.amount < 0 || 
                    withdraw.amount > 10000 || 
                    isNaN(withdraw.amount)
                    ) {amount()}
                   else {
                        // Decrease Balance
                        myBalance -= withdraw.amount
                        // Remaining Balance
                        console.log(
                            `${chalk.bold('Withdraw Amount: ')}` + 
                            `${chalk.red(withdraw.amount.toLocaleString('en-in'))}\n` + 
                            `${chalk.bold('Remaining Balance: ')}` + 
                            `${chalk.green(myBalance.toLocaleString('en-in') )}`
                        );        
                    }
                })()  
                
        }
    
        // Fast Amount
        else if (select.option === 'fast amount') { 
            let withdraw = await inquirer.prompt({
                message: 'Fast Amount: ',
                type: 'list',
                name: 'amount',
                choices: ['1000', '2000', '5000', '10000']
            })
            // Decrease Balance
            myBalance -= Number(withdraw.amount)
            // Remaining Balance
            console.log(
                `${chalk.bold('Remaining Balance: ')}` + 
                `${chalk.green(myBalance.toLocaleString('en-in') )}
            `);
        }
    }
    
}
// Incorrect Pin Code
else console.log(chalk.bold('Pin Code: '), chalk.red('Incorrect!'));

