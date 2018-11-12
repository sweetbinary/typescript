"use strict";
function ex_09_using_jquery_with_typescript() {
    /*
jquery type declaration files, this will add them to package.jspn
    
npm install --save-dev @types/jquery*/
    /*---this should compile without errors now---*/
    $("#preContainer").append("!!!!!JQUERY CALL FROM WITHIN TS FILE!!!!!");
}
