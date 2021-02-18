function getName(name: string): string {
  // param string, return string
  return name;
}

function NoReturn(): void {
  console.log("okeeee");
  // return 'a' error if return, bcs void cant return
}

NoReturn();
console.log(getName("prio"));

// function as type
type Add = (val3: number, val2: number) => number;

const AddNumber: Add = (val1, val2): number => {
  return val1 + val2;
};

console.log(AddNumber(1, 2));
// console.log(AddNumber(1, "2")) error because string no allowed

// default parameter
const greeting = (firstName: string, lastName: string = "gunawan"): string => {
  return firstName + " " + lastName;
};
console.log(greeting("Prio Arief", "Dybala"));


// optional parameter
const getMaritalStatus = (name:string, wifeName?:string) :string => {
    return name + ' ' + wifeName
}

console.log(getMaritalStatus('Alifki'))
