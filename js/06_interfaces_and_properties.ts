function ex_06_interfaces_and_properties() {

    const person = {
        firstName: `Tsiaklis`,
        age: 44
    }

    interface namedPerson {
        firstName: string;
    }

    function greetWithInterface(person: namedPerson){
        console.log(`Interface Hail ${person.firstName}`)
    }
 
    /*this will throw an error when compiling because age is not defined in the interface so it's better to create interfaces as explicit as possible*/
    //greetWithInterface({ firstName:'Pompos', age: 99 });

    /*however we can add an optional property by using the question mark*/

    interface namedPerson2 {
        firstName: string;
        age?: number;
    }

    function greetWithInterface2(person: namedPerson2){
        console.log(`Hail ${person.firstName}`)
    }

    greetWithInterface2({ firstName:'Pompos', age: 99 });

    /*if you want to set up an interface and don't know the name of the properties in advance you can use square brackets and use any name for the key you want(it has to be defined as string since property names cannot be classified as string).    */

    interface namedPerson3 {
        firstName: string;
        age?: number;
        [tempPropname: string]: any; //type can be number or whatever
    }

    const person3 = {
        firstName: `Tsiaklis`,
        age: 44,
        hobbies: ['yodelling','hacking the information superhighway']
    }

    function listHobbies(person: namedPerson3){
        console.log(`${person.hobbies}`)
    }

    listHobbies(person3);

}