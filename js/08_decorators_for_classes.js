"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ex_08_decorators_for_classes() {
    /*if you attach a decorator to a class it will only get one argument and that argument is the constructor*/
    function logged(constructorFn) {
        console.log("logged decorator = " + constructorFn + " \n\n");
    }
    /*---You attach the decorator to the class by using @---*/
    var Person = /** @class */ (function () {
        function Person() {
            console.log("HI!");
        }
        Person = __decorate([
            logged
        ], Person);
        return Person;
    }());
    /*Factory - you can pass arguments*/
    function logging(value) {
        return value ? logged : null;
    }
    /*---wont run logged inside logging if set to false---*/
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car = __decorate([
            logging(true)
        ], Car);
        return Car;
    }());
    /*More fancy functionality*/
    /*--- each object created or instantiated with a class with the printable decorator will automatically receive the print method (because it is added to the prototype)---*/
    function printable(constructorFn) {
        constructorFn.prototype.print = function () {
            console.log("this from printable decorator = " + this);
        };
    }
    /*---note you can add  mutliple decorators (here we have @logged and @printable) ---*/
    var Plant = /** @class */ (function () {
        function Plant() {
            this.name = "Green Plant";
        }
        Plant = __decorate([
            logged,
            printable
        ], Plant);
        return Plant;
    }());
    var plant = new Plant();
    //you have to cast this as type any otherwise typescript wont recognise this
    plant.print();
}
