function ex_08_decorators_for_classes() {
/*if you attach a decorator to a class it will only get one argument and that argument is the constructor*/

    function logged(constructorFn: Function){
        console.log(`logged decorator = ${constructorFn} \n\n`);
    }

    /*---You attach the decorator to the class by using @---*/
    @logged
    class Person {
        constructor() {
            console.log("HI!");
        }
    }

    /*Factory - you can pass arguments*/

    function logging(value: boolean):any {
        return value ? logged : null;
    }

    /*---wont run logged inside logging if set to false---*/
    @logging(true)
    class Car {
    }

    /*More fancy functionality*/

    /*--- each object created or instantiated with a class with the printable decorator will automatically receive the print method (because it is added to the prototype)---*/
    
    function printable(constructorFn: Function){
        constructorFn.prototype.print = function () {
            console.log(`this from printable decorator = ${this}`);
        }
    }

    /*---note you can add  mutliple decorators (here we have @logged and @printable) ---*/
    @logged
    @printable
    class Plant {
        name = "Green Plant"
    }

    const plant = new Plant();
    //you have to cast this as type any otherwise typescript wont recognise this
    (<any>plant).print();



}