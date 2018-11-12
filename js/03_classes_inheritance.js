"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function ex_03_classes_inheritance() {
    var Person = /** @class */ (function () {
        function Person(namez, username) {
            this.username = username;
            this.name = namez; //this.name refers to the propety of this class
        }
        Person.prototype.printAge = function () {
            console.log(this.name + " printAge method =  " + this.age);
        };
        return Person;
    }());
    /*Inheritance
    
    class Tsiaklis takes class Person and uses all of the code inside of it and whatever is specified inside class Tsiaklis gets either appended or overriden
    */
    var Tsiaklis = /** @class */ (function (_super) {
        __extends(Tsiaklis, _super);
        function Tsiaklis() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Tsiaklis";
            return _this;
        }
        return Tsiaklis;
    }(Person));
    /*--name won't change to Traoulos--*/
    var tsiaklis = new Tsiaklis("Traoulos", "tsiakilomixaniCY66");
    console.log("tsiaklis.name = " + tsiaklis.name);
    /*Inheritance and constructors
    
    when extending a class you always have to call super first which calls the constructor of your parent class
    */
    var Xlapatsas = /** @class */ (function (_super) {
        __extends(Xlapatsas, _super);
        function Xlapatsas(username) {
            var _this = _super.call(this, "Xlapatsas", username) || this;
            _this.age = 18; //how to change a protected variable
            return _this;
            /*---the line below is not valid ts since type is private and only accessible within class person and not by any child classes---*/
            //console.log(this.type); 
        }
        return Xlapatsas;
    }(Person));
    /*--no need to add name here because now the contstructor expects one argument --*/
    var xlapatsas = new Xlapatsas('tisElladosToPedi90');
    console.log("xlapatsas.name = " + xlapatsas.name);
    xlapatsas.printAge();
}
