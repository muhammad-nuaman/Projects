#! /usr/bin/env node 

// Import Package
import inquirer from "inquirer";
import chalk from 'chalk';

// Define Currency Rates
const currencyRates: any = {
    USD: 1.0, // Base currency
    INR: 83.29,
    AED: 3.67,
    EUR: 0.92,
    PKR: 278.00
}

//  Prompting:  Exchange (From - To)
let exchange = await inquirer.prompt([
    {
        name: 'from',
        type: "list",
        message: 'Exchange From: ',
        choices: ['USD', 'INR', 'AED', 'EUR', 'PKR']
    },
    {
        name: 'to',
        type: "list",
        message: 'Exchange To:   ',
        choices: ['USD', 'INR', 'AED', 'EUR', 'PKR']
    },
]);


(async function currencyAmount() {
    // Prompting: Currency Amount
   let currency = await inquirer.prompt({
        name: 'amount',
        type: "number",
        message: 'Enter Amount:  ',
    })
    // Currency Amount Checking
    if (
        isNaN(currency.amount) ||
        currency.amount.toString().includes('-') ||
        currency.amount === 0
    ) {currencyAmount()}
    else {
        // Currency Exchanged
        let from  = currencyRates[exchange.from]
        let to  = currencyRates[exchange.to]
        let amount = currency.amount;
        let exchanged = (amount / from) * to;
        
        // Print
        console.log(`${chalk.bold.yellow(exchange.from)}:  ${chalk.bold(from)}`);
        console.log(`${chalk.bold.yellow(exchange.to)}:  ${chalk.bold(to)}`);
        console.log(`${chalk.greenBright('Current Amount:')}   ${chalk.bold(amount)}`);
        console.log(`${chalk.cyanBright('Exchange Amount:')}  ${chalk.bold(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
    }    
})()



