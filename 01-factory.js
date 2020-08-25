 /* 

 Factory design 
The factory pattern is a creational design pattern that uses factory methods to create objects 
— rather than by calling a constructor.

*/

function Developer(name) {
    this.name = name;
    this.type = "Developer";
    this.technologies = ["Javascript", "HTML", "CSS"];
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
    this.technologies = ["Load runner", "Test runner"];
}

function EmployeeFactory (emp) {
    switch (emp.type) {
        case 1: {
            return new Developer(emp.name);
            break;
        }
        case 2: {
            return new Tester(emp.name);
            break
        }
        default:
            return undefined;
    }
}

function hello() {
    console.log(`Hi, I this is ${this.name}, I am a ${this.type}, I am good in ${this.technologies}` );
}

const employees = [];
employees.push(EmployeeFactory({ "name": "Mike", "type": 1}));
employees.push(EmployeeFactory({ "name": "John", "type": 2}));
employees.push(EmployeeFactory({ "name": "John", "type": 0}));

employees.forEach ( emp => {
    hello.call(emp);
});

console.log(employees);