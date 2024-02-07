// Write your solution in this file!
const employee = {
    name: "Kris",
    streetAddress: "Thomas St",
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee};
    delete copyEmployee[key];
return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;
}

