function ex_03_classes_static_properties_and_methods() {

/* static variables can always be used even when classes are not instantiated */
class Helpers {

    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
    
}

/*---both of these are valid ---*/
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(2));

}