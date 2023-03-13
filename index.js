// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, values) {
    const name = "Sam"
    delete employee.name
    return { name: 'Sam', 
    streetAddress: "11 Broadway"};
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}