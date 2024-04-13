import inquirer from "inquirer";
let umar: number = 18

let answer = await inquirer.prompt(
    [
        {
            name: "ChoiceJob ",
            message: "please select your jobs",
            type: "list",
            choices: ["software developer" , "Marketing Manager", "Accountant", "Teacher", "Project Manager","Chef", "Customer Service", "Registered Nurse" ],

        },
        {
            name: "age",
            message: "How old are you ",
            type: "number",
        } 
    ]
)
if (answer.ChoiceJob === umar) {
    console.log(umar); 

}
else {
    console.log("pleace send your CV? => 03187634801"); 
}
