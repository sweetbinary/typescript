"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ex_08_decorators_for_properties() {
    function editableForProperty(value) {
        return function (target, propName) {
            var newDescriptor = {
                writable: value
            };
            return newDescriptor;
        };
    }
    var Project = /** @class */ (function () {
        function Project(name) {
            this.projectName = name;
            console.log("Project '" + this.projectName + "' was instanced");
        }
        __decorate([
            editableForProperty(true)
        ], Project.prototype, "projectName", void 0);
        return Project;
    }());
    var project = new Project("Project Namz II");
    /*------*/
    project.projectName = "Edited PROJECT NAMZ";
    console.log(project.projectName);
}
