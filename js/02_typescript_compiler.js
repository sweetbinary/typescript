"use strict";
function ex_02_typescript_compiler() {
    var stringo = "Stringo";
    var numbero = 2323;
    /*--the commented out code below will throw an error but still compile--*/
    //numbero = 'Bob'; 
    console.log(numbero);
    /*
    the tsconfig.ts file changes how the compiler behaves
    
    on the compilerOptions you can add */
    /*=="noEmitOnError: true" which will not compile ts into js if there is an error==*/
    /*=="sourceMap: true" creates .js.map where you can create breakpoints on the ts file itself which is useful for debugging==*/
    /*=="noImplicitAny: true" wont allow unassigned variables which by default would be default as any==*/
    /* for more info on tsconfig.ts see https://www.typescriptlang.org/docs/handbook/tsconfig-json.html */
}
