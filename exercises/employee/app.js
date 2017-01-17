var employees = [];


function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = (status || "Full Time");
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", " + "Job Title: " + this.title + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
    };
}

var ben = new Employee("Ben Blaster", "Shoemaker", "$25,000/yr");
var leroy = new Employee("Leroy Jenkins", "Troublemaker", "$55,000/yr");
var guybrush = new Employee("Guybrush Threepwood", "Pirate", "$75,000/yr", "Consultant");

ben.printEmployeeForm();
leroy.printEmployeeForm();
guybrush.printEmployeeForm();