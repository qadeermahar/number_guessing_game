#! /usr/bin/env node 
import inquirer from "inquirer";
const number = Math.floor(Math.random() * 10 + 1);
let game = await inquirer.prompt([{
        name: "guess_number",
        type: "number",
        message: "guess a number "
    }]);
if (game.guess_number === number) {
    console.log('"congrates"you guess write number.');
}
else {
    console.log("invalid number");
}
