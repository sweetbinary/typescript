"use strict";
function ex_03_classes() {
    /*classes prepare blueprint for objects so you can later on create objects for a class to make sure the object has some properties or methods
    
    typescript classes are more advanced than es6 classes
    */
    /*
    private properties can only be accessed inside the object only (es6 has no difference between private and public)
    
    protected properties are accessible from any objects or classes which inherit from this class
    
    methods can also be set to private or protected
    */
    var Person = /** @class */ (function () {
        /*--you can still provide a constructor function--*/
        /*--note that adding public/private/protected on a property will create a property in the class--*/
        function Person(namez, username) {
            this.username = username;
            this.name = namez; //this.name refers to the propety of this class
            this.setAge(30);
        }
        //this is a method, set up the same way as functions without the function keyword
        Person.prototype.printAge = function () {
            console.log(this.name + " printAge method =  " + this.age);
        };
        Person.prototype.setType = function (typez) {
            this.type = typez;
            console.log(this.name + " setType method = " + this.type);
        };
        Person.prototype.setAge = function (agez) {
            this.age = agez;
            console.log(this.name + " private setAge method = " + this.age);
        };
        return Person;
    }());
    var person = new Person('Bob', 'bobster1990');
    console.log("const person contents:");
    console.table(person);
    console.log("const person name is: " + person.name);
    /*--this is not valid ts because it's private (will compile though) --*/
    //console.log(`const person type is: ${person.type}`);
    /*--this is not valid ts because it's protected  (will compile though)--*/
    //console.log(`const person age is: ${person.age}`);
    person.printAge();
    person.setType('Necromancer');
    /*--this is not valid ts because it's a private method (will compile though) -- --*/
    //person.setAge(999);
}
