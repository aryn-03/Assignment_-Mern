/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter()
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);

//map()
const employeesWithNetSalary = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log("Employees with net salary:", employeesWithNetSalary);

//reduce()
const totalSalaryPayout = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);
console.log("Total salary payout:", totalSalaryPayout);

//find()
const employee30000 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", employee30000);

//findIndex()
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", nehaIndex);
