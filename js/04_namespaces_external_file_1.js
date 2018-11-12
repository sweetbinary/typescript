"use strict";
var myMath2;
(function (myMath2) {
    function calculateSquare(side) {
        return side * side;
    }
    myMath2.calculateSquare = calculateSquare;
})(myMath2 || (myMath2 = {}));
