#! /usr/bin/env node

// Import Module
import inquirer from "inquirer";

// Define Title
const title: string = '\nＣａｌｃｕｌａｔｏｒ\n';
// Print Title
console.log(title);

// Define Variables
let first: {[key: string]: number};
let second: {[key: string]: number};
let arithmetic: {[key: string]: string};
let result: unknown;

// Get First Number 
do {
    first = await inquirer.prompt({
        name: 'number',
        type: 'number',
        message: 'ғɪʀsᴛ ɴᴜᴍʙᴇʀ     '
    });
}while(isNaN(first.number) || first.number === 0);

// Get Second Number 
do {
    second = await inquirer.prompt({
        name: 'number',
        type: 'number',
        message: 'sᴇᴄᴏɴᴅ ɴᴜᴍʙᴇʀ    '
    });
}while(isNaN(second.number) || second.number === 0);

// Get Operator
arithmetic = await inquirer.prompt({
    name: 'operator',
    type: "list",
    message: 'sᴇʟᴇᴄᴛ ᴏᴘᴇʀᴀᴛᴏʀ ',
    choices: ['【+】', '【-】', '【x】', '【÷】']
})

// Check Select Operator
switch(arithmetic.operator) {
    case '【+】':        
        result = first.number + second.number; break; 
    case '【-】':        
        result = first.number - second.number; break; 
    case '【x】':        
        result = first.number * second.number; break; 
    case '【÷】':        
        (first.number / second.number).toString().includes('.') ?
        result = (first.number / second.number).toFixed(2) :
        result = (first.number / second.number);
}

// Print Result
console.log(`\nＲｅｓｕｌｔ:       ${first.number} ${arithmetic.operator[1]} ${second.number} = ${result}\n`);
