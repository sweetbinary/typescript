function ex_03_classes_private_contrsuctors_and_singletons() {
/*Private constructors can be used to create singletons

Singletons are classes which only have one instance during runtime */

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name:string) {}

    static getInstance() {
        //create a new OnlyOne once and only once
        if (!OnlyOne.instance){            
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

/*---this wont work since instance is private---*/
//let onlyOne = new OnlyOne('The Only one');

/*---this one works---*/
let onlyOne = OnlyOne.getInstance();

console.log(`onlyOne.name = ${onlyOne.name}`);

/*---this is not valid ts bacaus the name is set to readonly---*/
//onlyOne.name = "Piangus";



}