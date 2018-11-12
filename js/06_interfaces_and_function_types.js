"use strict";
function ex_06_interfaces_and_function_types() {
    /* whatever uses this interface must be a function of this type */
    var myDoubleFunction;
    myDoubleFunction = function (value1, value2) {
        return value1 + " + " + value2 + " times 2 = " + (value1 + value2) * 2;
    };
    console.log(myDoubleFunction(5, 10));
}
