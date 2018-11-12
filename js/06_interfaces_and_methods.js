"use strict";
function ex_06_interfaces_and_methods() {
    /* you can also add methods inside interfaces */
    var person4 = {
        firstName: "Tsiaklis",
        greet: function (lastName) {
            console.log("Holla, je m'apelle " + this.firstName + " " + lastName);
        }
    };
    person4.greet('Peterson');
}
