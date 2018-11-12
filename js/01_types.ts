function ex_01_types() {

/*string*/
let myName = "Max";
/*--the one below wont work because you are trying to assign an int ot a js--*/
//myName = 22;

/*--this works because its declared empty which gives it a type of any--*/
let MyRealAge;
MyRealAge = 27;
MyRealAge = '22';

/*--alternatively you can set a type--*/
let MyRealAge2: number;
MyRealAge2 = 27;

/*--this wont work because we set a type--*/
//MyRealAge2 = '22'; 


/*array*/
let hobbies = ["cooking", "sports", "bzorts"];
console.log(`hobbies[2] is ${hobbies[2]}`);

/*to check what kind of variable a variable is, use this*/
console.log(`typeof hobbies is ${typeof hobbies}`);
/*--this wont work because this is just an array of strings --*/
//hobbies = [100] 
/*--but if you declare an array as an array of anything then it should work--*/
let hobbies2: any[] = ["cooking", "sports"];
hobbies2 = [100];


/*tuples (wut), aka an array with multiple types*/
let address: [string, number] = ["Pengus street",99];

/*enum, makes numbers more expressive*/
enum Color {
    Gray, //by default 0
    Green, //by default 1, increment + 1
    Blue, //by default 2, increment + 1
    Red = 100, //100
    Plong //101, increment + 1
}

let myColor: Color = Color.Plong;
console.log(`myColor = ${myColor}`);

/* functions */
function returnMyName(): string { //type refers to return value and not paramateres (string)
    return myName;
}

console.log(`returnMyName function returns: ${returnMyName()}`);

function sayHello(): void { //void if you want to not return anything
    console.log("hello hrpsef");
}


/*argument types*/
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

/*function types*/
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(`myMultiply2(5, 2) = ${myMultiply(5, 2)}`);

let myMultiply2: (a: number, b: number) => number;//names dont matter, only types and order
myMultiply2 = multiply;
console.log(`myMultiply2(5, 3) = ${myMultiply2(5, 3)}`);

/*objects*/
let userData: { name: string, age: number } = {
    name: "Xlopas",
    age: 12
};

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

/*type alias*/
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

console.log(`complex2.data[1] = ${complex2.data[1]}`);

/*union types*/
let myRealRealAge: number | string = 27;//number or string and nothing else
myRealRealAge = "27";
//myRealRealAge = true; ERROR

/*check types*/
let finalValue = 44;
if (typeof finalValue == 'string') {
    console.log("finalValue is a string")
}
else {
    console.log("finalValue is NOT a string")
}

/*never - this function never finishes (?)*/
function neverReturns():never {
    throw new Error('An error');
}

/*
nullable types 

you shouldnt be able to assign null to non nullable types
you can enable/disable this by going to the tsconfig.json and changing  "strictNullChecks"
*/
let canBeNull = 12;
//canBeNull = null; // wont work because number cannot be null
let canAlsoBeNull; //undefined
canAlsoBeNull = null; //this will work
let canThisBeAny = null;
//canThisBeAny = 12; //this wont work because null is now its own type

}