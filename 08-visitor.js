/* 
Visitor pattern
The Visitor pattern allows you to add or define new functionality to an object without changing 
the code for that object. The new logic resides in a external object or function called the 
'visitor'.

Visitors are useful when you are trying to extend the functionality of a library or framework. 
If the object you want to extend provides some kind of 'accept' method that accepts a visitor 
object/function, you can grant the visitor object access to the receiving object's internal 
properties. The visitor can then modify the behavior of the receiving object. 
This pattern allows you to provide an easy way for clients to implement future extensions to 
that object.
*/

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    setSalary : function(salary) {
        this.salary = salary;
    },

    getSalary : function() {
        return this.salary;
    },
    accept: function(visitorMethod) {
        visitorMethod(this);
    }
}

/////////////////////////////////////////////////////////////////////

const codingking = new Employee("Coding King", 1000);
console.log(codingking.getSalary());

function hike(emp) {
    emp.setSalary(emp.getSalary() * 1.25);
}

codingking.accept(hike);
console.log(codingking.getSalary());