const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('../src/generateHtml.js');
const Employee = require('../lib/Employee.js');
const Manager = require('./lib/Manager.js');

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
    }
    
]).then((ans) =>{
        const myMgr = new Manager(name,id,eamil,officNumber);
        teamMem.push(ans.myMgr);
        console.log(ans.myMgr)
        // instance of the manager
    //put it in the team array
})
}
// another function that handles menu
function menu(){
    
        inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            chioces: ["Add Engineer", "Add Intern","Finish bulding my team"],
        },
    ]).then((ans) => {
        //call the right function,engineer ect.
    })
}
function engineer(){
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
    }
    
]).then((ans) =>{
    // instance of the manager
    //put it in the team array
})
}
function intern(){
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
    }
    
]).then((ans) =>{
    const myInt = new Intern(name,id,email,school);
    teamMem.push(ans.myInt);
    // instance of the Intern
    //put it in the team array
})
}

function finish(){
    //fs write
    //console sucess or error
}