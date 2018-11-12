"use strict";
function ex_03_classes_getters_and_setters() {
    var Plant = /** @class */ (function () {
        function Plant() {
            this.private_species = 'Default value';
        }
        Object.defineProperty(Plant.prototype, "species", {
            /*---getter---*/
            get: function () {
                return this.private_species;
            },
            /*---setter---*/
            set: function (value) {
                if (value.length > 3) {
                    this.private_species = value;
                }
                else {
                    this.private_species = "Placeholder value";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log("plant.species default = " + plant.species);
    plant.species = "AB";
    console.log("plant.species if set below 3 characters = " + plant.species);
    plant.species = "Tsoukni8a";
    console.log("plant.species if set above or equal 3 characters = " + plant.species);
    /*note that you can only have a getter and not a setter to create read only values */
}
