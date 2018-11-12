"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ex_08_decorators_for_methods() {
    /*
Decorator editable will make method aMethod editable or not editable
Decorator editable's factory takes the following arguments
*/
    /*==target: any - varies if we have a static class/method or enstansiated==*/
    /*==propName: string - Name of the property==*/
    /*==descriptor: PropertyDescriptor - PropertyDescriptor is related to JS Onject.defineProperty which allows you to configure a property. Here we use writable where if we set it to false, it will set the value to read only==*/
    function editable(value) {
        return function (target, propName, descriptor) {
            descriptor.writable = value;
        };
    }
    var Project = /** @class */ (function () {
        function Project(name) {
            this.projectName = name;
            console.log("Project '" + this.projectName + "' was instanced");
        }
        Project.prototype.aMethod = function () {
            console.log(1000);
        };
        __decorate([
            editable(true)
        ], Project.prototype, "aMethod", null);
        return Project;
    }());
    var project = new Project("Projeck Namz");
    project.aMethod();
    /*---If decorator @editable is set to false this will throw an error because you shouldn't be able to override the function ---*/
    project.aMethod = function () {
        console.log(2000);
    };
    project.aMethod();
}
