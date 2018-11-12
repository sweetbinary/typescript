function ex_08_decorators_for_methods() {
    /*
Decorator editable will make method aMethod editable or not editable
Decorator editable's factory takes the following arguments
*/

/*==target: any - varies if we have a static class/method or enstansiated==*/

/*==propName: string - Name of the property==*/

/*==descriptor: PropertyDescriptor - PropertyDescriptor is related to JS Onject.defineProperty which allows you to configure a property. Here we use writable where if we set it to false, it will set the value to read only==*/


    function editable(value: boolean){
        return function(target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
        }
    }

    class Project {
        projectName: string;
        constructor(name: string){
            this.projectName = name;
            console.log(`Project '${this.projectName}' was instanced`);
        }
        @editable(true)
        aMethod() {
            console.log(1000);
        }
    }

    const project = new Project("Projeck Namz");
    project.aMethod();
    /*---If decorator @editable is set to false this will throw an error because you shouldn't be able to override the function ---*/
    project.aMethod = function () {
        console.log(2000);
    };
    project.aMethod();

}