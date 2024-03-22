#! /usr/bin/env node
import inquirer from "inquirer";

// CGN = Computer Generated Number
const CGN = Math.floor(Math.random() * 10 + 1);

// User Guessing Number
const userGuess = await inquirer.prompt([
    {
        'name': 'number',
        'type': 'number',
        'message': 'Guess the Number 1 - 10: '
    }
]);


(userGuess.number === CGN)? 
console.log(`Your guessing number is right! ${userGuess.number}`):
console.log(`Your guessing is wrong! right number is :${CGN}`);
