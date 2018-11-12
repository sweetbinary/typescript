"use strict";
function ex_01_types() {
    /*string*/
    var myName = "Max";
    /*--the one below wont work because you are trying to assign an int ot a js--*/
    //myName = 22;
    /*--this works because its declared empty which gives it a type of any--*/
    var MyRealAge;
    MyRealAge = 27;
    MyRealAge = '22';
    /*--alternatively you can set a type--*/
    var MyRealAge2;
    MyRealAge2 = 27;
    /*--this wont work because we set a type--*/
    //MyRealAge2 = '22'; 
    /*array*/
    var hobbies = ["cooking", "sports", "bzorts"];
    console.log("hobbies[2] is " + hobbies[2]);
    /*to check what kind of variable a variable is, use this*/
    console.log("typeof hobbies is " + typeof hobbies);
    /*--this wont work because this is just an array of strings --*/
    //hobbies = [100] 
    /*--but if you declare an array as an array of anything then it should work--*/
    var hobbies2 = ["cooking", "sports"];
    hobbies2 = [100];
    /*tuples (wut), aka an array with multiple types*/
    var address = ["Pengus street", 99];
    /*enum, makes numbers more expressive*/
    var Color;
    (function (Color) {
        Color[Color["Gray"] = 0] = "Gray";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Red"] = 100] = "Red";
        Color[Color["Plong"] = 101] = "Plong"; //101, increment + 1
    })(Color || (Color = {}));
    var myColor = Color.Plong;
    console.log("myColor = " + myColor);
    /* functions */
    function returnMyName() {
        return myName;
    }
    console.log("returnMyName function returns: " + returnMyName());
    function sayHello() {
        console.log("hello hrpsef");
    }
    /*argument types*/
    function multiply(value1, value2) {
        return value1 * value2;
    }
    /*function types*/
    var myMultiply;
    myMultiply = sayHello;
    myMultiply();
    myMultiply = multiply;
    console.log("myMultiply2(5, 2) = " + myMultiply(5, 2));
    var myMultiply2; //names dont matter, only types and order
    myMultiply2 = multiply;
    console.log("myMultiply2(5, 3) = " + myMultiply2(5, 3));
    /*objects*/
    var userData = {
        name: "Xlopas",
        age: 12
    };
    var complex = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    var complex2 = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    console.log("complex2.data[1] = " + complex2.data[1]);
    /*union types*/
    var myRealRealAge = 27; //number or string and nothing else
    myRealRealAge = "27";
    //myRealRealAge = true; ERROR
    /*check types*/
    var finalValue = 44;
    if (typeof finalValue == 'string') {
        console.log("finalValue is a string");
    }
    else {
        console.log("finalValue is NOT a string");
    }
    /*never - this function never finishes (?)*/
    function neverReturns() {
        throw new Error('An error');
    }
    /*
    nullable types
    
    you shouldnt be able to assign null to non nullable types
    you can enable/disable this by going to the tsconfig.json and changing  "strictNullChecks"
    */
    var canBeNull = 12;
    //canBeNull = null; // wont work because number cannot be null
    var canAlsoBeNull; //undefined
    canAlsoBeNull = null; //this will work
    var canThisBeAny = null;
    //canThisBeAny = 12; //this wont work because null is now its own type
}
