"use strict";
function getName(name) {
    // param string, return string
    return name;
}
function NoReturn() {
    console.log("okeeee");
    // return 'a' error if return, bcs void cant return
}
NoReturn();
console.log(getName("prio"));
const AddNumber = (val1, val2) => {
    return val1 + val2;
};
console.log(AddNumber(1, 2));
// console.log(AddNumber(1, "2")) error because string no allowed
// default parameter
const greeting = (firstName, lastName = "gunawan") => {
    return firstName + " " + lastName;
};
console.log(greeting("Prio Arief", "Dybala"));
// optional parameter
const getMaritalStatus = (name, wifeName) => {
    return name + ' ' + wifeName;
};
console.log(getMaritalStatus('Alifki'));
