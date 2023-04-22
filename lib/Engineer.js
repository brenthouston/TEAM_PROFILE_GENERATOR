const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name,id,email,githubUserName){
        super(name,id,email);
        this.githubUserName=githubUserName;
    }
        
 }

// getGitHub(){

// }


// getRole(){

// }


module.exports = Engineer;