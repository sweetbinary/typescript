"use strict";
function ex_03_classes_private_contrsuctors_and_singletons() {
    /*Private constructors can be used to create singletons
    
    Singletons are classes which only have one instance during runtime */
    var OnlyOne = /** @class */ (function () {
        function OnlyOne(name) {
            this.name = name;
        }
        OnlyOne.getInstance = function () {
            //create a new OnlyOne once and only once
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
    /*---this wont work since instance is private---*/
    //let onlyOne = new OnlyOne('The Only one');
    /*---this one works---*/
    var onlyOne = OnlyOne.getInstance();
    console.log("onlyOne.name = " + onlyOne.name);
    /*---this is not valid ts bacaus the name is set to readonly---*/
    //onlyOne.name = "Piangus";
}
