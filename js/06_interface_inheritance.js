"use strict";
function ex_06_interface_inheritance() {
    var oldPerson = {
        age: 27,
        firstName: 'Krauser',
        title: 'Dr',
        greet: function (lastName) {
            console.log("Hello " + this.title + " " + this.firstName + " " + lastName);
        }
    };
    oldPerson.greet('Splenger');
}
