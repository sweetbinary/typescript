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
function ex_03_abstract_classes() {
    /* Abstract classes are marked with the abstract keyword. They cannot be instanciated directly. You have to always inherit from them
    
    You can also have abstract methods
    */
    var Project = /** @class */ (function () {
        function Project() {
            this.projectName = 'Default';
            this.budget = 1;
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = /** @class */ (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    newProject.calcBudget();
    newProject.changeName('Skynet 3.1');
    console.table(newProject);
    console.log(newProject.calcBudget());
}
