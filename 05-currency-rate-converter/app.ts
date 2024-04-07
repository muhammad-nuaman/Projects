#! /usr/bin/env node

// Import Packages
import inquirer from "inquirer";
import chalk from "chalk";

// Print Converter
console.log('\nＣｕｒｒｅｎｃｙ Ｅｘｃｈａｎｇｅ\n');

// Define Currency Rates
const currencyRates: { [key: string]: number } = {
    USD: 1, // United States Dollar
    INR: 74.35, // Indian Rupee
    AED: 3.67, // United Arab Emirates Dirham
    EUR: 0.89, // Euro
    PKR: 283.91 // Pakistani Rupee
};

// Define Currencies
const currencies: string[] = Object.keys(currencyRates);

// Prompting: Exchange From
const from = await inquirer.prompt(
    {
        name: 'currency',
        type: 'list',
        message: 'Exchange From: ',
        choices: currencies
    }
);

// Removing From Exchange Currency 
currencies.splice(currencies.indexOf(from.currency), 1)

// Prompting: Exchange To
const to = await inquirer.prompt(
    {
        name: 'currency',
        type: 'list',
        message: 'Exchange To:   ',
        choices: currencies
    }
);

// Re-Prompting Function
(async function exchangeAmount() {
    const currency = await inquirer.prompt({
        name: 'amount',
        type: 'number',
        message: 'Enter Amount   '
    });
    if (
        isNaN(currency.amount)  ||
        currency.amount === 0   ||
        currency.amount.toString().startsWith('-')
        
    ) {exchangeAmount()}
    else {
        // Exchange Rates
        const fromCurrencyRate = currencyRates[from.currency];
        const toCurrencyRate = currencyRates[to.currency];
        const amount = currency.amount
        const exchanged = (amount / fromCurrencyRate) * toCurrencyRate;
        
        // Printing
        console.log();
        console.log(chalk.dim('Exchange Rates: Dollar Based'));
        console.log('=================================================');
        console.log(`Exchange From (${chalk.greenBright.bold(from.currency)})      ${chalk.bold(fromCurrencyRate)}`);
        console.log(`Exchange To   (${chalk.cyanBright.bold(to.currency)})      ${chalk.bold(toCurrencyRate)}`) ;
        console.log('=================================================');
        // From
        if (from.currency === 'USD') {
            console.log(`Current Amount           $${chalk.bold.greenBright(currency.amount)}`);
        }
        else if (from.currency === 'INR') {
            console.log(`Current Amount           ₹${chalk.bold.greenBright(currency.amount)}`);
        }
        else if (from.currency === 'AED') {
            console.log(`Current Amount        مہرد${chalk.bold.greenBright(currency.amount)}`);
        }
        else if (from.currency === 'EUR') {
            console.log(`Current Amount           €${chalk.bold.greenBright(currency.amount)}`);
        }
        else if (from.currency === 'PKR') {
            console.log(`Current Amount           Rs${chalk.bold.greenBright(currency.amount)}`);
        }
        // To
        if (to.currency === 'USD') {
            console.log(`Exchange Amount          $${chalk.bold.cyanBright(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
        }
        else if (to.currency === 'INR') {
            console.log(`Exchange Amount          ₹${chalk.bold.cyanBright(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
        }
        else if (to.currency === 'AED') {
            console.log(`Exchange Amount          مہرد${chalk.bold.cyanBright(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
        }
        else if (to.currency === 'EUR') {
            console.log(`Exchange Amount          €${chalk.bold.cyanBright(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
        }
        else if (to.currency === 'PKR') {
            console.log(`Exchange Amount          Rs${chalk.bold.cyanBright(Number(exchanged.toFixed(2)).toLocaleString('en-in'))}`);
        }
        console.log('=================================================');
        console.log();
    }    
})()
