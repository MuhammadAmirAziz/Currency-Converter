#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n \t <=======Wellcome to My Crrrency Converter=======> \n\t"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 11.3,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green.bold("Select The Currency To Convert From:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow.bold("Select The Currency To Convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.blue.bold("Enter The Amount To Convert:")
    }
]);
let from_Amount = exchange_rate[user_answer.from_currency];
let to_Amount = exchange_rate[user_answer.to_currency];
let amount_rate = user_answer.amount;
let base_amount = amount_rate / from_Amount;
let Converted_amount = base_amount * to_Amount;
console.log(chalk.magenta.bold(`Converted Amount = ${Converted_amount}`));
console.log(chalk.yellow.bold(`\n \t <=======Thanks=======>`));
