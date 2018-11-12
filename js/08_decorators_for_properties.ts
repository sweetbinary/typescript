function ex_08_decorators_for_properties(){


    function editableForProperty(value: boolean) {
        return function(target:any, propName: string):any {
            const newDescriptor: PropertyDescriptor = {
                writable: value
            };
            return newDescriptor;
        }
    }

    class Project {
        @editableForProperty(true)
        projectName: string;

        constructor(name: string){
            this.projectName = name;
            console.log(`Project '${this.projectName}' was instanced`);
        }

    }

    const project = new Project("Project Namz II");
    /*------*/
    project.projectName = "Edited PROJECT NAMZ";
    console.log(project.projectName);

}
