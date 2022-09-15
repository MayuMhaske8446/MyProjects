let person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st street",
        city: "San Jose",
        state: "CA",
        country: "USA"
    }
}

let copiedPerson = JSON.parse(JSON.stringify(person));



console.log(copiedPerson);

copiedPerson.firstName = "Jane";

copiedPerson.address.street = "Amphitheater Parkway";
copiedPerson.address.city = "Mountain View";

console.log(person);