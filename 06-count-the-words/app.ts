#! /usr/bin/env node

// Import Modules
import inquirer from "inquirer";
import chalk from "chalk";

// Define Title
console.clear();
const title = `\nＷｏｒｄ　Ｌｅｎｇｔｈ\n`;
console.log(chalk.bold.blueBright(title));

// Prompting: For Get Sentence To User
const input: {sentence: string} = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'Type Your Sentence!\n'
}); 


// Get Sentence Into Prompting
let sentence: string = input.sentence.trim().split(' ').filter(word => word).join(' ');
// Get Words Lengths Into Prompting
let words: number = input.sentence.trim().split(' ').filter(word => word).length;


// Dashboard
let message: string;
console.clear();
console.log(`\n${chalk.bold.green('Ｙｏｕｒ　Ｓｅｎｔｅｎｃｅ')}\n`);
console.log(sentence);
if (words) {
    (words > 1) ?
    message = `\n𝗪𝗼𝗿𝗱 𝗟𝗲𝗻𝗴𝘁𝗵: ${chalk.bold.black(words)}`:
    message = `\n𝗪𝗼𝗿𝗱 𝗟𝗲𝗻𝗴𝘁𝗵: ${chalk.bold.black(words)}`
}
else {message = `You're Not Type any Word!`}

console.log(chalk.cyan(message));





