"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let umar = 18;
let answer = await inquirer_1.default.prompt([
    {
        name: "ChoiceJob ",
        message: "please select your jobs",
        type: "list",
        choices: ["software developer", "Marketing Manager", "Accountant", "Teacher", "Project Manager", "Chef", "Customer Service", "Registered Nurse"],
    },
    {
        name: "age",
        message: "How old are you ",
        type: "number",
    }
]);
if (answer.ChoiceJob === umar) {
    console.log(umar);
}
else {
    console.log("pleace send your CV? => 03187634801");
}
