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
/// <reference path="04_namespaces_external_file_imported.ts" />
/*
namespaces organise applications with js objects and can be split in mutliple files without the use of a module loader.
*/
/*---PI exists only within namespace---*/
/*---export signifies elements we can use outside the namespace---*/
var myMath;
(function (myMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    myMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    myMath.calculateRectangle = calculateRectangle;
})(myMath || (myMath = {}));
/*

*/
function ex_04_namespaces() {
    console.log("from namespace myMath: " + myMath.calculateCircumference(10));
    console.log("from namespace myMath: " + myMath.calculateRectangle(10, 20));
    /*
    the typescript compiler allows us to bundle all our files into one single file
    
    on the console type
    
    tsc --outFile 04_namespaces_combined_example.js 04_namespaces.ts 04_namespaces_external_file_1.ts 04_namespaces_external_file_2.ts
    
    files are compiled in order
    */
    console.log("from external file - " + myMath2.calculateSquare(7));
    console.log("from external file - " + myMath2.calculateCube(15, 10, 5));
    /*note that external files can have the same namespace name*/
    /*---04_namespaces_external_file.ts source---*/
    /*
    namespace myMath2 {
        export function calculateSquare(side: number) {
         return side * side;
        }
    }
    */
    /*---04_namespaces_external_file_2.ts source---*/
    /*
    namespace myMath2 {
        export function calculateCube(width: number, height: number, length:number) {
         return width * height * length;
        }
    }
    */
    /* or you can just use the namespace import within the file itself
    /// &lsaquo;reference path="04_namespaces_external_file_0.ts" /&rsaquo;
    
    note that the triple slash is required and the angle quotation needs to be replaced with the proper character
    */
    console.log(myMath2.testImport("Holla mundo!"));
    /*---you can also have namespaces inside namespaces like in imported file 04_namespaces_external_file_imported.ts---*/
    /*
    namespace myMath2 {
        export function testImport(str:string) {
            return (`import works! (${str})`);
        }
        export namespace subNamespace {
            export function testsubNamespace(str:string) {
                return (`subNamespace works! (${str})`);
            }
        }
    }
    */
    console.log(myMath2.subNamespace.testsubNamespace("Hallo Wereld!"));
    /*
    you can also set up an alias like so
    import Thingy = myMath2.subNamespace;
    console.log(Thingy.testsubNamespace("This is a comment so it wont show in the console"));
    */
}
var myMath2;
(function (myMath2) {
    function calculateSquare(side) {
        return side * side;
    }
    myMath2.calculateSquare = calculateSquare;
})(myMath2 || (myMath2 = {}));
var myMath2;
(function (myMath2) {
    function calculateCube(width, height, length) {
        return width * height * length;
    }
    myMath2.calculateCube = calculateCube;
})(myMath2 || (myMath2 = {}));
