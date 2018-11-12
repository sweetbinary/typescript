"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ex_08_decorators_for_parameters() {
    function aParameterDecorator(target, method, paramIndex) {
        console.log("target:");
        //targer is constructor or property
        console.table(target);
        console.log("method: " + method);
        //paramIndex is the index of the parameter in checkBoolean
        console.log("paramIndex: " + paramIndex);
    }
    var aClass = /** @class */ (function () {
        function aClass() {
        }
        //decorator @aParameterDecorator is attached to aBoolean
        aClass.prototype.checkBoolean = function (aBoolean) {
            if (aBoolean) {
                console.log("aBoolean is true (proof: " + aBoolean + ")");
            }
            else {
                console.log("aBoolean is false (proof: " + aBoolean + ")");
            }
        };
        __decorate([
            __param(0, aParameterDecorator)
        ], aClass.prototype, "checkBoolean", null);
        return aClass;
    }());
    var course = new aClass();
    course.checkBoolean(true);
    course.checkBoolean(false);
}
