/// <reference path="04_namespaces_external_file_imported.ts" />

/*
namespaces organise applications with js objects and can be split in mutliple files without the use of a module loader.
*/

/*---PI exists only within namespace---*/
/*---export signifies elements we can use outside the namespace---*/
namespace myMath {
    const PI = 3.14;
    export function calculateCircumference(diameter: number) {
        return diameter * PI;
    } 
    export function calculateRectangle(width: number, length: number) {
     return width * length;
    }
}

/*

*/

function ex_04_namespaces() {

    console.log(`from namespace myMath: ${myMath.calculateCircumference(10)}`);
    console.log(`from namespace myMath: ${myMath.calculateRectangle(10,20)}`);
    
/*
the typescript compiler allows us to bundle all our files into one single file

on the console type

tsc --outFile 04_namespaces_combined_example.js 04_namespaces.ts 04_namespaces_external_file_1.ts 04_namespaces_external_file_2.ts

files are compiled in order
*/

    console.log(`from external file - ${myMath2.calculateSquare(7)}`);
    console.log(`from external file - ${myMath2.calculateCube(15,10,5)}`);

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

/*NAMESPACES IMPORTS*/
/*you can just use the namespace import within the file itself
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