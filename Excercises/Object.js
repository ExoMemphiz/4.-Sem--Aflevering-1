var person = {
    name: 'Chris',
    birthday: 'June',
    hobby: 'Computer',
    email: 'cphmail@cph.dk'
}

function printKeys() {
    Object.keys(person).forEach((key) => {
        console.log(key, person[key]);
    })
}

printKeys();

console.log('Person has a name? ', person.hasOwnProperty('name'));