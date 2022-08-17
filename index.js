const employee = {
    name : 'Sam',
    streetAddress : '11 Broadway',
} 
function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    return {...employee,
        name : 'Sam',
        streetAddress : '11 Broadway',
    };   
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, name, streetAddress){
    const newEmployee =  {...employee,
        name : 'Sam',
        streetAddress : '11 Broadway',
    };
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress){
    delete employee.name;
    return employee;
}