const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');



const teamMem =[];


function manager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the team managers office number?'
        }
        
    ]).then((ans) =>{
        const myMgr = new Manager(ans.name,ans.id,ans.email,ans.office);
        teamMem.push(myMgr);
        
        menu();
    })
}


function menu(){
    
        inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ["Add Engineer", "Add Intern","Finish bulding my team"],
        },
    ]).then((ans) => {
        switch (ans.menu) {
            case 'Add Engineer': engineer();
                
                break;

            case 'Add Intern': intern();
                
                break;
        
        
            default:
                finish();
                break;
            }
            
        })
    }


function engineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineers GitHub username?',
            }
            
        ]).then((ans) =>{ 
            const myEng = new Engineer(ans.name,ans.id,ans.email,ans.github);
            teamMem.push(myEng);
            
            menu();
            
        })
    }


function intern(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Inters name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Inters id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Inters email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school is this Intern coming from?',
            }
            
        ]).then((ans) =>{
            const myInt = new Intern(ans.name,ans.id,ans.email,ans.school);
            teamMem.push(myInt);
            
            menu();
            
            
        })
    }
    
    function finish(){
       
        
    fs.writeFile("index.html", generateHtml(teamMem), (err) =>
    err ? console.log(err) : console.log("Success! Your team has been built!")
  );

        
       
    }


    
    manager();
    

