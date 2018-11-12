function ex_06_interface_inheritance() {
    /*Interfaces can extend from other interfaces */
    interface NamedPerson6 {
        firstName: string;
        age?: number;
        greet(lastName:string):void; 
    }

    /*---AgedPerson will require all properties of NamedPerson. Note that age was optional and now will be mondatory ---*/
    interface AgedPerson extends NamedPerson6 {
        title: string;
        age: number;
    }

    const oldPerson: AgedPerson = {
        age: 27,
        firstName: 'Krauser',
        title: 'Dr',
        greet(lastName: string){
            console.log(`Hello ${this.title} ${this.firstName} ${lastName}`);
        }
    }

    oldPerson.greet('Splenger');
}