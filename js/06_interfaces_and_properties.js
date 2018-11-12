"use strict";
function ex_06_interfaces_and_properties() {
    var person = {
        firstName: "Tsiaklis",
        age: 44
    };
    function greetWithInterface(person) {
        console.log("Interface Hail " + person.firstName);
    }
    function greetWithInterface2(person) {
        console.log("Hail " + person.firstName);
    }
    greetWithInterface2({ firstName: 'Pompos', age: 99 });
    var person3 = {
        firstName: "Tsiaklis",
        age: 44,
        hobbies: ['yodelling', 'hacking the information superhighway']
    };
    function listHobbies(person) {
        console.log("" + person.hobbies);
    }
    listHobbies(person3);
}
