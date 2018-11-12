function ex_06_interfaces_and_methods() {
    /* you can also add methods inside interfaces */
    
    interface namedPerson4 {
        firstName: string;
        greet(lastName:string):void; 
    }

    const person4:namedPerson4 = {
        firstName: `Tsiaklis`,
        greet(lastName:string){
            console.log(`Holla, je m'apelle ${this.firstName} ${lastName}`)
        }
    }

    person4.greet('Peterson');
    
}