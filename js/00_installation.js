"use strict";
function ex_00_installation() {
    /*//to install typescript:
    npm -g install typescript
    tsc --init //(this will create a tsconfig.json)
    
    //compile typescript
    tsc
    
    //watch for typescript file changes and compile if there's a change
    tsc -w
    */
    /*
    tsconfig.json
    
    {
        "compilerOptions": {
            ...
        }
    }
    
    the tsc command reads tsconfig.json and reads it to learn how it should behave.
    
    "exclude" excludes files and folders from compilation.
    {
        "compilerOptions": {
            ...
        }
        "exclude": {
            ...
        }
    }
    
    An alternative to "exclude" would be "files" where you can specify which files can be compiled
    {
        "compilerOptions": {
            ...
        }
        "files": {
            ...
        }
    }
        */
    /*
    //if your tsconfig is in a different directory
    tsc -p dir_name/tsconfig.json
    */
}
