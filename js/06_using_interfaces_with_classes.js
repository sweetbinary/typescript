"use strict";
function ex_06_using_interfaces_with_classes() {
    function greetWithInterface(person) {
        console.log("Interface Hail " + person.firstName);
    }
    /*--- strictPropertyInitialization must be set to false for firstName and lastName to be strings ---*/
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greet = function (lastName) {
            console.log("Holla, je m'apelle " + this.firstName + " " + lastName);
        };
        ;
        return Person;
    }());
    var myPerson = new Person();
    myPerson.firstName = "Zero";
    greetWithInterface(myPerson);
    myPerson.greet('Cool');
}
