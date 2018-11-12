/*
 unlike namespaces, modules can have their own scope in their own files. A module loader is required, but with modules we explicit dependency declaration, so we know which file has which dependencies.

 NOTE I HAD TO CHANGE module to system in tsconfig for this to work, need to get back on this and sort it
*/

/*we want to import two files

05_modules_math/circle.ts
05_modules_math/rectangle.ts    */

import { PI, calculateCircumference } from "./05_modules_math/circle";
//you can also import everything and assign it an alias
import * as Circle from "./05_modules_math/circle";
//rectangle.ts has only one function, and that function has a default keyword which gives it a default import whenever you try and import the file, so the name can be to whatever you want (here it's calc)
import calc from "./05_modules_math/rectangle";

/*---note that typecript will look in node_modules if the import path is absolute ---*/

/*you need to add export to all variables and functions which need to be accessed outside the file*/

/*---source of ./05_modules_math/circle---*/
/*
export const PI = 3.14;
export function calculateCircumference(diameter: number) {
    return diameter * PI;
}
*/

/*native javascript does not support importing javascript files into javascript files, at least not with es6 so you need to mess around with your tsconfig.ts */

/*
OR we get a module loader. Such as systemjs which loads all kinds of module formats.

npm install --save systemjs@0.21.5 
*/

/*
function ex_05_modules() {
    console.log(Circle.PI);
}*/


console.log(`(from 05_modules_math/circle.ts) PI = ${PI}`);

console.log(`(from 05_modules_math/circle.ts) Circle.PI = ${Circle.PI}`);

console.log(`(from 05_modules_math/rectangle.ts) calc(10, 12) = ${calc(10, 12)}`);

/*
Module resolution
*/