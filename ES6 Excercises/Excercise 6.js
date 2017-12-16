let fName = "Kurt";
let lName = "Wonnegut";
let age = 98;

function CreatePerson(firstName, lastName, age){
    return {
        firstName, lastName, age
    };
}

var person = new CreatePerson(fName, lName, age);
console.log(person);