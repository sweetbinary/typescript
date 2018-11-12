function ex_06_using_interfaces_with_classes() {
    
    interface namedPerson5 {
        firstName: string;
        greet(lastName:string):void; 
    }

    function greetWithInterface(person: namedPerson5){
        console.log(`Interface Hail ${person.firstName}`)
    }

    /*--- strictPropertyInitialization must be set to false for firstName and lastName to be strings ---*/
    class Person implements namedPerson5 {
        firstName: any;
        greet(lastName:string){
            console.log(`Holla, je m'apelle ${this.firstName} ${lastName}`)
        };
    }

    const myPerson = new Person();
    myPerson.firstName = "Zero";
    greetWithInterface(myPerson);
    myPerson.greet('Cool');

}