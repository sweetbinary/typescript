"use strict";
function ex_06_interfaces() {
    /*Interfaces are new in js
    
    An interface is a contract signed by an object which says that a certain property function is available. So you can guarantee that certain properties or methods are available.
    */
    var person = {
        firstName: "Tsiaklis",
        age: 44
    };
    /*---this will return undefined---*/
    function greet(person) {
        console.log("Hail " + person.name);
    }
    /*---this will throw a runtime error when compiled---*/
    //function greet2(person: {name:string}){
    //    console.log(`Hail ${person.name}`)
    //}
    /*---this is will now work but if we create another function which takes person and we need to alter something inside person that would mean we need to change it in multiple places---*/
    function greet3(person) {
        console.log("Hail " + person.firstName);
    }
    greet(person);
    //greet2(person);
    greet3(person);
    function greetWithInterface(person) {
        console.log("Interface Hail " + person.firstName);
    }
    function changeNameWithInterface(person) {
        person.firstName = "Xiouroupas";
    }
    greetWithInterface(person);
    changeNameWithInterface(person);
    greetWithInterface(person);
    /*note that interfaces are not compiled in js, they are there to help you write better, less error prone code*/
}
