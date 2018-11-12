"use strict";
var myMath2;
(function (myMath2) {
    function testImport(str) {
        return ("import works! (" + str + ")");
    }
    myMath2.testImport = testImport;
    var subNamespace;
    (function (subNamespace) {
        function testsubNamespace(str) {
            return ("subNamespace works! (" + str + ")");
        }
        subNamespace.testsubNamespace = testsubNamespace;
    })(subNamespace = myMath2.subNamespace || (myMath2.subNamespace = {}));
})(myMath2 || (myMath2 = {}));
