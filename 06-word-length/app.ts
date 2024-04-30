#! /usr/bin/env node

// Import Modules
import inquirer from 'inquirer';
import chalk from 'chalk'

// Define Title
console.clear();
const title = `\n
█░░░█ █▀▀█ █▀▀█ █▀▀▄   █░░ █▀▀ █▀▀▄ █▀▀▀ ▀▀█▀▀ █░░█
█▄█▄█ █░░█ █▄▄▀ █░░█   █░░ █▀▀ █░░█ █░▀█ ░░█░░ █▀▀█
░▀░▀░ ▀▀▀▀ ▀░▀▀ ▀▀▀░   ▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀▀ ░░▀░░ ▀░░▀
\n`;
console.log(chalk.bold.blueBright(title));

// Prompting: For Get Sentence To User
const input: {sentence: string} = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'Sentence: '
}); 


// Get Sentence Into Prompting
let sentence: string = input.sentence.trim().split(' ').filter(word => word).join(' ');
// Get Words Lengths Into Prompting
let wordsLength: number = input.sentence.trim().split(' ').filter(word => word).length;


// Dashboard
let message: string;
console.clear();
if (wordsLength) {
    console.log(`\n${chalk.bold.green(`Ｙｏｕｒ Ｓｅｎｔｅｎｃｅ`)}\n`);
    console.log(sentence);
    (wordsLength > 1) ?
    message = `\nW͏o͏r͏d͏s͏ L͏e͏n͏g͏t͏h͏: ${chalk.bold.black(wordsLength)}\n`:
    message = `\nW͏o͏r͏d͏ L͏e͏n͏g͏t͏h͏:  ${chalk.bold.black(wordsLength)}\n`
}
else {message = `You haven't typed any word!`}

console.log(chalk.bold.cyan(message));





