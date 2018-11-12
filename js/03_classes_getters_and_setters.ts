function ex_03_classes_getters_and_setters() {

class Plant {
    private private_species: string = 'Default value';
    /*---getter---*/
    get species() {
        return this.private_species;
    }
    /*---setter---*/
    set species(value: string) {
        if (value.length > 3) {
            this.private_species = value;
        }
        else {
            this.private_species = "Placeholder value"
        }
    }
}

let plant = new Plant();
console.log(`plant.species default = ${plant.species}`);

plant.species = "AB";
console.log(`plant.species if set below 3 characters = ${plant.species}`);

plant.species = "Tsoukni8a";
console.log(`plant.species if set above or equal 3 characters = ${plant.species}`);

/*note that you can only have a getter and not a setter to create read only values */

}