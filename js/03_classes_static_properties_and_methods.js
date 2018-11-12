"use strict";
function ex_03_classes_static_properties_and_methods() {
    /* static variables can always be used even when classes are not instantiated */
    var Helpers = /** @class */ (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.14;
        return Helpers;
    }());
    /*---both of these are valid ---*/
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(2));
}
