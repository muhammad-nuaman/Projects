#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
async function game() {
    // CGN = Computer Generated Number
    const CGN = Math.floor(Math.random() * 10 + 1);
    (async function guessing() {
        // User Guessing Number
        const userGuess = await inquirer.prompt([
            {
                'name': 'number',
                'type': 'number',
                'message': `Guess the Number : [1-10]`
            }
        ]);
        if (userGuess.number < 1 ||
            userGuess.number > 10 ||
            isNaN(userGuess.number)) {
            guessing();
        }
        else {
            if (userGuess.number === CGN) {
                console.log(`${chalk.green('Congratulation')}! You've guessed it's right: ${chalk.green(userGuess.number)} `);
            }
            else {
                console.log(`Wrong Guessing: ${chalk.red(userGuess.number)}\nRight Number is: ${chalk.green(CGN)}`);
            }
        }
    })();
}
game();
export default game;
