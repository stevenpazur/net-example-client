class Employee{
    constructor(name, id, email){
        this.name = 'Jeff';
        this.id = '12345';
        this.email = 'gmail.com';
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

var employee = new Employee('', '', '');

console.log(employee.name);
console.log(employee.getName());

class Intern extends Employee{
    constructor(){
        super();
        this.school = "UCF";
    }
}

var intern = new Intern('', '', '');

console.log(intern.name);
console.log(intern.getName());
console.log(intern.school);