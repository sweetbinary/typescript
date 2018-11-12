function ex_03_classes_inheritance(){

class Person {
    name: string;    
    private type: string | undefined; 
    protected age: number | undefined;

    constructor(namez: string, public username:string){ 
        this.name = namez; //this.name refers to the propety of this class
    }

    printAge() {
        console.log(`${this.name} printAge method =  ${this.age}`);
    }    
}

/*Inheritance

class Tsiaklis takes class Person and uses all of the code inside of it and whatever is specified inside class Tsiaklis gets either appended or overriden
*/

class Tsiaklis extends Person {
    name = "Tsiaklis";
}

/*--name won't change to Traoulos--*/
const tsiaklis = new Tsiaklis("Traoulos","tsiakilomixaniCY66");
console.log(`tsiaklis.name = ${tsiaklis.name}`);

/*Inheritance and constructors

when extending a class you always have to call super first which calls the constructor of your parent class
*/

class Xlapatsas extends Person { 

    constructor(username: string) {
        super("Xlapatsas",username);        
        this.age = 18; //how to change a protected variable
        /*---the line below is not valid ts since type is private and only accessible within class person and not by any child classes---*/
        //console.log(this.type); 
    }

}

/*--no need to add name here because now the contstructor expects one argument --*/
const xlapatsas = new Xlapatsas('tisElladosToPedi90');
console.log(`xlapatsas.name = ${xlapatsas.name}`);
xlapatsas.printAge();


}
